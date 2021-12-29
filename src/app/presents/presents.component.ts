import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

interface i_item {
  id: number,
  key: string,
  name: string,
  imgUrl: string,
  desc: string
  link?: string,
  taken: boolean
};

interface message {
  name: string,
  surname: string,
  email: string,
  message: string
}

@Component({
  selector: 'app-presents',
  templateUrl: './presents.component.html',
  styleUrls: ['./presents.component.css']
})

export class PresentsComponent implements OnInit {

  items: i_item[]
  = [
    {id: 1, key: 'gift_01', name: 'Žehlící prkno', imgUrl: 'assets/presents/gift_01.PNG',  desc: 'Jistě nechcete, aby se novomanželům sešly dvě žehlící prkna. Neváhejte a rezervujte si tento dar, než vás někdo předběhne!', taken: true},
    {id: 2, key: 'gift_02', name: 'Ruční mixér', imgUrl: 'assets/presents/gift_02.PNG', desc: 'Chcete udělat novomanželům radost novým mixérem? U tohohle předmětu si snoubenci vybrali konkrétní typ. Pro detail stiskněte tlačítko "Prohlédnout zboží".', link: "https://mixery.heureka.cz/bosch-ergomixx-mfq36440/recenze/#section", taken: true},
    {id: 3, key: 'gift_03', name: 'Tyčový mixér', imgUrl: 'assets/presents/gift_03.PNG', desc: 'Až už novomanželé budou připřavovat jakékoliv pochutiny, tyčový mixér je jisto jistě skvelý pomocník do domácnosti! Neváhejte zarezervovat, abyste si i vy na návštěvě u novomanželů užili dobroty, které Vám připraví! Nezapomeňte se mrknout, jaký konkrétně snoubenci chtějí stisknutím tlačítka "Prohlédnout zboží".', link: 'https://www.g21-vitality.cz/mixer-g21-vitalstick-800-w-black/recenze.html', taken: true},
    {id: 4, key: 'gift_04', name: 'Mop a smeták', imgUrl: 'assets/presents/gift_04.PNG', desc: 'Když už uklízet, tak to vzít od podlahy! A to se samozřejmě neobejde bez mopu a smetáku!', taken: false},
    {id: 5, key: 'gift_05', name: 'Vařečky', imgUrl: 'assets/presents/gift_05.PNG', desc: 'Univerzální nástroje do domácnosti, ať už na vaření, nebo na Velikonoce.', taken: true},
    {id: 6, key: 'gift_06', name: 'Lis na česnek', imgUrl: 'assets/presents/gift_06.PNG', desc: 'Kdo by se chtěl mordovat s nožem, když je třeba dát jídlu pořádný říz! Udělejte snoubencům radost lisem na česnek!', taken: true},
    {id: 7, key: 'gift_07', name: 'Topinkovač', imgUrl: 'assets/presents/gift_07.PNG', desc: 'Ráno dělá den! A kdo si dnes umí představit ráno bez křupavné topinky? Naši snoubenci rozhodně ne!', link: 'https://topinkovace.heureka.cz/sencor-sts-2607bk/recenze/#section', taken: true},
    {id: 8, key: 'gift_08', name: 'Rychlovarná konvice', imgUrl: 'assets/presents/gift_08.PNG', desc: 'Mini kuchyňský boiler na teplé nápoje.', link: 'https://rychlovarne-konvice.heureka.cz/sencor-swk-1720bk/recenze/#section', taken: true},
    {id: 9, key: 'gift_09', name: 'Příbory', imgUrl: 'assets/presents/gift_09.PNG', desc: 'Lžička, nůž a vidlička - výbava je celičká.', link:'https://www.g21-vitality.cz/sada-priboru-g21-gourmet-luxury-24-ks-ii-jakost.html#gallery', taken: true},
    {id: 10, key: 'gift_10', name: '2x Batoh', imgUrl: 'assets/presents/gift_10.PNG', desc: 'Na výlet, či na hory, \nsnoubenci batůžky vytáhnou z komory.', link: 'https://www.sportisimo.cz/loap/alpinex-25/203538/?varianta=1271616', taken: true},
    {id: 11, key: 'gift_11', name: '2x Spacák', imgUrl: 'assets/presents/gift_11.PNG', desc: 'Ať není manželům ve stanu zima, rezervujte spacáky, ať je jim prima.', link: 'https://www.nejlevnejsisport.cz/spaci-pytel-king-camp-desert-p-14821.html?fbclid=IwAR0u94u7sH-39mRIXV1y9rD_u5JXrUJWi6kgOTKYv-dNTmSVJTwsxL0ehZA', taken: false},
    {id: 12, key: 'gift_12', name: 'Manželské šachy lásky', imgUrl: 'assets/presents/gift_12.PNG', desc: 'Copak by si člověk od své polovičky přál? Masáž, výlet, či zákusek si dal?', link: 'https://www.sachylasky.cz/', taken: true},
    {id: 13, key: 'gift_13', name: 'Smoothie shaker', imgUrl: 'assets/presents/gift_13.PNG', desc: 'Jablka, hrušky nebo brůvky, Uhrovi rádi tyhle dobrůtky.', link: 'https://www.drmax.cz/sencor-snb-4302ss-nutri-mixer', taken: true},
    {id: 13, key: 'gift_14', name: 'IKEA - poukázka', imgUrl: 'assets/presents/gift_14.PNG', desc: 'Řekl bych vám vtip o nábytku z Ikei, ale příprava by zabrala příliš dlouho. :-) Můžete snoubence obdarovat třeba formou poukázky na nákup.', taken: false},
    {id: 13, key: 'gift_15', name: 'Deskové hry', imgUrl: 'assets/presents/gift_15.jpg', desc: 'Kdo si hraje nezlobí! Osadníci, Double, co si vymyslíte, to naši milí snoubenci ocení.', taken: false}

  ]

  

  message: message
   = {name: "",surname: "", email: "", message: ""}

  constructor() {
    
  }

  ngOnInit() {
  
    }

  sendMessage(form: NgForm){
    console.log('Sending data: ',form.value);
  }

}
