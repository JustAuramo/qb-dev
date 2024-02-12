CreateThread(function() 
    if FivemCoords.Use_Menu then
        if FivemCoords.Use_OX_Lib_V3 then
            for k,v in pairs(FivemCoords.CommandMenu) do
                lib.addCommand(k, {help = v.help_string , restricted = v.permission}, function(source, args)
                    TriggerClientEvent('fivem-coords:GetLocationOfPositionAndCopyYeasUseMenu', source)
                end)
            end
        else
            lib.addCommand(v.permission, k, function(source, args)
                TriggerClientEvent('fivem-coords:GetLocationOfPositionAndCopyYeasUseMenu', source)
            end)
        end
    else
        for k,v in pairs(FivemCoords.Commands) do
            if FivemCoords.Use_OX_Lib_V3 then
                lib.addCommand(k, {help = v.help_string , restricted = v.permission}, function(source, args)
                    local data = v.get_position_type
                    TriggerClientEvent('fivem-coords:GetLocationOfPositionAndCopyNotUseMenu', source, data)
                end)
            else
                lib.addCommand(v.permission, k, function(source, args)
                    local data = v.get_position_type
                    TriggerClientEvent('fivem-coords:GetLocationOfPositionAndCopyNotUseMenu', source, data)
                end, {help = v.help_string})
            end
        end
    end
end)