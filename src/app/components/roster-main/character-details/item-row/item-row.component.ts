import {Component, Input} from '@angular/core';
import {Item} from "../../../../models/battle-net/world-of-warcraft/item/item";

@Component({
  selector: 'item-row',
  templateUrl: './item-row.component.html',
  styleUrls: ['./item-row.component.css']
})

export class ItemRowComponent {

  @Input()slotName:string;
  @Input()item:Item;

}
