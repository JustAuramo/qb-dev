RegisterNetEvent('fivem-coords:GetLocationOfPositionAndCopyNotUseMenu')
AddEventHandler('fivem-coords:GetLocationOfPositionAndCopyNotUseMenu', function(data)
  local plyPos = GetEntityCoords(cache.ped)
  local plyHead = GetEntityHeading(cache.ped)
  local DoneText = ''
  local xpos = string.format("%.2f", plyPos.x)
  local ypos = string.format("%.2f", plyPos.y)
  local zpos = string.format("%.2f", plyPos.z)
  local phead = string.format("%.2f", plyHead)
  if data.type == 'v1' or data == 'v1' then
    DoneText = "vector3("..xpos..", "..ypos..", "..zpos..")"
  elseif data.type == 'v2' or data == 'v2' then
    DoneText = "vector4("..xpos..", "..ypos..", "..zpos..", "..phead..")"
  elseif data.type == 'b1' or data == 'b1' then
    DoneText = "{x= "..xpos..", y= "..ypos..", z= "..zpos.."}"
  elseif data.type == 'b2' or data == 'b2' then
    DoneText = "{x= "..xpos..", y= "..ypos..", z= "..zpos..", h= "..phead.."}"
  elseif data.type == 't1' or data == 't1' then
    DoneText = "x= "..xpos..", y= "..ypos..", z= "..zpos..""
  elseif data.type == 't2' or data == 't2' then
    DoneText = "x= "..xpos..", y= "..ypos..", z= "..zpos..", h= "..phead..""
  elseif data.type == 's1' or data == 's1' then
    DoneText = "['x'] ="..xpos..", ['y'] ="..ypos..", ['z'] ="..zpos..""
  elseif data.type == 's2' or data == 's2' then
    DoneText = "['x'] ="..xpos..", ['y'] ="..ypos..", ['z'] ="..zpos..", ['h'] ="..phead..""
  elseif data.type == '1' or data == '1' then
    DoneText = ""..xpos..", "..ypos..", "..zpos..""
  elseif data.type == '2' or data == '2' then
    DoneText = ""..xpos..", "..ypos..", "..zpos..", "..phead..""
  elseif data.type == '3' or data == '3' then
    DoneText = ""..xpos..", "..ypos..""
  elseif data.type == '4' or data == '4' then
    DoneText = ""..phead..""
  end

  if DoneText ~= '' then
    lib.notify({
      title = "Kopioitu",
      duration = 2500,
      position = "top",
      style = {
          backgroundColor = '#141517',
          color = '#ffffff'
      },
      icon = 'fas fa-map-marker-alt',
      iconColor = '#2980B9'
  })
    lib.setClipboard(DoneText)
    DoneText = ''
  end
end)

RegisterNetEvent('testimenu', function(...)
  local input = lib.inputDialog('Basics dialog', {'First row', 'Second row'})
 
if not input then return end
print(json.encode(input), input[1], input[2])
end)

RegisterNetEvent('fivem-coords:GetLocationOfPositionAndCopyYeasUseMenu')
AddEventHandler('fivem-coords:GetLocationOfPositionAndCopyYeasUseMenu', function(data)
  lib.showContext('command_menu_main')
end)

lib.registerContext({
  id = 'command_menu_main',
  title = '🗞️ | Kordinaatti Valikko',
  options = {
    {
      title = '📈 | Vectors',
      description = 'Use Vectors cordinates!',
      menu = 'vector_valikko',
      icon = 'bars'
    },
    {
      title = '📉 | Other Cordinates',
      description = 'Use other cordinates!',
      menu = 'other_valikko',
      icon = 'bars'
    },
  },
})
lib.registerContext({
  id = 'vector_valikko',
  title = '📈 | Vectors',
  menu = "command_menu_main",
  options = {
    {
      title = 'Kopioi vector3',
			arrow = false,
			event = 'fivem-coords:GetLocationOfPositionAndCopyNotUseMenu',
			args = {type = 'v1'}
    },
    {
      title = 'Kopioi vector4',
			arrow = false,
			event = 'fivem-coords:GetLocationOfPositionAndCopyNotUseMenu',
			args = {type = 'v2'}
    },
    {
      title = 'Testi Menu',
			arrow = false,
			event = 'testimenu',
			args = {type = '5'}
    },
  },
})
lib.registerContext({
  id = 'other_valikko',
  title = '📉 | Others',
  menu = "command_menu_main",
  options = {
    {
      title = 'Kopioi {x=0,y=0,z=0}',
			arrow = false,
			event = 'fivem-coords:GetLocationOfPositionAndCopyNotUseMenu',
			args = {type = 'b1'}
    },
    {
      title = 'Kopio {x=0,y=0,z=0,h=0}',
			arrow = false,
			event = 'fivem-coords:GetLocationOfPositionAndCopyNotUseMenu',
			args = {type = 'b2'}
    },
    {
      title = 'Kopioi x=0,y=0,z=0',
			arrow = false,
			event = 'fivem-coords:GetLocationOfPositionAndCopyNotUseMenu',
			args = {type = 't1'}
    },
    {
      title = 'Kopioi x=0,y=0,z=0,h=0',
			arrow = false,
			event = 'fivem-coords:GetLocationOfPositionAndCopyNotUseMenu',
			args = {type = 't2'}
    },
    {
      title = 'Kopioi [x]=0,[y]=0,[z]=0',
			arrow = false,
			event = 'fivem-coords:GetLocationOfPositionAndCopyNotUseMenu',
			args = {type = 's1'}
    },
    {
      title = 'Kopioi [x]=0,[y]=0,[z]=0,[h]=0',
			arrow = false,
			event = 'fivem-coords:GetLocationOfPositionAndCopyNotUseMenu',
			args = {type = 's2'}
    },
    {
      title = 'Kopioi 0,0,0 (x,y,z)',
			arrow = false,
			event = 'fivem-coords:GetLocationOfPositionAndCopyNotUseMenu',
			args = {type = '1'}
    },
    {
      title = 'Kopioi 0,0,0,0 (x,y,z,h)',
			arrow = false,
			event = 'fivem-coords:GetLocationOfPositionAndCopyNotUseMenu',
			args = {type = '2'}
    },
    {
      title = 'Kopioi 0,0 (x,y)',
			arrow = false,
			event = 'fivem-coords:GetLocationOfPositionAndCopyNotUseMenu',
			args = {type = '3'}
    },
    {
      title = 'Kopioi 0 (h)',
			arrow = false,
			event = 'fivem-coords:GetLocationOfPositionAndCopyNotUseMenu',
			args = {type = '4'}
    },
    {
      title = 'Näytä Kordinaatit',
			arrow = false,
			event = 'fivem-coords:coords',
			args = {type = '5'}
    },
  },
})
