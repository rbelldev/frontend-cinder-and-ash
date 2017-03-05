import {Item} from "./item/item";

export class EquippedItems {

  averageItemLevel:string;
  averageItemLevelEquipped:string;

  itemSlots:string[] = [
    'head', 'neck', 'shoulder', 'back',
    'chest', 'shirt', 'wrist', 'hands',
    'legs', 'feet', 'finger1', 'finger2',
    'trinket1', 'trinket2', 'mainHand', 'offHand'
  ];

  itemSlotDisplayStrings = {
    'head':'Head',
    'neck':'Neck',
    'shoulder':'Shoulder',
    'back':'Back',
    'chest':'Chest',
    'shirt':'Shirt',
    'wrist':'Wrist',
    'hands':'Hands',
    'legs':'Legs',
    'feet':'Feet',
    'finger1':'Finger',
    'finger2':'Finger',
    'trinket1':'Trinket',
    'trinket2':'Trinket',
    'mainHand':'Main Hand',
    'offHand':'Off Hand'
  }

  head:Item;
  neck:Item;
  shoulder:Item;
  back:Item;
  chest:Item;
  shirt:Item;
  wrist:Item;
  hands:Item;
  legs:Item;
  feet:Item;
  finger1:Item;
  finger2:Item;
  trinket1:Item;
  trinket2:Item;
  mainHand:Item;
  offHand:Item;

  constructor(json:JSON) {

    this.averageItemLevel = json['averageItemLevel'];
    this.averageItemLevelEquipped = json['averageItemLevelEquipped'];

    this.head = this.checkForGear('head', json);
    this.neck = this.checkForGear('neck', json);
    this.shoulder = this.checkForGear('shoulder', json);
    this.back = this.checkForGear('back', json);
    this.chest = this.checkForGear('chest', json);
    this.shirt = this.checkForGear('shirt', json);
    this.wrist = this.checkForGear('wrist', json);
    this.hands = this.checkForGear('hands', json);
    this.legs = this.checkForGear('legs', json);
    this.feet = this.checkForGear('feet', json);
    this.finger1 = this.checkForGear('finger1', json);
    this.finger2 = this.checkForGear('finger2', json);
    this.trinket1 = this.checkForGear('trinket1', json);
    this.trinket2 = this.checkForGear('trinket2', json);
    this.mainHand = this.checkForGear('mainHand', json);
    this.offHand = this.checkForGear('offHand', json);

  }

  checkForGear(itemSlot:string, json:JSON):Item{
    return json[itemSlot] ? json[itemSlot]:undefined;
  }

}
