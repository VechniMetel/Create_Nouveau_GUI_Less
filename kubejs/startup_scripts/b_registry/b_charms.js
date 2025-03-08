StartupEvents.registry('item', r => {
    r.create('create_nouveau:embers_charm')
        .unstackable()
        .tag('create_nouveau:embers_charm')
        .tag('spell')
    r.create('create_nouveau:royal_steel_charm')
        .unstackable()
        .tag('create_nouveau:embers_charm')
        .tag('spell')
});

const $KeyMappingRegistry = Java.loadClass("dev.architectury.registry.client.keymappings.KeyMappingRegistry");
const $KeyMapping = Java.loadClass("net.minecraft.client.KeyMapping");
const $GLFWkey = Java.loadClass("org.lwjgl.glfw.GLFW");

ClientEvents.init(() => {
    global.regKeyR = new $KeyMapping(
        "key.ring.use", //按键的组名
        $GLFWkey.GLFW_KEY_RIGHT_SHIFT,
        "key.keybinding.ring.use" //按键的名字
    );
    $KeyMappingRegistry.register(global.regKeyR);
});