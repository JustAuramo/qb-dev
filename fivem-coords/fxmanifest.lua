fx_version 'adamant'
game 'gta5'
author 'FivemCoords'
lua54 'yes'

version '1.0.1'

shared_script {'config.lua', '@ox_lib/init.lua'}

client_scripts {
    'client.lua',
    'coords.lua'
}

server_script 'server.lua'
