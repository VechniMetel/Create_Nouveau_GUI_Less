PlayerEvents.tick(event => {
    const player = event.player;
    const AttackIntervalAndBurningTime = 20//伤害间隔和燃烧时间统一设置，不然画面会不同步
    const MainHand =
        player.getMainHandItem() == 'anvilcraft:ember_anvil_hammer' ||
        player.getMainHandItem() == 'anvilcraft:ember_metal_pickaxe' ||
        player.getMainHandItem() == 'anvilcraft:ember_metal_shovel' ||
        player.getMainHandItem() == 'anvilcraft:ember_metal_sword' ||
        player.getMainHandItem() == 'anvilcraft:ember_metal_hoe' ||
        player.getMainHandItem() == 'anvilcraft:ember_metal_axe' ||
        player.getMainHandItem() == 'anvilcraft:ember_anvil' ||
        player.getMainHandItem() == 'anvilcraft:ember_smithing_table' ||
        player.getMainHandItem() == 'anvilcraft:ember_grindstone' ||
        player.getMainHandItem() == 'anvilcraft:ember_metal_ingot' ||
        player.getMainHandItem() == 'anvilcraft:cut_ember_metal_stairs' ||
        player.getMainHandItem() == 'anvilcraft:cut_ember_metal_slab' ||
        player.getMainHandItem() == 'anvilcraft:cut_ember_metal_pillar' ||
        player.getMainHandItem() == 'anvilcraft:cut_ember_metal_block' ||
        player.getMainHandItem() == 'anvilcraft:ember_metal_upgrade_smithing_template' ||
        player.getMainHandItem() == 'anvilcraft:ember_metal_nugget' ||
        player.getHeadArmorItem() == 'anvilcraft:ember_anvil_hammer'||
        player.getMainHandItem() == 'anvilcraft:ember_metal_block';
    const isHoldingSword = 
        player.getLegsArmorItem().nbt?.tic_materials  ? player.getLegsArmorItem().nbt?.tic_materials.some(e => e == 'create_nouveau:ember_metal') : false||
        player.getHeadArmorItem().nbt?.tic_materials  ? player.getHeadArmorItem().nbt?.tic_materials.some(e => e == 'create_nouveau:ember_metal') : false||
        player.getFeetArmorItem().nbt?.tic_materials  ? player.getFeetArmorItem().nbt?.tic_materials.some(e => e == 'create_nouveau:ember_metal') : false||
        player.getChestArmorItem().nbt?.tic_materials  ? player.getChestArmorItem().nbt?.tic_materials.some(e => e == 'create_nouveau:ember_metal') : false;
    const effects = player.hasEffect('minecraft:fire_resistance'); 
    if (!effects) {
        if (isHoldingSword && player.age % AttackIntervalAndBurningTime === 0) {
            player.attack(4);
            player.setRemainingFireTicks(AttackIntervalAndBurningTime); 
        };
        if (MainHand && player.age % AttackIntervalAndBurningTime === 0) {
            player.attack(4);
            player.setRemainingFireTicks(AttackIntervalAndBurningTime);
        }
    };
});