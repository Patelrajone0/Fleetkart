import React, { useState, useRef, useEffect, useMemo } from 'react';
import { ChevronDown, Check, Search, X } from 'lucide-react';

export interface SelectOption {
  value: string;
  label: string;
  subLabel?: string;
  badge?: string;
  group?: string;
}

export interface CustomSelectProps {
  value: string | number;
  onChange: (value: string) => void;
  options: (string | SelectOption)[];
  placeholder?: string;
  icon?: React.ReactNode;
  searchable?: boolean;
  searchPlaceholder?: string;
  className?: string;
  buttonClassName?: string;
  dropdownClassName?: string;
  disabled?: boolean;
  align?: 'left' | 'right';
  emptyMessage?: string;
}

export const CustomSelect: React.FC<CustomSelectProps> = ({
  value,
  onChange,
  options,
  placeholder = 'Select an option',
  icon,
  searchable,
  searchPlaceholder = 'Search...',
  className = '',
  buttonClassName = '',
  dropdownClassName = '',
  disabled = false,
  align = 'left',
  emptyMessage = 'No matching options',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Normalize options into uniform SelectOption array
  const normalizedOptions: SelectOption[] = useMemo(() => {
    return options.map((opt) => {
      if (typeof opt === 'string' || typeof opt === 'number') {
        return {
          value: String(opt),
          label: String(opt),
        };
      }
      return {
        ...opt,
        value: String(opt.value),
        label: opt.label,
      };
    });
  }, [options]);

  // Find currently selected option
  const selectedOption = useMemo(() => {
    return normalizedOptions.find((opt) => String(opt.value) === String(value));
  }, [normalizedOptions, value]);

  // Auto-enable search if there are more than 7 items and searchable isn't explicitly false
  const isSearchActive = searchable !== undefined ? searchable : normalizedOptions.length > 7;

  // Filter options based on search query
  const filteredOptions = useMemo(() => {
    if (!searchQuery.trim()) return normalizedOptions;
    const query = searchQuery.toLowerCase().trim();
    return normalizedOptions.filter((opt) => {
      const matchLabel = opt.label.toLowerCase().includes(query);
      const matchSub = opt.subLabel ? opt.subLabel.toLowerCase().includes(query) : false;
      const matchBadge = opt.badge ? opt.badge.toLowerCase().includes(query) : false;
      const matchGroup = opt.group ? opt.group.toLowerCase().includes(query) : false;
      return matchLabel || matchSub || matchBadge || matchGroup;
    });
  }, [normalizedOptions, searchQuery]);

  // Close on outside click or Escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSearchQuery('');
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        setSearchQuery('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  // Auto-focus search input when opened
  useEffect(() => {
    if (isOpen && isSearchActive && searchInputRef.current) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 50);
    }
  }, [isOpen, isSearchActive]);

  const handleSelect = (val: string) => {
    onChange(val);
    setIsOpen(false);
    setSearchQuery('');
  };

  const handleToggle = () => {
    if (disabled) return;
    setIsOpen((prev) => !prev);
    if (isOpen) {
      setSearchQuery('');
    }
  };

  // Group filtered options if any option has a group property
  const groupedOptions = useMemo(() => {
    const hasGroups = filteredOptions.some((opt) => opt.group);
    if (!hasGroups) return null;

    const groups: { [key: string]: SelectOption[] } = {};
    filteredOptions.forEach((opt) => {
      const g = opt.group || 'Options';
      if (!groups[g]) groups[g] = [];
      groups[g].push(opt);
    });
    return groups;
  }, [filteredOptions]);

  return (
    <div ref={containerRef} className={`relative select-none ${className}`}>
      {/* Trigger Button */}
      <button
        type="button"
        disabled={disabled}
        onClick={handleToggle}
        className={`w-full flex items-center justify-between gap-2 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer shadow-2xs text-left ${
          disabled
            ? 'bg-slate-100 text-slate-400 border border-slate-200 cursor-not-allowed'
            : isOpen
            ? 'bg-white border-[#7091E6] ring-2 ring-[#7091E6]/20 text-[#3D52A0] shadow-md'
            : 'bg-[#EDE8F5] hover:bg-[#E2DCF0] border-[#ADBBDA] text-[#3D52A0]'
        } border ${buttonClassName}`}
      >
        <div className="flex items-center gap-2 min-w-0 flex-1">
          {icon && <span className="shrink-0 text-[#7091E6]">{icon}</span>}
          <span className="truncate">
            {selectedOption ? selectedOption.label : String(value) || placeholder}
          </span>
        </div>

        <ChevronDown
          className={`w-4 h-4 shrink-0 transition-transform duration-200 ease-out ${
            isOpen ? 'rotate-180 text-[#7091E6]' : 'text-[#8697C4]'
          }`}
        />
      </button>

      {/* Animated Dropdown Menu */}
      {isOpen && (
        <div
          className={`absolute z-50 mt-1.5 w-full min-w-[220px] max-w-[calc(100vw-2rem)] bg-white border border-[#ADBBDA]/80 rounded-2xl shadow-2xl overflow-hidden animate-dropdown origin-top ${
            align === 'right' ? 'right-0' : 'left-0'
          } ${dropdownClassName}`}
        >
          {/* Optional In-Dropdown Search Bar */}
          {isSearchActive && (
            <div className="p-2 border-b border-[#ADBBDA]/40 bg-[#F8FAFC]">
              <div className="relative">
                <Search className="w-3.5 h-3.5 text-[#8697C4] absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={searchPlaceholder}
                  className="w-full bg-white border border-[#ADBBDA]/60 rounded-xl pl-8 pr-7 py-1.5 text-xs text-[#3D52A0] placeholder-[#8697C4] font-medium focus:outline-none focus:border-[#7091E6] focus:ring-1 focus:ring-[#7091E6]"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-[#8697C4] hover:text-[#3D52A0] p-0.5"
                  >
                    <X className="w-3 h-3" />
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Options List */}
          <div className="max-h-60 overflow-y-auto p-1.5 space-y-0.5 divide-y divide-slate-100/60">
            {filteredOptions.length === 0 ? (
              <div className="py-6 px-4 text-center text-xs text-[#8697C4] font-medium">
                {emptyMessage}
              </div>
            ) : groupedOptions ? (
              Object.entries(groupedOptions).map(([groupTitle, groupItems]) => (
                <div key={groupTitle} className="pt-1.5 first:pt-0">
                  <div className="px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-[#8697C4] bg-slate-50 rounded-lg mb-1">
                    {groupTitle}
                  </div>
                  <div className="space-y-0.5">
                    {groupItems.map((opt) => {
                      const isSelected = String(opt.value) === String(value);
                      return (
                        <button
                          key={`${groupTitle}-${opt.value}`}
                          type="button"
                          onClick={() => handleSelect(opt.value)}
                          className={`w-full flex items-center justify-between gap-2 px-3 py-2 rounded-xl text-left text-xs sm:text-sm font-semibold transition-all duration-150 cursor-pointer active:scale-[0.99] ${
                            isSelected
                              ? 'bg-[#EDE8F5] text-[#3D52A0] font-black border border-[#7091E6]/40 shadow-2xs'
                              : 'text-[#1E2E4E] hover:bg-[#EDE8F5]/60 hover:text-[#3D52A0] hover:translate-x-0.5'
                          }`}
                        >
                          <div className="flex flex-col min-w-0 flex-1">
                            <span className="truncate">{opt.label}</span>
                            {opt.subLabel && (
                              <span className="text-[11px] font-normal text-[#8697C4] truncate">
                                {opt.subLabel}
                              </span>
                            )}
                          </div>

                          <div className="flex items-center gap-2 shrink-0">
                            {opt.badge && (
                              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-white border border-[#ADBBDA]/60 text-[#7091E6]">
                                {opt.badge}
                              </span>
                            )}
                            {isSelected && (
                              <Check className="w-4 h-4 text-[#7091E6] shrink-0 animate-in zoom-in-75 duration-150" />
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))
            ) : (
              filteredOptions.map((opt) => {
                const isSelected = String(opt.value) === String(value);
                return (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => handleSelect(opt.value)}
                    className={`w-full flex items-center justify-between gap-2 px-3 py-2 rounded-xl text-left text-xs sm:text-sm font-semibold transition-all duration-150 cursor-pointer active:scale-[0.99] ${
                      isSelected
                        ? 'bg-[#EDE8F5] text-[#3D52A0] font-black border border-[#7091E6]/40 shadow-2xs'
                        : 'text-[#1E2E4E] hover:bg-[#EDE8F5]/60 hover:text-[#3D52A0] hover:translate-x-0.5'
                    }`}
                  >
                    <div className="flex flex-col min-w-0 flex-1">
                      <span className="truncate">{opt.label}</span>
                      {opt.subLabel && (
                        <span className="text-[11px] font-normal text-[#8697C4] truncate">
                          {opt.subLabel}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      {opt.badge && (
                        <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-white border border-[#ADBBDA]/60 text-[#7091E6]">
                          {opt.badge}
                        </span>
                      )}
                      {isSelected && (
                        <Check className="w-4 h-4 text-[#7091E6] shrink-0 animate-in zoom-in-75 duration-150" />
                      )}
                    </div>
                  </button>
                );
              })
            )}
          </div>
        </div>
      )}
    </div>
  );
};
