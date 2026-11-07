# Fleetkart Git Auto-Sync Watcher
# Automatically commits and pushes changes to GitHub whenever files are modified.

param (
    [int]$IntervalSeconds = 5,
    [string]$Branch = "main"
)

Write-Host "==================================================" -ForegroundColor Cyan
Write-Host "🚀 Fleetkart Git Auto-Sync Started" -ForegroundColor Green
Write-Host "📂 Repository: https://github.com/Patelrajone0/Fleetkart" -ForegroundColor White
Write-Host "🌿 Target Branch: $Branch" -ForegroundColor White
Write-Host "⏱️  Poll Interval: ${IntervalSeconds}s" -ForegroundColor White
Write-Host "Press Ctrl+C to stop auto-sync at any time." -ForegroundColor Yellow
Write-Host "==================================================" -ForegroundColor Cyan

while ($true) {
    try {
        # Check for modified, deleted, or untracked files
        $status = git status --porcelain
        
        if ($status) {
            $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
            Write-Host "[$timestamp] 📝 Detected changes in repository:" -ForegroundColor Yellow
            $status | ForEach-Object { Write-Host "   $_" -ForegroundColor Gray }
            
            # Allow 3 seconds debounce for multiple rapid saves
            Start-Sleep -Seconds 3
            
            # Stage all changes
            git add .
            
            # Check if there is still staged content to commit
            $staged = git diff --cached --name-only
            if ($staged) {
                $commitMsg = "auto: update files ($timestamp)"
                git commit -m $commitMsg
                Write-Host "[$timestamp] 💾 Committed: $commitMsg" -ForegroundColor Green
                
                # Push to remote GitHub branch
                Write-Host "[$timestamp] 🚀 Pushing to origin/$Branch..." -ForegroundColor Cyan
                $pushOutput = git push origin $Branch 2>&1
                
                if ($LASTEXITCODE -eq 0) {
                    Write-Host "[$timestamp] ✅ Successfully synced to GitHub!" -ForegroundColor Green
                } else {
                    Write-Host "[$timestamp] ⚠️ Push encountered a notice/retry:" -ForegroundColor Magenta
                    Write-Host "$pushOutput" -ForegroundColor Gray
                }
            }
        }
    } catch {
        Write-Host "[$timestamp] ⚠️ Error during sync loop: $_" -ForegroundColor Red
    }

    Start-Sleep -Seconds $IntervalSeconds
}
