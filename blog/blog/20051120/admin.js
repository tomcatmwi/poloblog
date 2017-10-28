// ------------------------  LOCALIZATION ROUTINE ------------------------

function localmsg(code) {

switch (code) 
{

//   Admin interface messages 

   case 1:   return ('Elõzõ nap');
   case 2:   return ('Következõ nap');
   case 3:   return ('töröl');   
   case 4:   return ('megválaszolva');
   case 5:   return ('Válaszüzenet');
   case 6:   return ('OK');
   case 7:   return ('Keresés');
   case 8:   return ('január');
   case 9:   return ('február');
   case 10:   return ('március');
   case 11:   return ('április');
   case 12:   return ('május');
   case 13:   return ('június');
   case 14:   return ('július');
   case 15:   return ('augusztus');
   case 16:   return ('szeptember');
   case 17:   return ('október');
   case 18:   return ('november');
   case 19:   return ('december');
   case 20:   return ('Helytelen dátum!');
   case 21:   return ('Ugrás');
   case 22:   return ('Mappába helyezés');
   case 23:   return ('Nincs mappába sorolva');
   case 24:   return ('Változtatások elfogadása');
   case 25:   return ('Biztos vagy te ebben, szép öcsém?');
   case 26:   return ('Nincs válaszüzenet');
   case 27:   return ('Keresõszót majd én írok be?!');
   case 28:   return ('A keresõszó minimum 3 karakteres legyen');
   case 29:   return ('Túl hosszú keresõszó');
   case 30:   return ('Mappa neve');
   case 31:   return ('Rövid leírás');
   case 32:   return ('Módosítás');
   case 33:   return ('Törlés');
   case 34:   return ('Új mappa létrehozása');
   case 35:   return ('Túl rövid mappanév (min. 5 karakter)');
   case 36:   return ('Túl hosszú mappanév (max. 30 karakter)');
   case 37:   return ('Mappa neve');
   case 38:   return ('Leírás');
   case 39:   return ('Tényleg törlöd ezt a mappát?');
   case 40:   return ('No, mi a jelszó?');
	

//  User interface messages

   case 1001: return ('HOGY MI MINDEN KAPHATÓ?');
   case 1002: return ('Válassz az alábbi kategóriákból!');
   case 1003: return ('Vissza a fõoldalra');
   case 1004: return ('A VÖDÖR TARTALMA');
   case 1005: return ('db. árucikk, összesen:');
   case 1006: return ('Ft');
   case 1007: return ('Darabszám:');
   case 1008: return ('Ára, összesen:');
   case 1009: return ('Befejeztem a válogatást, megyek a pénztárhoz');
   case 1010: return (':: design by tomcat :: php by vacsati ::');
   case 1011: return ('(c) 2006 all rights reserved');
   case 1012: return ('db.');
   case 1013: return ('jogi tudnivalók');
   case 1014: return ('Vissza a kategóriákhoz');
   case 1015: return ('Ára: ');
   case 1016: return ('Vissza a polók listájához');
   case 1017: return ('Alap:');
   case 1018: return ('Szín:');
   case 1019: return ('Méret:');
   case 1020: return ('Hogy néz ki?');
   case 1021: return ('Mekkora méret kell?');
   case 1022: return ('Bele a vödörbe!');
   case 1023: return ('Jó lesz, mehet a vödörbe?');
   case 1024: return ('Elküldöm ezt a linket valakinek!');
   case 1025: return ('Linkajanlo a www.tomcatpolo.hu-rol');
   case 1026: return ('Udvozlet! Egy baratod a tomcatpolo.hu-n jart, es ugy gondolta, erdekelni fog Teged az alabbi arucikkunk:<BR><BR>');
   case 1027: return ('<BR><BR>Udvozlettel,<BR>tomcatpolo.hu');
   case 1028: return ('Törlöd ezt a tételt?');
   case 1029: return ('Rendelés lezárása');
   case 1030: return ('A rendelés befejezéséhez töltsd ki az alábbi mezõket. Mindet!!');
   case 1031: return ('Név:');
   case 1032: return ('Nem a beceneved! Csak teljes névre feladott rendelést fogadunk el.');
   case 1033: return ('Fasza, mehet!');
   case 1034: return ('Nem adtad meg a nevedet.');
   case 1035: return ('Túl rövid nevet adtál meg.');
   case 1036: return ('Túl hosszú nevet adtál meg.');
   case 1037: return ('Cég, munkahely neve:');
   case 1038: return ('Csak ha munkahelyre rendeled. Ha nem szoktál otthon lenni, ez a célszerûbb!');
   case 1039: return ('Település:');
   case 1040: return ('Nem adtad meg a település nevét!');
   case 1041: return ('Túl rövid a megadott település neve.');
   case 1042: return ('Túl hosszú a megadott település neve.');
   case 1043: return ('Település, irányítószám:');
   case 1044: return ('Nem adtál meg irányítószámot!');
   case 1045: return ('Az irányítószámnak 4 jegybõl kell állnia.');
   case 1046: return ('Az irányítószámnak 4 jegybõl kell állnia.');
   case 1047: return ('Utca, házszám, emelet, ajtó:');
   case 1048: return ('Nem adtad meg az utcát és a házszámot!');
   case 1049: return ('Nem túl rövid ez az utcanév?');
   case 1050: return ('A megadott utcanév túl hosszú.');
   case 1051: return ('Mi van a csengõre, kaputelefonra írva?');
   case 1052: return ('Ha más, mint az a név, amire a csomagot rendelted, FELTÉTLENÜL írd ide!');
   case 1053: return ('Mobiltelefon-számod:');
   case 1054: return ('Ezen fog keresni a futár, ha nem talál. Feltétlenül add meg!');
   case 1055: return ('Nem adtál meg telefonszámot.');
   case 1056: return ('A megadott telefonszám túl rövid.');
   case 1057: return ('Túl hosszú telefonszám.');
   case 1058: return ('E-mail cím:');
   case 1059: return ('Ne fossál, nem kapsz spamet. Azért kell, hogy elérjünk, ha gebasz van.');
   case 1060: return ('Nem adtál meg e-mail címet.');
   case 1061: return ('A megadott e-mail cím túl rövid.');
   case 1062: return ('Túl hosszú e-mail cím.');

}

return false;

}


