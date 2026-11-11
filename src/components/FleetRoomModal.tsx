import React, { useState } from 'react';
import { 
  X, 
  Users, 
  MessageSquare, 
  BadgePercent, 
  MapPin, 
  Clock, 
  Send, 
  ShieldCheck, 
  CheckCircle2, 
  ThumbsUp, 
  Share2, 
  Plus, 
  Award, 
  Building2, 
  Trash2, 
  AlertTriangle, 
  Crown 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { DealerQuote, Fleet, User } from '../types';

interface FleetRoomModalProps {
  fleet: Fleet;
  currentUser: User;
  onClose: () => void;
  onSendMessage: (fleetId: string, messageText: string, isQuoteShare?: boolean, quoteData?: any) => void;
  onVoteQuote: (fleetId: string, quoteId: string) => void;
  onLockDeal: (fleetId: string, quote: DealerQuote) => void;
  onShareWhatsApp: (fleet: Fleet) => void;
  onDeleteFleet?: (fleetId: string) => void;
}

export const FleetRoomModal: React.FC<FleetRoomModalProps> = ({
  fleet,
  currentUser,
  onClose,
  onSendMessage,
  onVoteQuote,
  onLockDeal,
  onShareWhatsApp,
  onDeleteFleet,
}) => {
  const [activeTab, setActiveTab] = useState<'members' | 'chat' | 'dealer-bids'>('chat');
  const [messageInput, setMessageInput] = useState('');
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  
  // Showroom quote share modal inside chat
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [quoteDealerName, setQuoteDealerName] = useState('');
  const [quoteDiscount, setQuoteDiscount] = useState('');
  const [quoteNotes, setQuoteNotes] = useState('');

  // Lock deal confirmation state
  const [dealLockedSuccess, setDealLockedSuccess] = useState(false);
  const [winningDealer, setWinningDealer] = useState<string>('CG Road Hyundai');

  const isCreator = currentUser.id === fleet.creatorId;

  const handleConfirmDelete = () => {
    if (onDeleteFleet) {
      onDeleteFleet(fleet.id);
      setShowDeleteConfirm(false);
      onClose();
    }
  };

  const currentCount = fleet.joinedMembers.length;
  const targetCount = fleet.targetSize;
  const isFull = currentCount >= targetCount;
  const spotsLeft = Math.max(0, targetCount - currentCount);

  // Quick message chips
  const quickReplies = [
    'I can visit the showroom this Saturday!',
    'Can the dealer provide Ceramic coating free?',
    'Is Polar White color in ready stock?',
    'My ₹25k refundable token is ready!'
  ];

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!messageInput.trim()) return;

    onSendMessage(fleet.id, messageInput.trim());
    setMessageInput('');
  };

  const handleQuickReply = (text: string) => {
    onSendMessage(fleet.id, text);
  };

  const handleSubmitQuote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quoteDealerName.trim() || !quoteDiscount.trim()) return;

    onSendMessage(fleet.id, '', true, {
      dealerName: quoteDealerName.trim(),
      discountOffer: quoteDiscount.trim(),
      notes: quoteNotes.trim()
    });

    setQuoteDealerName('');
    setQuoteDiscount('');
    setQuoteNotes('');
    setShowQuoteForm(false);
  };

  const handleConfirmLockDeal = (quote: DealerQuote) => {
    setWinningDealer(quote.dealerName);
    onLockDeal(fleet.id, quote);
    setDealLockedSuccess(true);
    confetti({
      particleCount: 200,
      spread: 100,
      origin: { y: 0.5 },
    });
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#3D52A0]/40 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 overflow-y-auto">
      <div className="w-full max-w-4xl bg-white border border-[#ADBBDA] rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] animate-in fade-in zoom-in-95 duration-200">
        
        {/* Top Header */}
        <div className="bg-[#3D52A0] border-b border-[#3D52A0] p-4 sm:p-5 flex items-center justify-between text-white">
          <div className="flex items-center gap-3">
            <img
              src={fleet.carImageUrl}
              alt={fleet.model}
              className="w-12 h-12 rounded-xl object-contain bg-white p-1 border-2 border-[#7091E6]"
            />
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-black uppercase tracking-wider text-[#ADBBDA]">
                  {fleet.brand} {fleet.model}
                </span>
                <span className="text-slate-400">•</span>
                <span className="text-xs font-semibold text-[#EDE8F5] flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#EDE8F5]" />
                  {fleet.city}
                </span>
                {isCreator && (
                  <span className="flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#7091E6] text-white">
                    <Crown className="w-3 h-3 text-white" />
                    Host
                  </span>
                )}
                {isFull && (
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#7091E6] text-white">
                    5/5 Full Group
                  </span>
                )}
              </div>
              <h2 className="text-base sm:text-xl font-black text-white leading-tight">
                {fleet.variant}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Exclusive Creator Delete Option */}
            {isCreator && onDeleteFleet && (
              <button
                type="button"
                onClick={() => setShowDeleteConfirm(true)}
                title="Delete This Fleet (Only available to you as the creator)"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#EDE8F5] hover:bg-white text-[#3D52A0] text-xs font-bold transition-colors cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5 text-[#8697C4]" />
                <span className="hidden sm:inline">Delete Fleet</span>
              </button>
            )}

            <button
              type="button"
              onClick={() => onShareWhatsApp(fleet)}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#7091E6] hover:bg-white text-xs font-semibold text-white hover:text-[#3D52A0] transition-colors cursor-pointer"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Share Group</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-xl bg-[#7091E6]/30 hover:bg-[#7091E6] text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Fleet Target Savings & Status Banner */}
        <div className="bg-[#EDE8F5] border-b border-[#ADBBDA] px-5 py-3 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 text-[#3D52A0] font-bold">
              <Building2 className="w-4 h-4 text-[#7091E6]" />
              <span>Competitive Dealer Tender:</span>
              <span className="text-[#1E293B]/75 font-medium">
                Dealers quote custom bulk discounts
              </span>
            </div>
            <span className="bg-[#7091E6] text-white px-2 py-0.5 rounded font-black shadow-xs">
              {fleet.estimatedSavingsBadge}
            </span>
          </div>

          <div className="flex items-center gap-4 text-[#3D52A0] font-medium">
            <span className="flex items-center gap-1">
              <Users className="w-3.5 h-3.5 text-[#7091E6]" />
              <strong>{currentCount}/{targetCount}</strong> Buyers Active
            </span>
            <span className="flex items-center gap-1 text-[#8697C4]">
              <Clock className="w-3.5 h-3.5 text-[#8697C4]" />
              Booking Window: {fleet.deadlineHours}h
            </span>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-[#ADBBDA] bg-[#EDE8F5]/50 px-5 pt-2">
          <button
            type="button"
            onClick={() => setActiveTab('chat')}
            className={`flex items-center gap-2 py-3 px-4 border-b-2 font-bold text-xs sm:text-sm transition-all cursor-pointer ${
              activeTab === 'chat'
                ? 'border-[#7091E6] text-[#3D52A0]'
                : 'border-transparent text-[#8697C4] hover:text-[#3D52A0]'
            }`}
          >
            <MessageSquare className="w-4 h-4 text-[#7091E6]" />
            <span>Group Chat ({fleet.chatMessages.length})</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('dealer-bids')}
            className={`flex items-center gap-2 py-3 px-4 border-b-2 font-bold text-xs sm:text-sm transition-all relative cursor-pointer ${
              activeTab === 'dealer-bids'
                ? 'border-[#7091E6] text-[#3D52A0]'
                : 'border-transparent text-[#8697C4] hover:text-[#3D52A0]'
            }`}
          >
            <BadgePercent className="w-4 h-4 text-[#7091E6]" />
            <span>Local Dealer Bids ({fleet.dealerQuotes.length})</span>
            {fleet.dealerQuotes.length > 0 && (
              <span className="w-2 h-2 rounded-full bg-[#7091E6] animate-ping" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('members')}
            className={`flex items-center gap-2 py-3 px-4 border-b-2 font-bold text-xs sm:text-sm transition-all cursor-pointer ${
              activeTab === 'members'
                ? 'border-[#7091E6] text-[#3D52A0]'
                : 'border-transparent text-[#8697C4] hover:text-[#3D52A0]'
            }`}
          >
            <Users className="w-4 h-4 text-[#7091E6]" />
            <span>Buyers Lobby ({currentCount}/{targetCount})</span>
          </button>
        </div>

        {/* Modal Body / Tab Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-white">
          
          {/* TAB 1: GROUP CHAT */}
          {activeTab === 'chat' && (
            <div className="flex flex-col h-[520px] max-h-[60vh]">
              {/* Chat Stream */}
              <div className="flex-1 overflow-y-auto space-y-4 pr-2 mb-4">
                {/* Introduction system note */}
                <div className="text-center my-2">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#EDE8F5] text-[#3D52A0] text-[11px] border border-[#ADBBDA] font-medium">
                    🔒 Verified Buyer Room for {fleet.city} • Authorized showrooms submit tenders here
                  </span>
                </div>

                {fleet.chatMessages.map((msg) => {
                  const isMe = msg.senderId === currentUser.id || msg.senderName === currentUser.name;
                  return (
                    <div
                      key={msg.id}
                      className={`flex gap-3 items-start ${isMe ? 'flex-row-reverse' : ''}`}
                    >
                      <div className="w-8 h-8 rounded-full bg-[#EDE8F5] text-[#3D52A0] font-bold text-xs flex items-center justify-center shrink-0 border border-[#ADBBDA]">
                        {msg.senderName.slice(0, 1).toUpperCase()}
                      </div>
                      <div className={`max-w-[82%] sm:max-w-[70%] ${isMe ? 'items-end' : 'items-start'}`}>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-bold text-[#3D52A0]">
                            {isMe ? 'You' : msg.senderName}
                          </span>
                          <span className="text-[10px] text-[#8697C4]">
                            {msg.timestamp}
                          </span>
                        </div>

                        {msg.isDealerQuoteShare && msg.quoteData ? (
                          /* Structured Dealer Quote Card inside Chat */
                          <div className="p-3.5 rounded-2xl bg-[#EDE8F5] border border-[#7091E6] shadow-md text-left">
                            <div className="flex items-center gap-1.5 text-xs font-bold text-[#7091E6] mb-1">
                              <BadgePercent className="w-4 h-4" />
                              <span>Showroom Quote Shared</span>
                            </div>
                            <div className="font-bold text-[#3D52A0] text-sm">
                              {msg.quoteData.dealerName}
                            </div>
                            <div className="text-[#3D52A0] font-black text-base my-0.5">
                              Offer: {msg.quoteData.discountOffer}
                            </div>
                            {msg.quoteData.notes && (
                              <p className="text-xs text-[#1E293B]/80 mt-1 italic">
                                &ldquo;{msg.quoteData.notes}&rdquo;
                              </p>
                            )}
                          </div>
                        ) : (
                          <div
                            className={`p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                              isMe
                                ? 'bg-[#7091E6] text-white font-medium rounded-tr-none shadow-sm'
                                : 'bg-[#EDE8F5] text-[#1E293B] border border-[#ADBBDA] rounded-tl-none'
                            }`}
                          >
                            {msg.text}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Quick Reply Suggestions */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-2 mb-2 no-scrollbar">
                {quickReplies.map((qr, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => handleQuickReply(qr)}
                    className="text-[11px] whitespace-nowrap px-2.5 py-1 rounded-full bg-[#EDE8F5] hover:bg-[#ADBBDA]/30 text-[#3D52A0] border border-[#ADBBDA] transition-colors shrink-0 cursor-pointer"
                  >
                    💬 {qr}
                  </button>
                ))}
              </div>

              {/* Chat Input Bar */}
              <form onSubmit={handleSend} className="flex items-center gap-2 pt-2 border-t border-[#ADBBDA]">
                <button
                  type="button"
                  onClick={() => setShowQuoteForm(true)}
                  title="Share a quote or discount you received from a local showroom"
                  className="px-3 py-2.5 rounded-xl bg-[#EDE8F5] hover:bg-[#ADBBDA]/40 text-[#3D52A0] text-xs font-bold flex items-center gap-1.5 border border-[#ADBBDA] transition-colors shrink-0 cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5 text-[#7091E6]" />
                  <span className="hidden sm:inline">Share Showroom Quote</span>
                </button>

                <input
                  type="text"
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  placeholder={`Coordinate with ${fleet.city} buyers (e.g. showroom visit date)...`}
                  className="flex-1 bg-[#EDE8F5] border border-[#ADBBDA] rounded-xl px-4 py-2.5 text-xs sm:text-sm text-[#3D52A0] placeholder-[#8697C4] focus:outline-none focus:border-[#7091E6]"
                />

                <button
                  type="submit"
                  disabled={!messageInput.trim()}
                  className="p-2.5 rounded-xl bg-[#7091E6] hover:bg-[#3D52A0] disabled:opacity-40 text-white transition-colors shrink-0 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          )}

          {/* TAB 2: LOCAL DEALER BIDS */}
          {activeTab === 'dealer-bids' && (
            <div className="space-y-6">
              <div className="bg-[#EDE8F5] p-4 rounded-2xl border border-[#ADBBDA] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h3 className="text-sm font-bold text-[#3D52A0] flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#7091E6]" />
                    Competing Bulk Dealership Bids for {fleet.city}
                  </h3>
                  <p className="text-xs text-[#1E293B]/70 mt-0.5">
                    Dealers submit competitive tenders detailing cash discount, free insurance, and accessories.
                  </p>
                </div>
                <div className="text-xs bg-[#7091E6] text-white px-3 py-1.5 rounded-xl font-bold shadow-xs shrink-0">
                  Bulk Tender for 5 Units
                </div>
              </div>

              {/* Bids List */}
              <div className="grid grid-cols-1 gap-4">
                {fleet.dealerQuotes.map((quote) => {
                  const hasVoted = quote.voters.includes(currentUser.name);
                  return (
                    <div
                      key={quote.id}
                      className={`p-5 rounded-2xl border transition-all ${
                        hasVoted
                          ? 'bg-[#EDE8F5] border-[#7091E6] ring-2 ring-[#7091E6]/30'
                          : 'bg-[#EDE8F5]/60 border-[#ADBBDA] hover:border-[#7091E6]'
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            {quote.badge && (
                              <span className="px-2 py-0.5 rounded text-[10px] font-extrabold uppercase bg-[#7091E6] text-white">
                                {quote.badge}
                              </span>
                            )}
                            <span className="text-xs text-[#3D52A0] font-bold flex items-center gap-1">
                              ★ {quote.rating} ({quote.reviewsCount} reviews)
                            </span>
                          </div>
                          <h4 className="text-base sm:text-lg font-bold text-[#3D52A0]">
                            {quote.dealerName}
                          </h4>
                          <p className="text-xs text-[#8697C4] flex items-center gap-1 mt-0.5">
                            <MapPin className="w-3.5 h-3.5 text-[#8697C4]" />
                            {quote.dealerLocation}
                          </p>
                        </div>

                        {/* Dealer Discount Offer */}
                        <div className="sm:text-right">
                          <div className="text-xl sm:text-2xl font-black text-[#3D52A0]">
                            {quote.estimatedSavings}
                          </div>
                          <div className="text-xs font-semibold text-[#7091E6]">
                            {quote.discountOfferText}
                          </div>
                        </div>
                      </div>

                      {/* Included Perks & Freebies */}
                      <div className="mb-4">
                        <div className="text-[11px] font-bold text-[#3D52A0] uppercase tracking-wider mb-2">
                          Dealer Perks &amp; Package Inclusions:
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {quote.perks.map((perk, pIdx) => (
                            <div key={pIdx} className="flex items-start gap-2 text-xs text-[#1E293B]/80">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#7091E6] shrink-0 mt-0.5" />
                              <span>{perk}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Action Bar: Vote & Lock Deal */}
                      <div className="pt-3 border-t border-[#ADBBDA] flex flex-wrap items-center justify-between gap-3">
                        <div className="flex items-center gap-2 text-xs text-[#3D52A0]">
                          <button
                            type="button"
                            onClick={() => onVoteQuote(fleet.id, quote.id)}
                            className={`px-3 py-1.5 rounded-xl border text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                              hasVoted
                                ? 'bg-[#7091E6] text-white border-[#7091E6]'
                                : 'bg-white border-[#ADBBDA] text-[#3D52A0] hover:border-[#7091E6]'
                            }`}
                          >
                            <ThumbsUp className="w-3.5 h-3.5" />
                            <span>{quote.votes} Votes {hasVoted && '(Your Choice)'}</span>
                          </button>
                          <span className="text-[11px] text-[#8697C4]">
                            Delivery Promise: <strong>{quote.deliveryDays} Days</strong>
                          </span>
                        </div>

                        <button
                          type="button"
                          onClick={() => handleConfirmLockDeal(quote)}
                          className="px-4 py-2 rounded-xl bg-[#7091E6] hover:bg-[#3D52A0] text-white text-xs sm:text-sm font-bold shadow-md shadow-[#7091E6]/25 flex items-center gap-1.5 transition-all cursor-pointer"
                        >
                          <ShieldCheck className="w-4 h-4" />
                          <span>Lock This Dealer Tender (₹25k Refundable)</span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 3: BUYERS LOBBY */}
          {activeTab === 'members' && (
            <div className="space-y-6">
              <div className="bg-[#EDE8F5] p-4 rounded-2xl border border-[#ADBBDA] flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-[#3D52A0]">
                    {fleet.city} Buyers Roster
                  </h3>
                  <p className="text-xs text-[#1E293B]/70">
                    5 buyers teaming up for maximum dealer discount on {fleet.model}.
                  </p>
                </div>
                <div className="text-xs font-bold text-white bg-[#7091E6] px-3 py-1 rounded-full shadow-xs">
                  {currentCount} of {targetCount} Locked
                </div>
              </div>

              {/* Members Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {fleet.joinedMembers.map((member, idx) => (
                  <div
                    key={member.id || idx}
                    className="p-4 rounded-2xl bg-[#EDE8F5] border border-[#ADBBDA] hover:border-[#7091E6] transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <img
                          src={member.avatar}
                          alt={member.name}
                          className="w-11 h-11 rounded-full object-cover border-2 border-[#7091E6]"
                        />
                        <div>
                          <div className="flex items-center gap-1.5">
                            <h4 className="font-bold text-[#3D52A0] text-sm">
                              {member.name}
                            </h4>
                            {member.id === currentUser.id && (
                              <span className="text-[10px] bg-[#7091E6] text-white px-1.5 py-0.2 rounded font-bold">
                                You
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-[#8697C4] flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-[#7091E6]" />
                            {member.area}, {member.city}
                          </p>
                        </div>
                      </div>

                      <div className="space-y-1.5 text-xs text-[#1E293B]/80 bg-white p-2.5 rounded-xl border border-[#ADBBDA] mb-3">
                        <div className="flex justify-between">
                          <span className="text-[#8697C4]">Variant:</span>
                          <span className="font-semibold text-[#3D52A0]">{member.variant}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[#8697C4]">Color:</span>
                          <span className="font-semibold text-[#3D52A0]">{member.color}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[#8697C4]">Transmission:</span>
                          <span className="font-semibold text-[#3D52A0]">{member.transmission}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs pt-2 border-t border-[#ADBBDA]">
                      <span className="text-[#8697C4] text-[11px]">Token Status:</span>
                      <span className="font-bold text-[#3D52A0] bg-[#ADBBDA]/30 px-2 py-0.5 rounded text-[11px] border border-[#ADBBDA]">
                        ✓ {member.readiness}
                      </span>
                    </div>
                  </div>
                ))}

                {/* Empty slots placeholders */}
                {Array.from({ length: spotsLeft }).map((_, i) => (
                  <div
                    key={`slot-${i}`}
                    className="p-5 rounded-2xl bg-[#EDE8F5]/40 border-2 border-dashed border-[#ADBBDA] flex flex-col items-center justify-center text-center text-[#8697C4] min-h-[170px]"
                  >
                    <div className="w-10 h-10 rounded-full bg-white border border-[#ADBBDA] flex items-center justify-center text-sm font-bold text-[#3D52A0] mb-2">
                      #{currentCount + i + 1}
                    </div>
                    <div className="text-xs font-bold text-[#3D52A0]">
                      Spot Available
                    </div>
                    <p className="text-[11px] text-[#8697C4] mt-1 max-w-[170px]">
                      Share with friends in {fleet.city} to lock the 5th spot and trigger dealer bidding.
                    </p>
                    <button
                      type="button"
                      onClick={() => onShareWhatsApp(fleet)}
                      className="mt-3 px-3 py-1 rounded-lg bg-[#7091E6] hover:bg-[#3D52A0] text-white text-xs font-semibold flex items-center gap-1 shadow-xs transition-colors cursor-pointer"
                    >
                      <Share2 className="w-3 h-3" />
                      <span>Invite on WhatsApp</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>

      {/* Share Showroom Quote Sub-Modal */}
      {showQuoteForm && (
        <div className="fixed inset-0 z-60 bg-[#3D52A0]/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-white border border-[#ADBBDA] rounded-3xl p-6 shadow-2xl animate-in zoom-in-95">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-[#3D52A0] text-base flex items-center gap-2">
                <BadgePercent className="w-5 h-5 text-[#7091E6]" />
                Share Showroom Quote with Group
              </h3>
              <button
                type="button"
                onClick={() => setShowQuoteForm(false)}
                className="text-[#8697C4] hover:text-[#3D52A0] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmitQuote} className="space-y-4 text-xs sm:text-sm">
              <div>
                <label className="block text-[#3D52A0] font-semibold mb-1">
                  Showroom Name &amp; Area
                </label>
                <input
                  type="text"
                  required
                  value={quoteDealerName}
                  onChange={(e) => setQuoteDealerName(e.target.value)}
                  placeholder="e.g. Concept Hyundai, SG Highway"
                  className="w-full bg-[#EDE8F5] border border-[#ADBBDA] rounded-xl px-3 py-2 text-[#3D52A0] placeholder-[#8697C4] focus:outline-none focus:border-[#7091E6]"
                />
              </div>

              <div>
                <label className="block text-[#3D52A0] font-semibold mb-1">
                  Discount Offer / Free Inclusions
                </label>
                <input
                  type="text"
                  required
                  value={quoteDiscount}
                  onChange={(e) => setQuoteDiscount(e.target.value)}
                  placeholder="e.g. ₹1.50L Fleet Discount + Free 3-Yr Insurance"
                  className="w-full bg-[#EDE8F5] border border-[#ADBBDA] rounded-xl px-3 py-2 text-[#3D52A0] placeholder-[#8697C4] focus:outline-none focus:border-[#7091E6]"
                />
              </div>

              <div>
                <label className="block text-[#3D52A0] font-semibold mb-1">
                  Manager Notes / Delivery Promises
                </label>
                <textarea
                  rows={2}
                  value={quoteNotes}
                  onChange={(e) => setQuoteNotes(e.target.value)}
                  placeholder="e.g. GM said if 5 of us book by Friday, they will allocate stock immediately"
                  className="w-full bg-[#EDE8F5] border border-[#ADBBDA] rounded-xl px-3 py-2 text-[#3D52A0] placeholder-[#8697C4] focus:outline-none focus:border-[#7091E6]"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowQuoteForm(false)}
                  className="px-4 py-2 rounded-xl bg-[#EDE8F5] text-[#3D52A0] border border-[#ADBBDA] text-xs font-semibold cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-[#7091E6] text-white hover:bg-[#3D52A0] font-bold text-xs cursor-pointer shadow-xs"
                >
                  Post to Group Chat
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Deal Locked Success Modal */}
      {dealLockedSuccess && (
        <div className="fixed inset-0 z-60 bg-[#3D52A0]/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-white border border-[#ADBBDA] rounded-3xl p-6 text-center shadow-2xl animate-in zoom-in-95">
            <div className="w-16 h-16 rounded-full bg-[#EDE8F5] text-[#7091E6] mx-auto flex items-center justify-center mb-4 border border-[#ADBBDA]">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-black text-[#3D52A0] mb-1">
              ₹25,000 Group Token Secured!
            </h3>
            <p className="text-xs text-[#1E293B]/70 mb-4">
              Your 5-buyer fleet has selected {winningDealer}&apos;s tender.
            </p>

            <div className="p-4 rounded-2xl bg-[#EDE8F5] border border-[#ADBBDA] text-left text-xs space-y-2 mb-5">
              <div className="flex justify-between">
                <span className="text-[#8697C4]">Car:</span>
                <span className="font-bold text-[#3D52A0]">{fleet.brand} {fleet.model}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8697C4]">Selected Showroom:</span>
                <span className="font-bold text-[#3D52A0]">{winningDealer}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8697C4]">Fleet Benefit:</span>
                <span className="font-black text-[#3D52A0]">{fleet.estimatedSavingsBadge}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8697C4]">Escrow Security:</span>
                <span className="text-[#3D52A0] font-semibold">100% Refundable Until PDI</span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setDealLockedSuccess(false)}
              className="w-full py-3 rounded-xl bg-[#7091E6] hover:bg-[#3D52A0] text-white font-bold text-sm shadow-md shadow-[#7091E6]/25 transition-all cursor-pointer"
            >
              Return to Fleet Room
            </button>
          </div>
        </div>
      )}

      {/* Creator Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 z-60 bg-[#3D52A0]/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-sm bg-white border border-[#ADBBDA] rounded-3xl p-6 text-center shadow-2xl animate-in zoom-in-95">
            <div className="w-12 h-12 rounded-2xl bg-[#EDE8F5] text-[#3D52A0] mx-auto flex items-center justify-center mb-4 border border-[#ADBBDA]">
              <AlertTriangle className="w-6 h-6 text-[#7091E6]" />
            </div>

            <h3 className="text-lg font-bold text-[#3D52A0] mb-1">
              Delete This Fleet?
            </h3>
            <p className="text-xs text-[#1E293B]/70 mb-5 leading-relaxed">
              As the founding creator, deleting this {fleet.brand} {fleet.model} fleet will remove it from FleetKart and dissolve the group for all members.
            </p>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setShowDeleteConfirm(false)}
                className="flex-1 py-2.5 rounded-xl bg-[#EDE8F5] hover:bg-[#ADBBDA]/30 text-[#3D52A0] border border-[#ADBBDA] font-semibold text-xs transition-colors cursor-pointer"
              >
                Keep Fleet
              </button>
              <button
                type="button"
                onClick={handleConfirmDelete}
                className="flex-1 py-2.5 rounded-xl bg-[#3D52A0] hover:bg-[#7091E6] text-white font-bold text-xs transition-colors shadow-md cursor-pointer"
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
