# Fleetkart Git Auto-Sync Watcher
# Automatically commits and pushes changes to GitHub whenever files are modified.

param (
    [int]$IntervalSeconds = 5,
    [string]$Branch = "main"
)

Write-Host "==================================================" -ForegroundColor Cyan
Write-Host "[FLEETKART] Git Auto-Sync Watcher Active" -ForegroundColor Green
Write-Host "Repository: https://github.com/Patelrajone0/Fleetkart" -ForegroundColor White
Write-Host "Branch: $Branch" -ForegroundColor White
Write-Host "Interval: ${IntervalSeconds}s" -ForegroundColor White
Write-Host "==================================================" -ForegroundColor Cyan

while ($true) {
    try {
        $status = git status --porcelain
        
        if ($status) {
            $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
            Write-Host "[$timestamp] [DETECTED] Changes in repository:" -ForegroundColor Yellow
            $status | ForEach-Object { Write-Host "   $_" -ForegroundColor Gray }
            
            Start-Sleep -Seconds 3
            
            git add .
            
            $staged = git diff --cached --name-only
            if ($staged) {
                $commitMsg = "auto: sync changes ($timestamp)"
                git commit -m $commitMsg
                Write-Host "[$timestamp] [COMMITTED] $commitMsg" -ForegroundColor Green
                
                Write-Host "[$timestamp] [PUSHING] Pushing to origin/$Branch..." -ForegroundColor Cyan
                $pushOutput = git push origin $Branch 2>&1
                
                if ($LASTEXITCODE -eq 0) {
                    Write-Host "[$timestamp] [OK] Successfully pushed to GitHub!" -ForegroundColor Green
                } else {
                    Write-Host "[$timestamp] [NOTICE] Push output: $pushOutput" -ForegroundColor Magenta
                }
            }
        }
    } catch {
        Write-Host "[$timestamp] [ERROR] Sync loop exception: $_" -ForegroundColor Red
    }

    Start-Sleep -Seconds $IntervalSeconds
}