function addmsg(code) {
   if (localmsg(code)) { document.write(localmsg(code)); }
   else { document.write('ERROR!'); }
}


// ------------------------ ÁLTALÁNOS RUTINOK ------------------------


function checknumber(value,min,max,msgcode) {

  if (String(Number(value)) == 'NaN') {
     alert(localmsg(msgcode));
     return false;
  }

  if (value<min || value>max) {
     alert(localmsg(msgcode));
     return false;
  }
  
  return true;
}


function checkstring(value,minlength,maxlength,emptystring,tooshort,toolong) {

   if (value =='') {
	alert(localmsg(emptystring));
	return false;
   }

   if (value.length < minlength) {
	alert(localmsg(tooshort));
	return false;
   }

   if (value.length > maxlength && maxlength > 0) {
	alert(localmsg(toolong));
	return false;
   }


   return true;
}


function confirmaction(msgcode) {
   return confirm(localmsg(msgcode));
}


function getdatemax(mnth) {

switch (mnth) {
	case 1:		return(31);
	case 2:		return(29);
	case 3:		return(31);
	case 4:		return(30);
	case 5:		return(31);
	case 6:		return(30);
	case 7:		return(31);
	case 8:		return(31);
	case 9:		return(30);
	case 10:	return(31);
	case 11:	return(30);
	case 12:	return(31);
}

return false;

}


function getpassword(phpURL) {
   window.open('password.html?url='+phpURL,'password','status=no,scrollbars=no,noresize,width=270,height=100');
}


// ------------------------  ÜZENÕRENDSZER RUTINJAI ------------------------


function commitchanges() {
   if (confirm(localmsg(25))==false) {
   return false;
   }

}


