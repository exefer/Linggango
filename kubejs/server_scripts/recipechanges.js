// Made by Misanthropy, Don't use it without permission.
// This script is about general recipe changes in the game.

ServerEvents.recipes(event => {
    event.shaped(Item.of("enigmaticlegacy:enigmatic_item",1),
    ["ABC",
    "DEF",
    "GHI"],
    {A:"terramity:hellspec_alloy_block",
    B:"terramity:hellspec_alloy_block",
    C:"terramity:hellspec_alloy_block",
    D:"goety_revelation:apocalyptium_ingot",
    E:"enigmaticlegacy:the_cube",
    F:"goety_revelation:apocalyptium_ingot",
    G:"terramity:hellspec_alloy_block",
    H:"goety_revelation:revelation",
    I:"terramity:hellspec_alloy_block"}
    );

    event.shapeless(
 Item.of('minecraft:copper_block', 1),
 ['minecraft:air',])

 event.shapeless(
 Item.of('minecraft:copper_block', 1),
 ['minecraft:air',])



    event.shaped(Item.of("species:kinetic_core",1),
    ["ABC",
    "DEF",
    "GHI"],
    {A:"alexscaves:scarlet_neodymium_ingot",
    B:"alexscaves:metal_swarf",
    C:"alexscaves:scarlet_neodymium_ingot",
    D:"alexscaves:metal_swarf",
    E:"alexscaves:metal_swarf",
    F:"alexscaves:metal_swarf",
    G:"alexscaves:scarlet_neodymium_ingot",
    H:"alexscaves:metal_swarf",
    I:"alexscaves:scarlet_neodymium_ingot"}
    );

    event.shaped(Item.of("irons_spellbooks:common_ink",1),
    ["   ",
    "DEF",
    "   "],
    {   D:"minecraft:glass",
    E:"minecraft:ink_sac",
    F:"minecraft:feather",
    });

    event.shaped(Item.of("irons_spellbooks:uncommon_ink",1),
    ["   ",
    "D  ",
    "GH "],
    {   D:"minecraft:red_dye",
    G:"irons_spellbooks:common_ink",
    H:"minecraft:feather",
    });

    event.shaped(Item.of("irons_spellbooks:rare_ink",1),
    ["   ",
    "   ",
    "GH "],
    {      G:"irons_spellbooks:uncommon_ink",
    H:"minecraft:glow_ink_sac",
    });

    event.shaped(Item.of("irons_spellbooks:epic_ink",1),
    ["   ",
    "D  ",
    "GH "],
    {   D:"irons_spellbooks:rare_ink",
    G:"irons_spellbooks:rare_ink",
    H:"irons_spellbooks:rare_ink",
    });

    event.shaped(Item.of("irons_spellbooks:legendary_ink",1),
    ["AB ",
    "DEF",
    "GHI"],
    {A:"minecraft:glow_ink_sac",
    B:"minecraft:ink_sac",
    D:"irons_spellbooks:epic_ink",
    E:"minecraft:glow_ink_sac",
    F:"minecraft:ink_sac",
    G:"irons_spellbooks:epic_ink",
    H:"irons_spellbooks:epic_ink",
    I:"minecraft:glow_ink_sac"}
    );

    event.shaped(Item.of("irons_spellbooks:arcane_essence",1),
    ["   ",
    "   ",
    "GH "],
    {      G:"minecraft:lapis_lazuli",
    H:"minecraft:amethyst_shard",
    });

    event.shaped(Item.of("irons_spellbooks:cinder_essence",1),
    ["   ",
    "DEF",
    "GHI"],
    {   D:"minecraft:blaze_powder",
    E:"minecraft:flint_and_steel",
    F:"minecraft:blaze_powder",
    G:"minecraft:fire_charge",
    H:"irons_spellbooks:arcane_essence",
    I:"minecraft:fire_charge"}
    );

    event.shaped(Item.of("irons_spellbooks:rotten_spell_book",1),
    [" B ",
    "DEF",
    "GHI"],
    { B:"minecraft:zombie_head",
    D:"minecraft:bone",
    E:"minecraft:leather",
    F:"minecraft:bone_meal",
    G:"minecraft:rotten_flesh",
    H:"irons_spellbooks:copper_spell_book",
    I:"minecraft:rotten_flesh"}
    );

    event.shaped(Item.of("irons_spellbooks:necronomicon_spell_book",1),
    ["ABC",
    "DEF",
    "GHI"],
    {A:"bloodmagic:weakbloodshard",
    B:"bloodmagic:weakbloodshard",
    C:"bloodmagic:weakbloodshard",
    D:"caverns_and_chasms:living_flesh",
    E:"caverns_and_chasms:living_flesh",
    F:"caverns_and_chasms:living_flesh",
    G:"companions:crystallized_blood",
    H:"irons_spellbooks:copper_spell_book",
    I:"companions:crystallized_blood"}
    );

    event.shaped(Item.of("irons_spellbooks:villager_spell_book",1),
    ["ABC",
    "DEF",
    "GHI"],
    {A:"minecraft:emerald",
    B:"minecraft:emerald",
    C:"minecraft:emerald",
    D:"minecraft:emerald",
    E:"minecraft:totem_of_undying",
    F:"minecraft:emerald",
    G:"minecraft:quartz",
    H:"irons_spellbooks:copper_spell_book",
    I:"minecraft:quartz"}
    );

    event.shaped(Item.of("irons_spellbooks:blaze_spell_book",1),
    ["ABC",
    "DEF",
    "GHI"],
    {A:"minecraft:blaze_powder",
    B:"irons_spellbooks:cinder_essence",
    C:"minecraft:blaze_powder",
    D:"irons_spellbooks:cinder_essence",
    E:"irons_spellbooks:diamond_spell_book",
    F:"irons_spellbooks:cinder_essence",
    G:"minecraft:blaze_powder",
    H:"irons_spellbooks:cinder_essence",
    I:"minecraft:blaze_powder"}
    );

    event.shaped(Item.of("irons_spellbooks:ruined_book",1),
    ["ABC",
    "DEF",
    "GHI"],
    {A:"composite_material:warden_hand",
    B:"composite_material:warden_hand",
    C:"composite_material:warden_hand",
    D:"deeperdarker:warden_carapace",
    E:"terramity:warden_soul",
    F:"deeperdarker:warden_carapace",
    G:"deeperdarker:warden_carapace",
    H:"irons_spellbooks:iron_spell_book",
    I:"deeperdarker:warden_carapace"}
    );

    event.shaped(Item.of("minecraft:totem_of_undying",1),
    ["ABC",
    "DEF",
    "GHI"],
    {A:"quark:soul_bead",
    B:"quark:soul_bead",
    C:"quark:soul_bead",
    D:"quark:soul_bead",
    E:"quark:soul_bead",
    F:"quark:soul_bead",
    G:"quark:soul_bead",
    H:"quark:soul_bead",
    I:"quark:soul_bead"}
    );

    event.shaped(Item.of("minecraft:totem_of_undying",1),
    ["   ",
    "   ",
    "GHI"],
    {      G:"terramity:warden_soul",
    H:"terramity:warden_soul",
    I:"terramity:warden_soul"}
    );

    event.shaped(Item.of("minecraft:totem_of_undying",1),
    ["   ",
    " E ",
    "   "],
    {    E:"terramity:spiteful_soul",
    });

    event.shaped(Item.of("composite_material:etherite_boots",1),
    ["   ",
    "DEF",
    "GHI"],
    {   D:"composite_material:perkin",
    E:"composite_material:echoium_boots",
    F:"composite_material:perkin",
    G:"terramity:reverium",
    H:"composite_material:etherite_block",
    I:"terramity:reverium"}
    );

    event.shaped(Item.of("composite_material:etherite_leggings",1),
    ["ABC",
    "DEF",
    "G I"],
    {A:"terramity:reverium",
    B:"composite_material:etherite_block",
    C:"terramity:reverium",
    D:"terramity:reverium",
    E:"composite_material:echoium_leggings",
    F:"terramity:reverium",
    G:"composite_material:perkin",
    I:"composite_material:perkin"}
    );

    event.shaped(Item.of("composite_material:etherite_chestplate",1),
    ["ABC",
    "DEF",
    "GHI"],
    {A:"terramity:reverium",
    B:"composite_material:echoium_chestplate",
    C:"terramity:reverium",
    D:"composite_material:perkin",
    E:"composite_material:etherite_block",
    F:"composite_material:perkin",
    G:"terramity:reverium",
    H:"composite_material:perkin",
    I:"terramity:reverium"}
    );

    event.shaped(Item.of("composite_material:etherite_helmet",1),
    [" B ",
    "DEF",
    "GHI"],
    { B:"composite_material:etherite_block",
    D:"terramity:reverium",
    E:"composite_material:perkin",
    F:"terramity:reverium",
    G:"terramity:reverium",
    H:"composite_material:echoium_helmet",
    I:"terramity:reverium"}
    );

 event.shaped(Item.of('ancient_elements:stop_watch', 1),
 [
' B ',
' EF',
'   '
 ],
 {
 
B:'minecraft:gold_nugget',
 
 
E:'minecraft:clock',
F:'minecraft:chain',}
    );

    event.shaped(Item.of("composite_material:echoium_boots",1),
    ["ABC",
    "DEF",
    "GHI"],
    {A:"legendary_monsters:corrupted_soul",
    B:"composite_material:echoium_block",
    C:"legendary_monsters:corrupted_soul",
    D:"composite_material:echoium_ingot",
    E:"deeperdarker:warden_boots",
    F:"composite_material:echoium_ingot",
    G:"minecraft:reinforced_deepslate",
    H:"composite_material:allay_steel_boots",
    I:"minecraft:reinforced_deepslate"}
    );

    event.shaped(Item.of("composite_material:echoium_leggings",1),
    ["ABC",
    "DEF",
    "GHI"],
    {A:"legendary_monsters:corrupted_soul",
    B:"composite_material:echoium_block",
    C:"legendary_monsters:corrupted_soul",
    D:"minecraft:reinforced_deepslate",
    E:"deeperdarker:warden_leggings",
    F:"minecraft:reinforced_deepslate",
    G:"composite_material:echoium_ingot",
    H:"composite_material:allay_steel_leggings",
    I:"composite_material:echoium_ingot"}
    );

    event.shaped(Item.of("composite_material:echoium_chestplate",1),
    ["ABC",
    "DEF",
    "GHI"],
    {A:"composite_material:echoium_ingot",
    B:"legendary_monsters:corrupted_soul",
    C:"composite_material:echoium_ingot",
    D:"composite_material:echoium_block",
    E:"deeperdarker:warden_chestplate",
    F:"composite_material:echoium_block",
    G:"minecraft:reinforced_deepslate",
    H:"composite_material:allay_steel_chestplate",
    I:"minecraft:reinforced_deepslate"}
    );

    event.shaped(Item.of("composite_material:echoium_helmet",1),
    ["ABC",
    "DEF",
    "GHI"],
    {A:"minecraft:reinforced_deepslate",
    B:"composite_material:echoium_block",
    C:"minecraft:reinforced_deepslate",
    D:"legendary_monsters:corrupted_soul",
    E:"deeperdarker:warden_helmet",
    F:"legendary_monsters:corrupted_soul",
    G:"composite_material:echoium_ingot",
    H:"composite_material:allay_steel_helmet",
    I:"composite_material:echoium_ingot"}
    );

    event.shaped(Item.of("composite_material:allay_steel_boots",1),
    ["A C",
    "DEF",
    "G I"],
    {A:"ae2:quartz_block",
    C:"ae2:quartz_block",
    D:"undergarden:froststeel_ingot",
    E:"composite_material:obsidian_boots",
    F:"undergarden:froststeel_ingot",
    G:"composite_material:allay_steel_ingot",
    I:"composite_material:allay_steel_ingot"}
    );

    event.shaped(Item.of("composite_material:allay_steel_leggings",1),
    ["ABC",
    "DEF",
    "G I"],
    {A:"ae2:quartz_block",
    B:"composite_material:allay_steel_ingot",
    C:"ae2:quartz_block",
    D:"composite_material:allay_steel_ingot",
    E:"composite_material:obsidian_leggings",
    F:"composite_material:allay_steel_ingot",
    G:"undergarden:froststeel_ingot",
    I:"undergarden:froststeel_ingot"}
    );

    event.shaped(Item.of("composite_material:allay_steel_chestplate",1),
    ["A C",
    "DEF",
    "GHI"],
    {A:"undergarden:froststeel_ingot",
    C:"undergarden:froststeel_ingot",
    D:"ae2:quartz_block",
    E:"composite_material:obsidian_chestplate",
    F:"ae2:quartz_block",
    G:"composite_material:allay_steel_ingot",
    H:"composite_material:allay_steel_ingot",
    I:"composite_material:allay_steel_ingot"}
    );

    event.shaped(Item.of("composite_material:allay_steel_helmet",1),
    ["A C",
    "DEF",
    " H "],
    {A:"undergarden:froststeel_ingot",
    C:"undergarden:froststeel_ingot",
    D:"ae2:quartz_block",
    E:"composite_material:obsidian_helmet",
    F:"ae2:quartz_block",
    H:"composite_material:allay_steel_ingot"}
    );

    event.shaped(Item.of("composite_material:obsidian_boots",1),
    ["ABC",
    "DEF",
    "G I"],
    {A:"composite_material:obsidian_steel_block",
    B:"composite_material:obsidian_steel_block",
    C:"composite_material:obsidian_steel_block",
    D:"mekanism:ingot_refined_obsidian",
    E:"composite_material:amethyst_boots",
    F:"mekanism:ingot_refined_obsidian",
    G:"quark:blaze_lantern",
    I:"quark:blaze_lantern"}
    );

    event.shaped(Item.of("composite_material:obsidian_leggings",1),
    ["ABC",
    "DEF",
    "G I"],
    {A:"composite_material:obsidian_steel_block",
    B:"composite_material:obsidian_steel_block",
    C:"composite_material:obsidian_steel_block",
    D:"mekanism:ingot_refined_obsidian",
    E:"composite_material:amethyst_leggings",
    F:"mekanism:ingot_refined_obsidian",
    G:"quark:blaze_lantern",
    I:"quark:blaze_lantern"}
    );

    event.shaped(Item.of("composite_material:obsidian_chestplate",1),
    ["A C",
    "DEF",
    "GHI"],
    {A:"mekanism:ingot_refined_obsidian",
    C:"mekanism:ingot_refined_obsidian",
    D:"quark:blaze_lantern",
    E:"composite_material:amethyst_chestplate",
    F:"quark:blaze_lantern",
    G:"composite_material:obsidian_steel_block",
    H:"mekanism:block_refined_obsidian",
    I:"composite_material:obsidian_steel_block"}
    );

    event.shaped(Item.of("composite_material:obsidian_helmet",1),
    ["ABC",
    "DEF",
    "   "],
    {A:"composite_material:obsidian_steel_block",
    B:"quark:blaze_lantern",
    C:"composite_material:obsidian_steel_block",
    D:"mekanism:ingot_refined_obsidian",
    E:"composite_material:amethyst_helmet",
    F:"mekanism:ingot_refined_obsidian",
    });

    event.shaped(Item.of("composite_material:amethyst_boots",1),
    ["   ",
    "DEF",
    "G I"],
    {   D:"minecraft:amethyst_shard",
    E:"composite_material:copper_boots",
    F:"minecraft:amethyst_shard",
    G:"minecraft:amethyst_shard",
    I:"minecraft:amethyst_shard"}
    );

    event.shaped(Item.of("composite_material:amethyst_leggings",1),
    ["ABC",
    "DEF",
    "G I"],
    {A:"minecraft:amethyst_shard",
    B:"minecraft:amethyst_shard",
    C:"minecraft:amethyst_shard",
    D:"minecraft:amethyst_shard",
    E:"composite_material:copper_leggings",
    F:"minecraft:amethyst_shard",
    G:"minecraft:amethyst_shard",
    I:"minecraft:amethyst_shard"}
    );

    event.shaped(Item.of("composite_material:amethyst_chestplate",1),
    ["   ",
    "DEF",
    "GHI"],
    {   D:"minecraft:amethyst_shard",
    E:"composite_material:copper_chestplate",
    F:"minecraft:amethyst_shard",
    G:"minecraft:amethyst_shard",
    H:"caverns_and_chasms:amethyst_block",
    I:"minecraft:amethyst_shard"}
    );

    event.shaped(Item.of("composite_material:amethyst_helmet",1),
    ["ABC",
    "DEF",
    "   "],
    {A:"minecraft:amethyst_shard",
    B:"minecraft:amethyst_shard",
    C:"minecraft:amethyst_shard",
    D:"minecraft:amethyst_shard",
    E:"composite_material:copper_helmet",
    F:"minecraft:amethyst_shard"
    }
    );

    event.shaped(Item.of("composite_material:etherite_leggings",1),
    ["   ",
    "   ",
    " H "],
    {      H:"composite_material:etherite_chestplate",
    }
    );

    event.shaped(Item.of("brutality:royal_guardian_sword",1),
    ["ABC",
    "DEF",
    "GHI"],
    {A:"minecraft:gold_block",
    B:"terramity:nyxium_block",
    C:"enigmaticaddons:disaster_sword",
    D:"minecraft:bedrock",
    E:"lethality:gamblers_blade",
    F:"terramity:nyxium_block",
    G:"weapon:greatsword",
    H:"minecraft:bedrock",
    I:"minecraft:gold_block"}
    );

    event.shaped(Item.of("orbital_railgun:orbital_railgun",1),
    ["ABC",
    "DEF",
    "GH "],
    {A:"forbidden_arcanus:quantum_catcher",
    B:"cataclysm:witherite_ingot",
    C:"terramity:neutron_star",
    D:"terramity:antimatter_bomb",
    E:"cataclysm:witherite_block",
    F:"cataclysm:witherite_ingot",
    G:"brutality:portable_quantum_thingamabob",
    H:"brutality:divine_immolation",
    }
    );

    event.shaped(Item.of("composite_material:perkin",1),
    ["ABC",
    "DEF",
    "GHI"],
    {A:"minecraft:honey_bottle",
    B:"minecraft:experience_bottle",
    C:"minecraft:dragon_breath",
    D:"farmersdelight:milk_bottle",
    E:"terramity:chthonic_nectar",
    F:"irons_spellbooks:lightning_bottle",
    G:"composite_material:strong_will",
    H:"minecraft:experience_bottle",
    I:"minecraft:blaze_powder"}
    );

    event.shaped(Item.of("minecraft:netherite_upgrade_smithing_template",2),
    ["ABC",
    "DEF",
    "GHI"],
    {A:"minecraft:nether_bricks",
    B:"ancient_elements:nether_steel_ingot",
    C:"minecraft:nether_bricks",
D:"minecraft:nether_bricks",
    E:"minecraft:netherite_upgrade_smithing_template",
    F:"minecraft:nether_bricks",
    G:"minecraft:nether_bricks",
    H:"minecraft:nether_bricks",
    I:"minecraft:nether_bricks"}
    );

    event.shaped(Item.of("enigmaticlegacy:cursed_ring",1),
    [" B ",
    "DEF",
    " H "],
    { B:"born_in_chaos_v1:dark_metal_ingot",
    D:"born_in_chaos_v1:dark_metal_ingot",
    E:"forbidden_arcanus:maledictus_pact",
    F:"born_in_chaos_v1:dark_metal_ingot",
    H:"born_in_chaos_v1:orbofthe_summoner",
    }
    );

    event.shaped(Item.of("infernaddon:ring_of_infernum",1),
    ["ABC",
    "DEF",
    "GHI"],
    {A:"terramity:spiteful_soul",
    B:"armageddon_mod:helionite_ingot",
    C:"terramity:spiteful_soul",
    D:"armageddon_mod:helionite_ingot",
    E:"armageddon_mod:obsidian_skull",
    F:"armageddon_mod:helionite_ingot",
    G:"terramity:spiteful_soul",
    H:"armageddon_mod:helionite_ingot",
    I:"terramity:spiteful_soul"}
    );

    event.shaped(Item.of('composite_material:etherite_sword_reinforced', 1),
 [
'ABC',
'DEF',
'GHI'
 ],
 {
A:'composite_material:etherite_block',
B:'composite_material:evolutium',
C:'composite_material:evolutium',
D:'minecraft:beacon',
E:'composite_material:etherite_block',
F:'composite_material:evolutium',
G:'composite_material:etherite_sword',
H:'minecraft:beacon',
I:'composite_material:etherite_block',}
);

event.shaped(Item.of('enigmaticlegacy:the_cube', 1),
 [
'ABC',
'DEF',
'GHI'
 ],
 {
A:'cataclysm:witherite_block',
B:'enigmaticaddons:revival_leaf',
C:'enigmaticlegacy:evil_ingot',
D:'kubejs:broken_cube_piece_1',
E:'enigmaticaddons:lost_engine',
F:'kubejs:broken_cube_piece_2',
G:'enigmaticlegacy:evil_ingot',
H:'enigmaticaddons:forgotten_ice',
I:'cataclysm:witherite_block',}
);

event.shaped(Item.of('composite_material:echoium_sword_reinforced', 1),
 [
'ABC',
'DEF',
'GHI'
 ],
 {
A:'composite_material:evolutium',
B:'composite_material:evolutium',
C:'minecraft:sculk_shrieker',
D:'caverns_and_chasms:echo_block',
E:'minecraft:sculk_shrieker',
F:'composite_material:evolutium',
G:'composite_material:echoium_sword',
H:'caverns_and_chasms:echo_block',
I:'composite_material:evolutium',}
);

event.shaped(Item.of('kubejs:broken_cube_piece_2', 1),
 [
'ABC',
'DEF',
'GHI'
 ],
 {
A:'cataclysm:witherite_block',
B:'enigmaticlegacy:evil_ingot',
C:'enigmaticlegacy:blazing_core',
D:'enigmaticlegacy:abyssal_heart',
E:'enigmaticaddons:etherium_core',
F:'enigmaticlegacy:eye_of_nebula',
G:'cataclysm:witherite_block',
H:'enigmaticlegacy:evil_ingot',
I:'enigmaticlegacy:void_pearl',}
);

event.shaped(Item.of('composite_material:dungeon_sword_reinforced', 1),
 [
'ABC',
'DEF',
'GHI'
 ],
 {
A:'composite_material:dungeon_steel_block',
B:'minecraft:spawner',
C:'composite_material:evolutium',
D:'composite_material:dungeon_steel_block',
E:'composite_material:evolutium',
F:'minecraft:spawner',
G:'composite_material:dungeon_sword',
H:'composite_material:dungeon_steel_block',
I:'composite_material:dungeon_steel_block',}
);


    event.shaped(Item.of("simplyswords:runic_tablet",1),
    ["ABC",
    "DEF",
    "GHI"],
    {A:"#forge:stone",
    B:"#forge:stone",
    C:"#forge:stone",
    D:"#forge:stone",
    E:"embers:eldritch_insignia",
    F:"#forge:stone",
    G:"#forge:stone",
    H:"#forge:stone",
    I:"#forge:stone"}
    );

    event.shaped(Item.of("terramity:black_matter",8),
    ["ABC",
    "DEF",
    "GHI"],
    {A:"terramity:chthonic_crystal",
    B:"terramity:decayed_bedrock_dust",
    C:"terramity:chthonic_crystal",
    D:"terramity:decayed_bedrock_dust",
    E:"terramity:warden_soul",
    F:"terramity:decayed_bedrock_dust",
    G:"terramity:chthonic_crystal",
    H:"terramity:decayed_bedrock_dust",
    I:"terramity:chthonic_crystal"}
    );
    
    event.remove({ id: 'composite_material:etherite_helmet' })
    event.remove({ id: 'composite_material:etherite_chestplate' })
    event.remove({ id: 'composite_material:etherite_leggings' })
    event.remove({ id: 'composite_material:etherite_boots' })
    event.remove({ id: 'enigmaticlegacy:cursed_ring' })
    event.remove({ id: 'composite_material:amethyst_boots' })
    event.remove({ id: 'composite_material:amethyst_leggings' })
    event.remove({ id: 'composite_material:amethyst_helmet' })
    event.remove({ id: 'composite_material:amethyst_chestplate' })
    event.remove({ id: 'composite_material:allay_steel_boots' })
    event.remove({ id: 'composite_material:allay_steel_chestplate' })
    event.remove({ id: 'composite_material:allay_steel_helmet' })
    event.remove({ id: 'composite_material:allay_steel_leggings' })
    event.remove({ id: 'composite_material:echoium_boots' })
    event.remove({ id: 'composite_material:echoium_chestplate' })
    event.remove({ id:'composite_material:echoium_leggings' })
    event.remove({ id: 'composite_material:echoium_helmet' })
    event.remove({ id: 'lethality:nightmare_sword' })
    event.remove({ id: 'orbital_railgun:orbital_railgun' })
    event.remove({ id: 'brutality:royal_guardian_sword' })
    event.remove({ id: 'composite_material:obsidian_boots' });
    event.remove({ id: 'composite_material:obsidian_chestplate' });
    event.remove({ id: 'composite_material:obsidian_leggings' });
    event.remove({ id: 'composite_material:obsidian_helmet' });
	event.remove({ id: 'armageddon_mod:shadowed_ingot_recipe' });
	event.remove({ id: 'ancient_elements:trident' });
	event.remove({ id: 'celestisynth:keres' });
	event.remove({ id: 'minionsremastered:masters_staff' });
	event.remove({ id: 'explorerscompass:explorers_compass' });
	event.remove({ id: 'armageddon_mod:emeraldtotemrecipe' });
	event.remove({ id: 'companions:shade_sword_altar' });
	event.remove({ id: 'companions:shadow_bell' });
	event.remove({ id: 'enigmaticlegacy:eldritch_pan' });
	event.remove({ id: 'armageddon_mod:fierywitherskullrecipe' });
	event.remove({ id: 'composite_material:perkin' });
	event.remove({ id: 'brutality:nanomachines' });
	event.remove({ id: 'companions:frog_bonanza' });
	event.remove({ id: 'lethality:gamblers_blade' });
	event.remove({ id: 'lethality:midas_touch' });
	event.remove({ id: 'brutality:unbridled_rage' });
	event.remove({ id: 'brutality:target_cube' });
	event.remove({ id: 'brutality:double_down' });
    event.remove({ id: 'composite_material:obsidian_steel_ingot' });
    event.remove({ id: 'armageddon_mod:cocoonof_blood_recipe' });
    event.remove({ id: 'armageddon_mod:sun_emblem_recipe_2' });
    event.remove({ id: 'armageddon_mod:corrupted_tear_recipe' });
    event.remove({ id: 'armageddon_mod:titansinsignacraftingrecipe' });
    event.remove({ id: 'composite_material:etherite_sword_reinforced' });
    event.remove({ id: 'composite_material:echoium_sword_reinforced' });
    event.remove({ id: 'composite_material:dungeon_sword_reinforced' });
    event.remove({ id: 'enigmaticlegacy:the_cube' });
    event.remove({ id: 'enigmaticlegacy:crafting/the_cube' });
    event.remove({ id: 'ancient_elements:gold_drill' });
    event.remove({ id: 'ancient_elements:iron_drill' });
    event.remove({ id: 'ancient_elements:diamond_drill' });
    event.remove({ id: 'ancient_elements:netherite_drill' });
    event.remove({ id: 'ancient_elements:galactrium_drill' });
    event.remove({ id: 'ancient_elements:elementinium_drill' });
    event.remove({ id: 'ancient_elements:celestium_drill' });
    event.remove({ id: 'ancient_elements:endrium_drill' });
    event.remove({ id: 'ancient_elements:spectrillium_drill' });
    event.remove({ id: 'ancient_elements:hellstone_drill' });
    event.remove({ id: 'ancient_elements:infernal_drill' });
    event.remove({ id: 'ancient_elements:aetherium_drill' });
    event.remove({ id: 'ancient_elements:frozen_drill' });
    event.remove({ id: 'ancient_elements:abyssal_drill' });
    event.remove({ id: 'ancient_elements:meteorite_drill' });
    event.remove({ id: 'ancient_elements:void_steel_drill' });
    event.remove({ id: 'ancient_elements:ancient_metal_drill' });
    event.remove({ id: 'ancient_elements:ender_steel_drill' });
    event.remove({ id: 'ancient_elements:nether_steel_drill' });
    event.remove({ id: 'ancient_elements:titanium_drill' });
    event.remove({ id: 'ancient_elements:jungle_steel_drill' });
    event.remove({ id: 'ancient_elements:palladium_drill' });
    event.remove({ id: 'ancient_elements:steel_drill' });
    event.remove({ id: 'ancient_elements:lead_drill' });
    event.remove({ id: 'ancient_elements:tin_drill' });
    event.remove({ id: 'brutality:pain_catalyst' });
    event.remove({ id: 'brutality:rampage_clock' });
    event.remove({ id: 'brutality:blood_howl_pendant' });
    event.remove({ id: 'brutality:spite_shard' });
    event.remove({ id: 'brutality:hate_sigil' });
    event.remove({ id: 'brutality:heart_of_wrath' });
    event.remove({ id: 'brutality:eye_for_violence' });
    event.remove({ id: 'brutality:battle_scars' });
    event.remove({ id: 'brutality:mechanical_aorta' });
    event.remove({ id: 'brutality:blood_pulse_gauntlets' });
    event.remove({ id: 'brutality:fury_band' });
    event.remove({ id: 'brutality:grudge_totem' });
    event.remove({ id: 'brutality:blood_stone' });
    event.remove({ id: 'brutality:wrath' });
    event.remove({ id: 'brutality:anger_management' });
    event.remove({ id: 'brutality:crown_of_tyranny' });
    event.remove({ id: 'terramity:die_of_revival_recipe' });
    event.remove({ id: 'create:crafting/recipes/cogwheel' });
    event.remove({ id: 'enchantinginfuser:enchanting_infuser' });
    event.remove({ id: 'enchantinginfuser:advanced_enchanting_infuser' });
    event.remove({ id: 'forbidden_arcanus:quantum_catcher' });
    event.remove({ id: 'born_in_chaos_v1:great_dark_crusher_k' });
    event.remove({ id: 'born_in_chaos_v1:great_reaper_ax_k' });
    event.remove({ id: 'born_in_chaos_v1:armor_plate_from_dark_metal_k' });
    event.remove({ id: 'waystones:warp_dust' });
    event.remove({ id: 'knightlib:empty_grail' });
    event.remove({ id: 'knightlib:soul_furnace' });
    event.remove({ id: 'waystones:warp_stone' });
    event.remove({ id: 'bloodmagic:blood_altar' });
    event.remove({ id: 'bloodmagic:sacrificial_dagger' });
    event.remove({ id: 'terramity:forbidden_chalice_recipe' });
    event.remove({ id: 'terramity:divergency_gauntlet_recipe' });
    event.remove({ id: 'terramity:cthonic_curse_bracelets_recipe' });
    event.remove({ id: 'terramity:focus_scarf_recipe' });
    event.remove({ id: 'armageddon_mod:echoingscraprecipe' });
    event.remove({ id: 'brutality:blade_of_the_ruined_king' });
    event.remove({ id: 'knightsnmages:elite_mage_helmet' });
    event.remove({ id: 'knightsnmages:elite_mage_chestplate' });
    event.remove({ id: 'knightsnmages:elite_mage_leggings' });
    event.remove({ id: 'knightsnmages:elite_mage_boots' });
    event.remove({ id: 'knightsnmages:dark_knight_helmet' });
    event.remove({ id: 'knightsnmages:dark_knight_chestplate' });
    event.remove({ id: 'knightsnmages:dark_knight_boots' });
    event.remove({ id: 'knightsnmages:dark_knight_leggings' });
    
    event.shaped(Item.of("ancient_elements:boulder_rod",1),
    [" B ",
    "DEF",
    " H "],
    { B:"minecraft:stone",
    D:"minecraft:stone",
    E:"minecraft:blaze_rod",
    F:"minecraft:stone",
    H:"minecraft:stone"}
    );

    event.shaped(
 Item.of('knightsnmages:blue_knight_helmet', 1),
 [
'ABC',
'DEF',
'GHI'
 ],
 {
A:'irons_spellbooks:holy_upgrade_orb',
B:'ancient_elements:spectrillium_ingot',
C:'irons_spellbooks:holy_upgrade_orb',
D:'ancient_elements:spectrillium_ingot',
E:'hazennstuff:seraph_helmet',
F:'ancient_elements:spectrillium_ingot',
G:'irons_spellbooks:holy_upgrade_orb',
H:'enigmaticaddons:bless_stone',
I:'irons_spellbooks:holy_upgrade_orb',
})

event.shaped(
 Item.of('knightsnmages:blue_knight_chestplate', 1),
 [
'A C',
'DEF',
'GHI'
 ],
 {
A:'irons_spellbooks:holy_upgrade_orb',
 
C:'irons_spellbooks:holy_upgrade_orb',
D:'ancient_elements:spectrillium_ingot',
E:'ancient_elements:spectrillium_ingot',
F:'ancient_elements:spectrillium_ingot',
G:'ancient_elements:spectrillium_ingot',
H:'hazennstuff:seraph_chestplate',
I:'ancient_elements:spectrillium_ingot',
})

event.shaped(
 Item.of('knightsnmages:blue_knight_leggings', 1),
 [
'ABC',
'DEF',
'GHI'
 ],
 {
A:'ancient_elements:spectrillium_ingot',
B:'ancient_elements:spectrillium_ingot',
C:'ancient_elements:spectrillium_ingot',
D:'ancient_elements:spectrillium_ingot',
E:'enigmaticaddons:bless_stone',
F:'ancient_elements:spectrillium_ingot',
G:'ancient_elements:spectrillium_ingot',
H:'hazennstuff:seraph_leggings',
I:'ancient_elements:spectrillium_ingot',
})

event.shaped(
 Item.of('knightsnmages:blue_knight_boots', 1),
 [
' B ',
'DEF',
'GHI'
 ],
 {
 
B:'enigmaticaddons:bless_stone',
 
D:'ancient_elements:spectrillium_ingot',
E:'irons_spellbooks:holy_upgrade_orb',
F:'ancient_elements:spectrillium_ingot',
G:'ancient_elements:spectrillium_ingot',
H:'hazennstuff:seraph_boots',
I:'ancient_elements:spectrillium_ingot',
})

    event.shaped(Item.of("ancient_elements:whirl_rod",1),
    [" B ",
    "DEF",
    " H "],
    { B:"minecraft:packed_ice",
    D:"minecraft:packed_ice",
    E:"minecraft:blaze_rod",
    F:"minecraft:packed_ice",
    H:"minecraft:packed_ice",}
    );

    event.shaped(
 Item.of('mowziesmobs:wrought_helmet', 1),
 [
'ABC',
'DEF',
'GHI'
 ],
 {
A:'create:iron_sheet',
B:'armageddon_mod:colossal_iron_ingot',
C:'create:iron_sheet',
D:'armageddon_mod:colossal_iron_ingot',
E:'minecraft:iron_helmet',
F:'armageddon_mod:colossal_iron_ingot',
G:'create:iron_sheet',
H:'armageddon_mod:colossal_iron_ingot',
I:'create:iron_sheet',
})

event.shaped(
 Item.of('mowziesmobs:wrought_axe', 1),
 [
'AB ',
'DEF',
'GHI'
 ],
 {
A:'armageddon_mod:colossal_iron_ingot',
B:'armageddon_mod:colossal_iron_ingot',
 
D:'armageddon_mod:colossal_iron_ingot',
E:'create:iron_sheet',
F:'armageddon_mod:colossal_iron_ingot',
G:'born_in_chaos_v1:bone_handle',
H:'armageddon_mod:colossal_iron_ingot',
I:'armageddon_mod:colossal_iron_ingot',
})

event.shaped(
 Item.of('born_in_chaos_v1:darkwarblade', 1),
 [
' BC',
'DEF',
'GH '
 ],
 {
 
B:'kubejs:dark_metal_sheet',
C:'born_in_chaos_v1:dark_metal_ingot',
D:'kubejs:dark_metal_sheet',
E:'born_in_chaos_v1:dark_metal_block',
F:'kubejs:dark_metal_sheet',
G:'born_in_chaos_v1:sharpened_dark_metal_sword',
H:'kubejs:dark_metal_sheet',
 
})

event.shaped(
 Item.of('forbidden_arcanus:quantum_catcher', 1),
 [
'ABC',
'DEF',
'GHI'
 ],
 {
A:'composite_material:dungeon_steel_ingot',
B:'forbidden_arcanus:arcane_crystal',
C:'composite_material:dungeon_steel_ingot',
D:'forbidden_arcanus:arcane_crystal',
E:'minecraft:nether_star',
F:'forbidden_arcanus:arcane_crystal',
G:'composite_material:dungeon_steel_ingot',
H:'forbidden_arcanus:arcane_crystal',
I:'composite_material:dungeon_steel_ingot',
})

event.shaped(
 Item.of('born_in_chaos_v1:great_reaper_axe', 1),
 [
'ABC',
'DE ',
' H '
 ],
 {
A:'kubejs:dark_metal_sheet',
B:'born_in_chaos_v1:lifestealer_bone',
C:'born_in_chaos_v1:dark_metal_nugget',
D:'kubejs:dark_metal_sheet',
E:'born_in_chaos_v1:bone_handle',
 
 
H:'born_in_chaos_v1:bone_handle',
 
})

event.shapeless(
 Item.of('uniqueaccessories:rose_of_temptation', 1),
 ['minecraft:beetroot','create:tree_fertilizer','immersiveengineering:fertilizer','minecraft:rose_bush','minecraft:wheat','biomancy:fertilizer','minecraft:potato','minecraft:carrot',])

 event.shaped(
 Item.of('waystones:warp_dust', 4),
 [
'ABC',
'DEF',
'GHI'
 ],
 {
A:'minecraft:amethyst_shard',
B:'terramity:fairy_dust',
C:'minecraft:amethyst_shard',
D:'terramity:fairy_dust',
E:'minecraft:ender_pearl',
F:'terramity:fairy_dust',
G:'minecraft:amethyst_shard',
H:'terramity:fairy_dust',
I:'minecraft:amethyst_shard',
})

event.shaped(
 Item.of('uniqueaccessories:devils_eyeball', 1),
 [
'ABC',
'DEF',
'GHI'
 ],
 {
A:'armageddon_mod:bloody_ingot',
B:'minecraft:potion',
C:'armageddon_mod:bloody_ingot',
D:'minecraft:potion',
E:'minecraft:ender_eye',
F:'minecraft:potion',
G:'armageddon_mod:bloody_ingot',
H:'minecraft:potion',
I:'armageddon_mod:bloody_ingot',
})

event.shaped(
 Item.of('uniqueaccessories:moon_stone', 1),
 [
'ABC',
'DEF',
'GHI'
 ],
 {
A:'terramity:polished_moonstone',
B:'terramity:opaline_moonstone',
C:'terramity:polished_moonstone',
D:'terramity:opaline_moonstone',
E:'ars_nouveau:ritual_moonfall',
F:'terramity:opaline_moonstone',
G:'terramity:polished_moonstone',
H:'terramity:opaline_moonstone',
I:'terramity:polished_moonstone',
})

event.shaped(
 Item.of('uniqueaccessories:sun_stone', 1),
 [
'ABC',
'DEF',
'GHI'
 ],
 {
A:'armageddon_mod:helionite_ingot',
B:'minecraft:sunflower',
C:'armageddon_mod:helionite_ingot',
D:'minecraft:sunflower',
E:'armageddon_mod:obsidian_skull',
F:'minecraft:sunflower',
G:'armageddon_mod:helionite_ingot',
H:'minecraft:sunflower',
I:'armageddon_mod:helionite_ingot',
})

event.shaped(
 Item.of('knightlib:empty_grail', 1),
 [
'ABC',
' E ',
'GHI'
 ],
 {
A:'create:copper_sheet',
B:'miners_delight:copper_cup',
C:'create:copper_sheet',
 
E:'minecraft:copper_ingot',
 
G:'minecraft:copper_ingot',
H:'minecraft:copper_ingot',
I:'minecraft:copper_ingot',
})

event.shaped(
 Item.of('companions:soul_furnace_block', 1),
 [
'ABC',
'DEF',
'GHI'
 ],
 {
A:'bbb:cut_copper_layer',
B:'railways:smokestack_coalburner_copper',
C:'bbb:cut_copper_layer',
D:'minecraft:bricks',
E:'minecraft:blast_furnace',
F:'minecraft:bricks',
G:'minecraft:cut_copper',
H:'minecraft:bricks',
I:'minecraft:cut_copper',
})

event.shaped(
 Item.of('bloodmagic:altar', 1),
 [
'ABC',
'DEF',
'GHI'
 ],
 {
A:'companions:crystallized_blood',
B:'minecraft:deepslate',
C:'companions:crystallized_blood',
D:'minecraft:deepslate',
E:'mythsandlegends:altar_of_the_dead',
F:'minecraft:deepslate',
G:'companions:crystallized_blood',
H:'minecraft:deepslate',
I:'companions:crystallized_blood',
})

event.shaped(
 Item.of('bloodmagic:sacrificialdagger', 1),
 [
'  C',
'DE ',
'GH '
 ],
 {
 
 
C:'minecraft:gold_ingot',
D:'minecraft:amethyst_shard',
E:'minecraft:gold_ingot',
 
G:'minecraft:diamond',
H:'minecraft:amethyst_shard',
 
})


    event.shaped(Item.of("ancient_elements:cosmic_rod",1),
    [" B ",
    "DEF",
    " H "],
    { B:"minecraft:ender_pearl",
    D:"minecraft:ender_pearl",
    E:"minecraft:blaze_rod",
    F:"minecraft:ender_pearl",
    H:"minecraft:ender_pearl",}
    );

    event.shaped(
 Item.of('create:cogwheel', 1),
 [
' B ',
'DEF',
' H '
 ],
 {
 
B:'#minecraft:planks',
 
D:'#minecraft:planks',
E:'create:shaft',
F:'#minecraft:planks',
 
H:'#minecraft:planks',
 
})

    event.shaped(Item.of("ancient_elements:aether_rod",1),
    [" B ",
    "DEF",
    " H "],
    { B:"ancient_elements:raw_aetherium",
    D:"ancient_elements:raw_aetherium",
    E:"minecraft:blaze_rod",
    F:"ancient_elements:raw_aetherium",
    H:"ancient_elements:raw_aetherium",}
    );

    event.shaped(Item.of("ae2:certus_quartz_crystal",1),
    ["   ",
    "   ",
    "GH "],
    {G:"minecraft:quartz",
    H:"minecraft:light_blue_dye",}
    );

    event.shaped(Item.of("forbidden_arcanus:crescent_moon",1),
    ["   ",
    "   ",
    "GH "],

    {G:"uniqueaccessories:moon_stone",
    H:"uniqueaccessories:moon_stone",}
    );

    event.shaped(Item.of("enigmaticdice:moon_shard",1),
    [" B ",
    "D  ",
    " H "],

    {B:"uniqueaccessories:moon_stone",
    D:"uniqueaccessories:moon_stone",
    H:"uniqueaccessories:moon_stone",}
    );

    event.shaped(Item.of("minionsremastered:masters_staff",1),
    [" BC",
    " EF",
    "G  "],

    {B:"minecraft:gold_ingot",
    C:"armageddon_mod:shadowed_ingot",
    E:"legendary_monsters:long_stick_half",
    F:"minecraft:gold_ingot",
    G:"legendary_monsters:long_stick_half",}
    );

    event.shaped(Item.of("explorerscompass:explorerscompass",1),
    ["ABC",
    "DEF",
    "GHI"],

    {A:"minecraft:nether_wart",
    B:"immersive_machinery:redstone_mechanism",
    C:"minecraft:nether_wart",
    D:"minecraft:deepslate_bricks",
    E:"minecraft:compass",
    F:"minecraft:deepslate_bricks",
    G:"minecraft:stone_bricks",
    H:"minecraft:nether_bricks",
    I:"minecraft:stone_bricks"}
    );

    event.shaped(Item.of("ancient_elements:ominous_bell",1),
    ["ABC",
    "DEF",
    "   "],

    {A:"armageddon_mod:raw_elvenite",
    B:"armageddon_mod:elvenite_ingot",
    C:"armageddon_mod:raw_elvenite",
    D:"armageddon_mod:elvenite_ingot",
    E:"armageddon_mod:raw_elvenite",
    F:"armageddon_mod:elvenite_ingot",}
    );

    event.shaped(Item.of("enigmaticdice:gravity_core",1),
    ["ABC",
    "DEF",
    "GHI"],

    {A:"create:electron_tube",
    B:"create:precision_mechanism",
    C:"create:electron_tube",
    D:"create:polished_rose_quartz",
    E:"enigmaticdice:moon",
    F:"create:polished_rose_quartz",
    G:"create:polished_rose_quartz",
    H:"create:polished_rose_quartz",
    I:"create:polished_rose_quartz"}
	);

    event.shaped(Item.of("morerelics:slumbering_amulet",1),
    ["ABC",
    "DEF",
    "GHI"],

    {A:"armageddon_mod:gilded_plate",
    B:"armageddon_mod:helionite_ingot",
    C:"armageddon_mod:gilded_plate",
    D:"armageddon_mod:helionite_ingot",
    E:"enigmaticlegacy:evil_essence",
    F:"armageddon_mod:helionite_ingot",
    G:"armageddon_mod:gilded_plate",
    H:"armageddon_mod:helionite_ingot",
    I:"armageddon_mod:gilded_plate"}
	);

    event.shaped(Item.of("morerelics:slumbering_amulet",1),
    ["ABC",
    "DEF",
    "GHI"],

    {A:"armageddon_mod:gilded_plate",
    B:"armageddon_mod:helionite_ingot",
    C:"armageddon_mod:gilded_plate",
    D:"armageddon_mod:helionite_ingot",
    E:"armageddon_mod:cosmos_shard",
    F:"armageddon_mod:helionite_ingot",
    G:"armageddon_mod:gilded_plate",
    H:"armageddon_mod:helionite_ingot",
    I:"armageddon_mod:gilded_plate"}
	);

    event.shaped(Item.of("goety_revelation:quietus_star",1),
    ["ABC",
    "DEF",
    "GHI"],

    {A:"forbidden_arcanus:dark_nether_star_block",
    B:"armageddon_mod:shadow_fragment",
    C:"forbidden_arcanus:dark_nether_star_block",
    D:"armageddon_mod:shadow_fragment",
    E:"traveloptics:dark_gem_of_the_living_void",
    F:"armageddon_mod:shadow_fragment",
    G:"forbidden_arcanus:dark_nether_star_block",
    H:"armageddon_mod:shadow_fragment",
    I:"forbidden_arcanus:dark_nether_star_block"}
	);

    event.shaped(Item.of('kubejs:broken_cube_piece_1', 1),
 [
'ABC',
'DEF',
'GHI'
 ],
 {
A:'enigmaticlegacy:golem_heart',
B:'enigmaticlegacy:evil_ingot',
C:'cataclysm:witherite_block',
D:'enigmaticlegacy:angel_blessing',
E:'enigmaticaddons:etherium_core',
F:'enigmaticlegacy:abyssal_heart',
G:'enigmaticlegacy:ocean_stone',
H:'enigmaticlegacy:evil_ingot',
I:'cataclysm:witherite_block',}
);

    event.shaped(Item.of("minecraft:verdant_froglight",1),
    ["ABC",
    "DEF",
    "GHI"],

    {A:"minecraft:slime_ball",
    B:"minecraft:slime_block",
    C:"minecraft:slime_ball",
    D:"minecraft:slime_block",
    E:"minecraft:glowstone",
    F:"minecraft:slime_block",
    G:"minecraft:slime_ball",
    H:"minecraft:slime_block",
    I:"minecraft:slime_ball"}
	);

    event.shaped(Item.of("minecraft:ochre_froglight",1),
    ["ABC",
    "DEF",
    "GHI"],

    {A:"minecraft:magma_cream",
    B:"minecraft:magma_block",
    C:"minecraft:magma_cream",
    D:"minecraft:magma_block",
    E:"minecraft:glowstone",
    F:"minecraft:magma_block",
    G:"minecraft:magma_cream",
    H:"minecraft:magma_block",
    I:"minecraft:magma_cream"})

    event.shaped(Item.of("minecraft:pearlescent_froglight",1),
    ["ABC",
    "DEF",
    "GHI"],

    {A:"ae2:fluix_pearl",
    B:"minecraft:ender_pearl",
    C:"ae2:fluix_pearl",
    D:"minecraft:ender_pearl",
    E:"minecraft:glowstone",
    F:"minecraft:ender_pearl",
    G:"ae2:fluix_pearl",
    H:"minecraft:ender_pearl",
    I:"ae2:fluix_pearl"}
	);

event.shaped(
 Item.of('terramity:pocket_universe', 1),
 [
' B ',
'DEF',
'GHI'
 ],
 {
 
B:'brutality:the_clock_of_frozen_time',
 
D:'brutality:sundered_clock',
E:'kubejs:linggangoonium_ingot',
F:'brutality:rampage_clock',
G:'brutality:timekeepers_clock',
H:'minecraft:clock',
I:'brutality:shattered_clock',
})

event.shaped(
 Item.of('enchantinginfuser:enchanting_infuser', 1),
 [
' B ',
'DEF',
'GHI'
 ],
 {
 
B:'forbidden_arcanus:dark_nether_star',
 
D:'minecraft:amethyst_shard',
E:'minecraft:crying_obsidian',
F:'minecraft:amethyst_shard',
G:'minecraft:crying_obsidian',
H:'minecraft:enchanting_table',
I:'minecraft:crying_obsidian',
})

event.shaped(
 Item.of('enchantinginfuser:advanced_enchanting_infuser', 1),
 [
' B ',
'DEF',
'GHI'
 ],
 {
 
B:'minecraft:dragon_egg',
 
D:'minecraft:netherite_ingot',
E:'minecraft:crying_obsidian',
F:'minecraft:netherite_ingot',
G:'minecraft:crying_obsidian',
H:'enchantinginfuser:enchanting_infuser',
I:'minecraft:crying_obsidian',
})

    event.shaped(Item.of("companions:frog_bonanza_block",1),
    ["A C",
    "DEF",
    "GHI"],

    {A:"armageddon_mod:chiseled_bloody_bricks",
    C:"armageddon_mod:chiseled_bloody_bricks",
    D:"minecraft:prismarine_bricks",
    E:"terramity:slot_machine",
    F:"minecraft:prismarine_bricks",
    G:"armageddon_mod:elvenite_bricks",
    H:"armageddon_mod:elvenite_bricks",
    I:"armageddon_mod:elvenite_bricks"}
	);

    event.shaped(Item.of("companions:shadow_bell",1),
    [" BC",
    " EF",
    "G  "],

    { B:"ancient_elements:nether_steel_ingot",
    C:"minecraft:bell",
    E:"companions:crystallized_blood",
    F:"ancient_elements:nether_steel_ingot",
    G:"born_in_chaos_v1:dark_rod",}
    );

    event.shaped(Item.of("companions:shade_sword_altar",1),
    ["AB ",
    " E ",
    "GHI"],

    {A:"minecraft:black_banner",
    B:"born_in_chaos_v1:dark_rod",
    E:"ancient_elements:nether_steel_ingot",
    G:"companions:crystallized_blood",
    H:"minecraft:wither_skeleton_skull",
    I:"companions:crystallized_blood"}
    );

    event.shaped(Item.of("brutality:nanomachines",1),
    ["ABC",
    "DEF",
    "GHI"],

    {A:"terramity:conductite_block",
    B:"terramity:black_matter",
    C:"terramity:conductite_block",
    D:"terramity:black_matter",
    E:"terramity:antimatter_pacemaker",
    F:"terramity:black_matter",
    G:"terramity:conductite_block",
    H:"terramity:black_matter",
    I:"terramity:conductite_block"}
    );
	
    event.shaped(Item.of("brutality:target_cube",1),
    ["ABC",
    "DEF",
    "GHI"],

    {A:"minecraft:target",
    B:"terramity:reverium",
    C:"minecraft:target",
    D:"terramity:reverium",
    E:"terramity:lucky_dice",
    F:"terramity:reverium",
    G:"minecraft:target",
    H:"terramity:reverium",
    I:"minecraft:target"}
	);

    event.shaped(Item.of("lethality:midas_touch",1),
    ["ABC",
    "DEF",
    "GHI"],

    {A:"minecraft:gold_block",
    B:"minecraft:gold_block",
    C:"terramity:fateful_coin",
    D:"terramity:topaz_block",
    E:"brutality:jackpot",
    F:"minecraft:gold_block",
    G:"terramity:duskrok_greatsword",
    H:"terramity:topaz_block",
    I:"minecraft:gold_block"}
	);

    event.shaped(Item.of("lethality:gamblers_blade",1),
    ["ABC",
    "DEF",
    "GHI"],

    {A:"terramity:lucky_dice",
    B:"lethality:real_knife",
    C:"terramity:die_of_revival",
    D:"terramity:nullifying_dice",
    E:"brutality:target_cube",
    F:"lethality:real_knife",
    G:"lethality:midas_touch",
    H:"terramity:weighted_die",
    I:"terramity:devils_dice"}
	);
	
    event.shaped(Item.of("enigmaticlegacy:eldritch_pan",1),
    ["ABC",
    "DEF",
    "GHI"],

    {A:"enigmaticlegacy:evil_essence",
    B:"enigmaticlegacy:void_stone",
    C:"enigmaticlegacy:evil_essence",
    D:"enigmaticlegacy:evil_ingot",
    E:"goety_cataclysm:abyss_essence",
    F:"enigmaticlegacy:evil_ingot",
    G:"enigmaticlegacy:the_infinitum",
    H:"brutality:frying_pan",
    I:"enigmaticaddons:violence_scroll"}
	);
	
    event.shaped(Item.of("armageddon_mod:iron_ring",1),
    ["ABC",
    "D F",
    "GHI"],

    {A:"create:iron_sheet",
    B:"minecraft:iron_ingot",
    C:"create:iron_sheet",
    D:"minecraft:iron_ingot",
    F:"minecraft:iron_ingot",
    G:"create:iron_sheet",
    H:"minecraft:iron_ingot",
    I:"create:iron_sheet"}
	);

    event.shaped(Item.of("armageddon_mod:bee_stinger",1),
  [" B ",
  "DEF",
  " H "],

{ B:"minecraft:poisonous_potato",
 D:"minecraft:poisonous_potato",
E:"minecraft:flint",
F:"minecraft:poisonous_potato",
 H:"minecraft:poisonous_potato",}
 );

    event.shaped(Item.of("armageddon_mod:guardians_crystal",1),
  [" BC",
  "DEF",
  "GH "],

{ B:"minecraft:prismarine_shard",
C:"minecraft:sea_lantern",
D:"minecraft:prismarine_shard",
E:"armageddon_mod:khyros_tear",
F:"minecraft:prismarine_shard",
G:"minecraft:sea_lantern",
H:"minecraft:prismarine_shard",}
);

    event.shaped(Item.of("armageddon_mod:wither_spine",1),
  ["   ",
  "DEF",
  "GHI"],

{   D:"mythsandlegends:scorched_bone",
E:"minecraft:wither_rose",
F:"mythsandlegends:scorched_bone",
G:"biomancy:withered_mob_marrow",
H:"biomancy:withered_mob_marrow",
I:"biomancy:withered_mob_marrow"}
);

    event.shaped(Item.of("armageddon_mod:blindfold",1),
  ["ABC",
  "DEF",
  "GHI"],

{A:"minecraft:string",
B:"forbidden_arcanus:cloth",
C:"forbidden_arcanus:cloth",
D:"forbidden_arcanus:cloth",
E:"armageddon_mod:khyros_tear",
F:"forbidden_arcanus:cloth",
G:"forbidden_arcanus:cloth",
H:"forbidden_arcanus:cloth",
I:"forbidden_arcanus:cloth"}
);

    event.shaped(Item.of("armageddon_mod:fisher_hat",1),
  ["ABC",
  "DEF",
  "GHI"],

{A:"minecraft:pufferfish_bucket",
B:"minecraft:leather",
C:"minecraft:cod_bucket",
D:"minecraft:leather",
E:"armageddon_mod:khyros_tear",
F:"minecraft:leather",
G:"minecraft:salmon_bucket",
H:"minecraft:leather_helmet",
I:"minecraft:tropical_fish_bucket"}
);

    event.shaped(Item.of("armageddon_mod:hunter_cloak",1),
  ["ABC",
  "DEF",
  "G I"],

{A:"minecraft:leather",
B:"minecraft:leather_chestplate",
C:"minecraft:leather",
D:"minecraft:leather",
E:"armageddon_mod:khyros_tear",
F:"minecraft:leather",
G:"minecraft:leather",
 I:"minecraft:leather"}
);

    event.shaped(Item.of("brutality:unbridled_rage",1),
  [" B ",
  "DEF",
  " H "],

{ B:"terramity:spiteful_soul",
 D:"terramity:antiprism",
E:"terramity:hellspec_alloy",
F:"terramity:spectral_soul",
 H:"terramity:black_matter",}
);

    event.shaped(Item.of("armageddon_mod:fiery_wither_skull",1),
  ["ABC",
  "DEF",
  "GHI"],

{A:"undergarden:utherium_crystal",
B:"minecraft:lava_bucket",
C:"undergarden:utherium_crystal",
D:"minecraft:netherrack",
E:"minecraft:nether_wart",
F:"minecraft:netherrack",
G:"undergarden:utherium_crystal",
H:"minecraft:diamond",
I:"undergarden:utherium_crystal"}
);
});