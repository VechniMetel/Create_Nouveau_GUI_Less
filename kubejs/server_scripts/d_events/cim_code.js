//stone gen
BlockEvents.rightClicked("ue_addons:the_accelerator_of_mechanism_power", r => {
    //判定是否主手手持石质构件
    if (r.hand == "OFF_HAND") return
    let player = r.getPlayer()
    if (player == null) return
    if (r.getItem().is('ue_addons:stone_mechanism')) {
        const { x, y, z } = r.block.pos
        //设定扫描所用变量
        let numx = x
        let numz = z
        let outx
        let outz
        let pos
        let rand
        const num = [-2, -1, 0, 1, 2]
        let stor = 0
        let count = 0
        //判定周围的石头/深板岩是否足够
        for (let m = 0; m <= 4; m++) {
            outx = numx + num[m]
            for (let n = 0; n <= 4; n++) {
                outz = numz + num[n]
                pos = new BlockPos(outx, y, outz)

                let block = r.level.getBlock(pos).getId()

                if (block === 'minecraft:stone') {
                    stor = count + 1
                    count = stor
                }
                else if (block === 'minecraft:deepslate') {
                    stor = count + 1
                    count = stor
                }
            }
        }
        //若数量小于等于5则停止该程序
        if (count <= 5) return
        //若数量大于5则开始抽随机数转化方块
        for (let m = 0; m <= 4; m++) {
            outx = numx + num[m]
            for (let n = 0; n <= 4; n++) {
                outz = numz + num[n]
                pos = new BlockPos(outx, y, outz)

                let block = r.level.getBlock(pos).getId()
                if (block === 'minecraft:stone') {
                    rand = Math.random()
                    if (rand <= 0.1) {
                        r.level.getBlock(pos).set('minecraft:andesite')
                    } else if (rand <= 0.2) {
                        r.level.getBlock(pos).set('minecraft:diorite')
                    } else if (rand <= 0.3) {
                        r.level.getBlock(pos).set('minecraft:granite')
                    } else if (rand <= 0.4) {
                        r.level.getBlock(pos).set('create:limestone')
                    } else if (rand <= 0.5) {
                        r.level.getBlock(pos).set('tconstruct:seared_stone')
                    }
                }
                else if (block === 'minecraft:deepslate') {
                    rand = Math.random();
                    if (rand <= 0.1) {
                        r.level.getBlock(pos).set('tconstruct:seared_stone')
                    } else if (rand <= 0.2) {
                        r.level.getBlock(pos).set('minecraft:tuff')
                    } else if (rand <= 0.3) {
                        r.level.getBlock(pos).set('create:scoria')
                    } else if (rand <= 0.4) {
                        r.level.getBlock(pos).set('minecraft:dripstone_block')
                    } else if (rand <= 0.5) {
                        r.level.getBlock(pos).set('minecraft:smooth_basalt')
                    }

                }

            }

        }
        //使玩家挥动手持物品
        r.getPlayer().swing()
        //给进行操作的玩家播放提示音
        player.playNotifySound('create:crafter_craft', 'voice', 2, 1)
        //检测玩家是否创造模式
        if (r.player.isCreative()) { }
        //若是生存模式则减少一个石质构件
        else {
            r.getItem().shrink(1)
        }
    }
})

//stone particles
BlockEvents.rightClicked(r => {
    //设置扫描所用变量
    const { x, y, z } = r.block.pos
    let numx = x
    let numz = z
    let outx
    let outz
    let pos
    const num = [-2, -1, 0, 1, 2]
    let stor = 0
    let count = 0
    //扫描周围方块的石头/深板岩数量
    for (let m = 0; m <= 4; m++) {
        outx = numx + num[m]
        for (let n = 0; n <= 4; n++) {
            outz = numz + num[n]
            pos = new BlockPos(outx, y, outz)

            let block = r.level.getBlock(pos).getId()

            if (block === 'minecraft:stone') {
                stor = count + 1
                count = stor
            }
            else if (block === 'minecraft:deepslate') {
                stor = count + 1
                count = stor
            }
        }
    }
    //若数量小于等于5则停止该程序
    if (count <= 5) return
    //若数量大于5则召唤效果粒子
    const { block, item, player, level } = r;
    if (item.id !== 'ue_addons:stone_mechanism' || block.id !== 'ue_addons:the_accelerator_of_mechanism_power') return;
    level.server.runCommandSilent(
        `particle minecraft:dust 1 1 1 1 ${block.x + 0.5} ${block.y + 1} ${block.z + 0.5} 0.5 0.5 0.5 0.1 30`
    );
});