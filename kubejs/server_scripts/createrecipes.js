// Made by Misanthropy, Don't use it without permission.
// This script is for create recipes.

ServerEvents.recipes(event => {
	
event.recipes.createCrushing([
  '2x minecraft:cobblestone',
  'minecraft:redstone',
  Item.of('minecraft:redstone').withChance(0.5)
], 'minecraft:redstone_ore')

event.recipes.createCrushing([
  '2x create:iron_sheet',
  Item.of('minecraft:coal').withChance(0.5)
], 'minecraft:iron_ingot')

event.recipes.createCrushing([
  'immersiveengineering:plate_iron',
  Item.of('2x minecraft:iron_nugget').withChance(0.2)
], 'create:iron_sheet')

event.recipes.createCrushing([
  'enigmaticaddons:earth_heart_fragment',
  Item.of('enigmaticaddons:earth_heart_fragment').withChance(0.2)
], 'enigmaticdice:enigmatic_die')

event.recipes.createCrushing([
  '4x minecraft:paper',
  Item.of('brutality:paper_cut').withChance(0.01)
], '#minecraft:logs')

event.recipes.createMixing('armageddon_mod:shadowed_ingot', [
  'armageddon_mod:shadow_fragment',
  'armageddon_mod:shadow_fragment',
  'armageddon_mod:shadow_fragment',
  'armageddon_mod:shadow_fragment',
  'minecraft:netherite_ingot'
]).superheated()

event.recipes.createMixing('armageddon_mod:cocoon_of_blood', [
  'armageddon_mod:calamitous_core',
  'armageddon_mod:calamitous_core',
  'armageddon_mod:calamitous_core',
  'armageddon_mod:calamitous_core',
  'minecraft:egg',
  'minecraft:nether_wart_block'
]).heated()

event.recipes.createMixing('composite_material:obsidian_steel_ingot', [
  'minecraft:quartz',
  'minecraft:obsidian',
  'minecraft:obsidian',
  'minecraft:iron_ingot',
  'minecraft:iron_ingot'
]).heated()

event.recipes.createMixing('armageddon_mod:the_corrupted_tear', [
  'armageddon_mod:khyros_tear',
  'armageddon_mod:helionite_ingot',
  'armageddon_mod:zoranths_helmet_helmet',
  'mekanism:dirty_netherite_scrap',
  'mekanism:dirty_netherite_scrap',
  'mekanism:dirty_netherite_scrap'
]).superheated()

event.recipes.createCompacting('armageddon_mod:emerald_totem', [
  'minecraft:emerald',
  'minecraft:emerald',
  'minecraft:emerald',
  'minecraft:emerald',
  'armageddon_mod:gilded_plate'
])

event.recipes.createPressing('kubejs:dark_metal_sheet', [
  'born_in_chaos_v1:dark_metal_ingot'
])

event.recipes.createCompacting('armageddon_mod:titan_insigna', [
  'armageddon_mod:khyros_tear',
  'armageddon_mod:khyros_tear',
  'armageddon_mod:khyros_tear',
  'armageddon_mod:khyros_tear',
  'armageddon_mod:gilded_plate',
  'armageddon_mod:gilded_plate',
  'armageddon_mod:gilded_plate',
  'armageddon_mod:ancient_blueprint',
  'armageddon_mod:gilded_plate'
]).heated()

event.recipes.createCompacting('armageddon_mod:the_sun_emblem', [
  'armageddon_mod:titan_insigna',
  'armageddon_mod:bloody_ingot',
  'armageddon_mod:bloody_ingot',
  'armageddon_mod:hemalith_catalyst',
  'armageddon_mod:gilded_plate'
]).superheated()

event.recipes.createCompacting('born_in_chaos_v1:armor_plate_from_dark_metal', [
  'kubejs:dark_metal_sheet',
  'kubejs:dark_metal_sheet',
  'kubejs:dark_metal_sheet',
  'kubejs:dark_metal_sheet',
  'kubejs:dark_metal_sheet',
  'born_in_chaos_v1:monster_skin',
  'born_in_chaos_v1:monster_skin',
  'born_in_chaos_v1:monster_skin',
  'born_in_chaos_v1:monster_skin'
]).heated()

event.recipes.createMechanicalCrafting('celestisynth:keres', [
  'ABCD',
  'EFGH',
  'IJKL',
  'MNOP'
], {
  A: 'celestisynth:frostbound',
  B: 'celestisynth:rainfall_serenity',
  C: 'celestisynth:solaris',
  D: 'celestisynth:aquaflora',
  E: 'celestisynth:breezebreaker',
  F: 'celestisynth:crimson_piece',
  G: 'armageddon_mod:shadowed_ingot',
  H: 'goety_revelation:apocalyptium_ingot',
  I: 'celestisynth:poltergeist',
  J: 'terramity:chthonic_crystal_block',
  K: 'born_in_chaos_v1:lifestealer_bone',
  L: 'armageddon_mod:shadowed_ingot',
  M: 'celestisynth:crescentia',
  N: 'born_in_chaos_v1:lifestealer_bone',
  O: 'terramity:chthonic_crystal_block',
  P: 'celestisynth:crimson_piece',

})

event.recipes.createMixing('artifacts:eternal_steak', [
  'minecraft:beef',
  'minecraft:beef',
  'minecraft:beef',
  'minecraft:beef',
  'minecraft:beef',
  'minecraft:beef',
    'minecraft:beef',
  'minecraft:beef',
  'minecraft:beef',
  'minecraft:beef',
  'minecraft:beef',
  'minecraft:beef',
    'minecraft:beef',
  'minecraft:beef',
  'minecraft:beef',
  'minecraft:beef',
  'minecraft:beef',
  'minecraft:beef',
    'minecraft:beef',
  'minecraft:beef',
  'minecraft:beef',
  'minecraft:beef',
  'minecraft:beef',
  'minecraft:beef',
    'minecraft:beef',
  'minecraft:beef',
  'minecraft:beef',
  'minecraft:beef',
  'minecraft:beef',
  'minecraft:beef',
    'minecraft:beef',
  'minecraft:beef',
  'minecraft:beef',
  'minecraft:beef',
  'minecraft:beef',
  'minecraft:beef',
    'minecraft:beef',
  'minecraft:beef',
  'minecraft:beef',
  'minecraft:beef',
  'minecraft:beef',
  'minecraft:beef',
    'minecraft:beef',
  'minecraft:beef',
  'minecraft:beef',
  'minecraft:beef',
  'minecraft:beef',
  'minecraft:beef',
    'minecraft:beef',
  'minecraft:beef',
  'minecraft:beef',
  'minecraft:beef',
  'minecraft:beef',
  'minecraft:beef',
    'minecraft:beef',
  'minecraft:beef',
  'minecraft:beef',
  'minecraft:beef',
  'minecraft:beef',
  'minecraft:beef',
    'minecraft:beef',
  'minecraft:beef',
  'minecraft:beef',
  'minecraft:beef',
  'minecraft:beef',
  'minecraft:beef',
    'minecraft:beef',
  'minecraft:beef',
  'minecraft:beef',
  'minecraft:beef',
  'minecraft:beef',
  'minecraft:beef',
    'minecraft:beef',
  'minecraft:beef',
  'minecraft:beef',
  'minecraft:beef',
  'minecraft:beef',
  'minecraft:beef',
    'minecraft:beef',
  'minecraft:beef',
  'minecraft:beef',
  'minecraft:beef',
  'minecraft:beef',
  'minecraft:beef',
    'minecraft:beef',
  'minecraft:beef',
  'minecraft:beef',
  'minecraft:beef',
  'minecraft:beef',
  'minecraft:beef',
    'minecraft:beef',
  'minecraft:beef',
  'minecraft:beef',
  'minecraft:beef',
  'minecraft:beef',
  'minecraft:beef',
    'minecraft:beef',
  'minecraft:beef',
  'minecraft:beef',
  'minecraft:beef',
  'minecraft:beef',
  'minecraft:beef',
    'minecraft:beef',
  'minecraft:beef',
  'minecraft:beef',
  'minecraft:beef',
  'minecraft:beef',
  'minecraft:beef',
    'minecraft:beef',
  'minecraft:beef',
  'minecraft:beef',
  'minecraft:beef',
  'minecraft:beef',
  'minecraft:beef',
  'minecraft:beef',
  'minecraft:beef',
  'minecraft:beef',
  'minecraft:beef',
  'minecraft:beef',
  'minecraft:beef',
  'minecraft:beef',
  'minecraft:beef',
  'minecraft:beef',
  'minecraft:beef',
  'minecraft:beef',
  'minecraft:beef',
  'minecraft:beef',
  'minecraft:beef',
  'minecraft:beef',
  'minecraft:nether_star',
  'minecraft:nether_star',
  'minecraft:nether_star'
]).superheated()

event.recipes.createDeploying('forbidden_arcanus:soul ', 
  ['minecraft:soul_sand',
   'forbidden_arcanus:soul_extractor']),
event.recipes.createDeploying('create:large_cogwheel', 
  ['create:large_cogwheel', 
    '#minecraft:wooden_buttons'])

    event.recipes.createMechanicalCrafting('kubejs:fartinium_ingot', [
  'ABCD',
  'EFGH',
  'IJKL',
  'MNOP'
], {
  A: 'armageddon_mod:frog_leg',
  B: 'ancient_elements:smelly_repellent',
  C: 'ancient_elements:smelly_repellent',
  D: 'armageddon_mod:glowbug_lantern',
  E: 'ancient_elements:elementinium_ingot',
  F: 'experienceobelisk:experience_jelly',
  G: 'minecraft:slime_block',
  H: 'ancient_elements:elementinium_ingot',
  I: 'ancient_elements:elementinium_ingot',
  J: 'experienceobelisk:experience_jelly',
  K: 'minecraft:slime_block',
  L: 'ancient_elements:elementinium_ingot',
  M: 'armageddon_mod:arion_heart',
  N: 'ancient_elements:jungle_steel_ingot',
  O: 'ancient_elements:jungle_steel_ingot',
  P: 'armageddon_mod:poisonous_hand',

})

event.recipes.createMixing('create:creative_blaze_cake', [
  'create:blaze_cake',
  'create:blaze_cake',
  'create:blaze_cake',
  'create:blaze_cake',
  'create:blaze_cake',
  'create:blaze_cake',
  'create:blaze_cake',
  'create:blaze_cake',
  'create:blaze_cake',
  'create:blaze_cake',
  'create:blaze_cake',
  'create:blaze_cake',
  'create:blaze_cake',
  'create:blaze_cake',
  'create:blaze_cake',
  'create:blaze_cake',
  'create:blaze_cake',
  'create:blaze_cake',
  'create:blaze_cake',
  'create:blaze_cake',
  'create:blaze_cake',
  'create:blaze_cake',
  'create:blaze_cake',
  'create:blaze_cake',
  'create:blaze_cake',
  'create:blaze_cake',
  'create:blaze_cake',
  'create:blaze_cake',
  'create:blaze_cake',
  'create:blaze_cake',
  'create:blaze_cake',
  'create:blaze_cake',
  'create:blaze_cake',
  'create:blaze_cake',
  'create:blaze_cake',
  'create:blaze_cake',
  'create:blaze_cake',
  'create:blaze_cake',
  'create:blaze_cake',
  'create:blaze_cake',
  'create:blaze_cake',
  'create:blaze_cake',
  'create:blaze_cake',
  'create:blaze_cake',
  'create:blaze_cake',
  'create:blaze_cake',
  'create:blaze_cake',
  'create:blaze_cake',
  'create:blaze_cake',
  'create:blaze_cake',
  'create:blaze_cake',
  'create:blaze_cake',
  'create:blaze_cake',
  'create:blaze_cake',
  'create:blaze_cake',
  'create:blaze_cake',
  'create:blaze_cake',
  'create:blaze_cake',
  'create:blaze_cake',
  'create:blaze_cake',
  'kubejs:linggangoonium_ingot'
]).superheated()

event.recipes.createMechanicalCrafting('create:creative_motor', [
  'ABCD',
  'EFGH',
  'IJKL',
  'MNOP'
], {
  A: 'create_new_age:advanced_motor_extension',
  B: 'create_new_age:reinforced_motor',
  C: 'create_new_age:advanced_motor_extension',
  D: 'create_new_age:reinforced_motor',
  E: 'create_new_age:advanced_motor_extension',
  F: 'create_new_age:reinforced_motor',
  G: 'create_new_age:advanced_motor_extension',
  H: 'create_new_age:reinforced_motor',
  I: 'create_new_age:advanced_motor_extension',
  J: 'create_new_age:reinforced_motor',
  K: 'create_new_age:advanced_motor_extension',
  L: 'create_new_age:reinforced_motor',
  M: 'create_new_age:advanced_motor_extension',
  N: 'create_new_age:reinforced_motor',
  O: 'create_new_age:advanced_motor_extension',
  P: 'kubejs:linggangoonium_ingot',

})

event.recipes.createMechanicalCrafting('create:handheld_worldshaper', [
  'ABCD',
  'EFGH',
  'IJKL',
  'MNOP'
], {
  A: 'orbital_railgun:orbital_railgun',
  B: 'orbital_railgun:orbital_railgun',
  C: 'orbital_railgun:orbital_railgun',
  D: 'orbital_railgun:orbital_railgun',
  E: 'terramity:stairway_to_heaven',
  F: 'terramity:stairway_to_heaven',
  G: 'terramity:stairway_to_heaven',
  H: 'terramity:stairway_to_heaven',
  I: 'terramity:anti_material_rifle',
  J: 'terramity:anti_material_rifle',
  K: 'terramity:anti_material_rifle',
  L: 'terramity:anti_material_rifle',
  M: 'terramity:olympus',
  N: 'terramity:olympus',
  O: 'terramity:olympus',
  P: 'kubejs:linggangoonium_ingot',

})

   })