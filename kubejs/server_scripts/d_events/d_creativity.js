NetworkEvents.dataReceived("openBackpack",event => {
    const player = event.player;
    if (player.nbt.ForgeCaps['curios:inventory'].Curios.toString().match('create_nouveau:embers_charm')) {
        if (!player.data.embers_charm_cooldown) {
            player.data.embers_charm_cooldown = 0;
        };
        if (player.data.embers_charm_cooldown <= 0) {
            player.data.embers_charm_cooldown = 20;
            player.data.embers_charm_charging = true;
        }
    }
});

PlayerEvents.tick(event => {
    const player = event.player;
    if (!player.data.embers_charm_charging) return;
    if (player.data.embers_charm_cooldown > 0) {
        player.data.embers_charm_cooldown--;
    } else {
        player.data.embers_charm_charging = false;
        var playerHealth = player.getHealth();
        var damage = playerHealth * 0.5;
        player.attack(damage);
        var qwq = player.level.getEntitiesWithin(AABB.of(player.x-5,player.y-2,player.z-5,player.x+5,player.y+2,player.z+5));
        qwq.forEach(entity => {
            if (entity !== player) {
                var fireDamage = damage * 3;
                entity.attack(fireDamage);
                entity.setRemainingFireTicks(1000);
            }
        });
        player.server.runCommandSilent(`title ${player.name.getString()} actionbar {"text":"消耗了${damage}滴血"}`);
    }
});

ItemEvents.foodEaten('minecraft:golden_apple',r=>{
    let randommath = Math.random();
    r.player.tell(randommath);
    const { entity, target, hand, server, level } = r;
    if (randommath <= 0.5 && randommath >= 0.3) {
    entity.potionEffects.add('minecraft:night_vision', 200, 0, false, true);//我先传上去效果之后改
    r.player.data.awa = 60;
    }
})
PlayerEvents.tick(r=>{
    const player = r.player;
    if (!player.data.awa) return;
    if (player.data.awa > 0) {
        player.data.awa--;
    }
    const ywe = player.data.awa/20;
    player.server.runCommandSilent(`title ${player.name.getString()} actionbar {"text":"§5你现在没法用右键了awa,§3剩余时间${ywe}秒"}`);
})
ItemEvents.rightClicked(r => {
    if (r.player.data.awa > 0) {
        r.cancel()
    }
})
BlockEvents.rightClicked(r => {
    if (r.player.data.awa > 0) {
        r.cancel()
    }
})
ItemEvents.foodEaten(r=>{
    if (r.player.data.awa < 40) {
        r.cancel()
    }
})