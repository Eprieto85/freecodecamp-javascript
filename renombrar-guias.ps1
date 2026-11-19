$carpeta = Split-Path -Parent $MyInvocation.MyCommand.Path

$renombrar = @{
    "GUIA-OBJETOS.md"      = "05-GUIA-OBJETOS.md"
    "GUIA-CICLOS.md"       = "06-GUIA-CICLOS.md"
    "GUIA-FUNDAMENTOS.md"  = "07-GUIA-FUNDAMENTOS.md"
    "GUIA-HOF.md"          = "08-GUIA-HOF.md"
    "GUIA-DOM.md"          = "09-GUIA-DOM.md"
    "GUIA-A11Y.md"         = "10-GUIA-A11Y.md"
    "GUIA-DEPURACION.md"   = "11-GUIA-DEPURACION.md"
    "GUIA-REGEX.md"        = "12-GUIA-REGEX.md"
    "GUIA-VALIDACION.md"   = "14-GUIA-VALIDACION.md"
    "GUIA-FECHAS.md"       = "15-GUIA-FECHAS.md"
    "GUIA-AUDIO-VIDEO.md"  = "16-GUIA-AUDIO-VIDEO.md"
    "GUIA-MAPAS.md"        = "18-GUIA-MAPAS.md"
    "GUIA-LOCALSTORAGE.md" = "20-GUIA-LOCALSTORAGE.md"
    "GUIA-CLASES.md"       = "21-GUIA-CLASES.md"
    "GUIA-RECURSION.md"    = "23-GUIA-RECURSION.md"
}

foreach ($original in $renombrar.Keys) {
    $rutaOrigen = Join-Path $carpeta $original
    $rutaDestino = Join-Path $carpeta $renombrar[$original]
    if (Test-Path $rutaOrigen) {
        Rename-Item -Path $rutaOrigen -NewName $renombrar[$original]
        Write-Host "OK: $original -> $($renombrar[$original])"
    } else {
        Write-Host "No encontrado: $original"
    }
}

Write-Host "`nListo. Presiona Enter para cerrar."
Read-Host
