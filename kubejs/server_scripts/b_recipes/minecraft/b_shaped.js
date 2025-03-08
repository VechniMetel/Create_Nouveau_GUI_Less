ServerEvents.recipes(r => {
   r.shaped(
      'create_nouveau:saw',
      [
         ' a ',
         'a a',
         ' a '
      ], {
      'a': '#forge:plates/iron'
   })
   r.shaped(
      'create_nouveau:cage',
      [
         ' a ',
         'a a',
         ' a '
      ], {
      'a': 'minecraft:iron_bars'
   })
   r.shaped(
      'minecraft:cauldron',
      [
         '   ',
         'a a',
         ' a '
      ], {
      'a': '#forge:plates/iron'
   })
   r.shaped(
      'minecraft:cauldron',
      [
         '   ',
         'a a',
         ' a '
      ], {
      'a': '#forge:plates/tin'
   })
   r.shaped(
      'create_nouveau:drill',
      [
         ' 1 ',
         ' 21',
         ' 1 '
      ], {
      '1': 'create:andesite_alloy',
      '2': "minecraft:iron_ingot"
   }
   )
   r.shaped(
      'create_nouveau:copper_wire',
      [
         'aaa',
         'aba',
         'aaa'
      ], {
      'a': 'createaddition:copper_spool',
      'b': 'minecraft:iron_ingot'
   }
   ).replaceIngredient(
      'createaddition:copper_spool',
      'createaddition:spool'
   )
   r.shaped(
      '8x createaddition:copper_spool',
      [
         'aaa',
         'aba',
         'aaa'
      ], {
      'a': 'createaddition:spool',
      'b': 'create_nouveau:copper_wire'
   }
   ).replaceIngredient(
      'create_nouveau:copper_wire',
      'minecraft:iron_ingot'
   )
   r.shaped(
      'moreburners:copper_coil',
      [
         ' a ',
         'a a',
         ' a '
      ],
      {
         'a': 'createaddition:copper_spool'
      }
   ).replaceIngredient(
      'createaddition:copper_spool',
      'createaddition:spool'
   )
   r.shaped(
      'moreburners:nickel_coil',
      [
         ' a ',
         'aba',
         ' a '
      ],
      {
         'a': 'createaddition:electrum_spool',
         'b': 'moreburners:copper_coil'
      }
   ).replaceIngredient(
      'createaddition:electrum_spool',
      'createaddition:spool'
   )
   r.shaped(
      'moreburners:nickel_coil',
      [
         ' a ',
         'aba',
         ' a '
      ],
      {
         'a': 'createaddition:gold_spool',
         'b': 'moreburners:copper_coil'
      }
   ).replaceIngredient(
      'createaddition:gold_spool',
      'createaddition:spool'
   )
   r.shaped(
      'create_nouveau:solder_coil',
      [
         ' a ',
         'aba',
         ' a '
      ], {
      'a': 'create_nouveau:solder_wire',
      'b': 'createaddition:spool'
   }
   )
   r.shaped(
      'create_nouveau:iron_coil',
      [
         ' a ',
         'aba',
         ' a '
      ], {
      'a': 'createaddition:iron_wire',
      'b': 'createaddition:spool'
   }
   )
   r.shaped(
      "create_nouveau:enchanted_gold_ingot",
      [
         'aaa',
         'aaa',
         'aaa'
      ], {
      'a': "create_nouveau:enchanted_gold_nugget"
   }
   )
   r.shaped(
      "create_nouveau:enchanted_gold_block",
      [
         'aaa',
         'aaa',
         'aaa'
      ], {
      'a': "create_nouveau:enchanted_gold_ingot"
   }
   )
})