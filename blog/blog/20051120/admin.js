// ------------------------  LOCALIZATION ROUTINE ------------------------

function localmsg(code) {

switch (code) 
{

//   Admin interface messages 

   case 1:   return ('El�z� nap');
   case 2:   return ('K�vetkez� nap');
   case 3:   return ('t�r�l');   
   case 4:   return ('megv�laszolva');
   case 5:   return ('V�lasz�zenet');
   case 6:   return ('OK');
   case 7:   return ('Keres�s');
   case 8:   return ('janu�r');
   case 9:   return ('febru�r');
   case 10:   return ('m�rcius');
   case 11:   return ('�prilis');
   case 12:   return ('m�jus');
   case 13:   return ('j�nius');
   case 14:   return ('j�lius');
   case 15:   return ('augusztus');
   case 16:   return ('szeptember');
   case 17:   return ('okt�ber');
   case 18:   return ('november');
   case 19:   return ('december');
   case 20:   return ('Helytelen d�tum!');
   case 21:   return ('Ugr�s');
   case 22:   return ('Mapp�ba helyez�s');
   case 23:   return ('Nincs mapp�ba sorolva');
   case 24:   return ('V�ltoztat�sok elfogad�sa');
   case 25:   return ('Biztos vagy te ebben, sz�p �cs�m?');
   case 26:   return ('Nincs v�lasz�zenet');
   case 27:   return ('Keres�sz�t majd �n �rok be?!');
   case 28:   return ('A keres�sz� minimum 3 karakteres legyen');
   case 29:   return ('T�l hossz� keres�sz�');
   case 30:   return ('Mappa neve');
   case 31:   return ('R�vid le�r�s');
   case 32:   return ('M�dos�t�s');
   case 33:   return ('T�rl�s');
   case 34:   return ('�j mappa l�trehoz�sa');
   case 35:   return ('T�l r�vid mappan�v (min. 5 karakter)');
   case 36:   return ('T�l hossz� mappan�v (max. 30 karakter)');
   case 37:   return ('Mappa neve');
   case 38:   return ('Le�r�s');
   case 39:   return ('T�nyleg t�rl�d ezt a mapp�t?');
   case 40:   return ('No, mi a jelsz�?');
	

//  User interface messages

   case 1001: return ('HOGY MI MINDEN KAPHAT�?');
   case 1002: return ('V�lassz az al�bbi kateg�ri�kb�l!');
   case 1003: return ('Vissza a f�oldalra');
   case 1004: return ('A V�D�R TARTALMA');
   case 1005: return ('db. �rucikk, �sszesen:');
   case 1006: return ('Ft');
   case 1007: return ('Darabsz�m:');
   case 1008: return ('�ra, �sszesen:');
   case 1009: return ('Befejeztem a v�logat�st, megyek a p�nzt�rhoz');
   case 1010: return (':: design by tomcat :: php by vacsati ::');
   case 1011: return ('(c) 2006 all rights reserved');
   case 1012: return ('db.');
   case 1013: return ('jogi tudnival�k');
   case 1014: return ('Vissza a kateg�ri�khoz');
   case 1015: return ('�ra: ');
   case 1016: return ('Vissza a pol�k list�j�hoz');
   case 1017: return ('Alap:');
   case 1018: return ('Sz�n:');
   case 1019: return ('M�ret:');
   case 1020: return ('Hogy n�z ki?');
   case 1021: return ('Mekkora m�ret kell?');
   case 1022: return ('Bele a v�d�rbe!');
   case 1023: return ('J� lesz, mehet a v�d�rbe?');
   case 1024: return ('Elk�ld�m ezt a linket valakinek!');
   case 1025: return ('Linkajanlo a www.tomcatpolo.hu-rol');
   case 1026: return ('Udvozlet! Egy baratod a tomcatpolo.hu-n jart, es ugy gondolta, erdekelni fog Teged az alabbi arucikkunk:<BR><BR>');
   case 1027: return ('<BR><BR>Udvozlettel,<BR>tomcatpolo.hu');
   case 1028: return ('T�rl�d ezt a t�telt?');
   case 1029: return ('Rendel�s lez�r�sa');
   case 1030: return ('A rendel�s befejez�s�hez t�ltsd ki az al�bbi mez�ket. Mindet!!');
   case 1031: return ('N�v:');
   case 1032: return ('Nem a beceneved! Csak teljes n�vre feladott rendel�st fogadunk el.');
   case 1033: return ('Fasza, mehet!');
   case 1034: return ('Nem adtad meg a nevedet.');
   case 1035: return ('T�l r�vid nevet adt�l meg.');
   case 1036: return ('T�l hossz� nevet adt�l meg.');
   case 1037: return ('C�g, munkahely neve:');
   case 1038: return ('Csak ha munkahelyre rendeled. Ha nem szokt�l otthon lenni, ez a c�lszer�bb!');
   case 1039: return ('Telep�l�s:');
   case 1040: return ('Nem adtad meg a telep�l�s nev�t!');
   case 1041: return ('T�l r�vid a megadott telep�l�s neve.');
   case 1042: return ('T�l hossz� a megadott telep�l�s neve.');
   case 1043: return ('Telep�l�s, ir�ny�t�sz�m:');
   case 1044: return ('Nem adt�l meg ir�ny�t�sz�mot!');
   case 1045: return ('Az ir�ny�t�sz�mnak 4 jegyb�l kell �llnia.');
   case 1046: return ('Az ir�ny�t�sz�mnak 4 jegyb�l kell �llnia.');
   case 1047: return ('Utca, h�zsz�m, emelet, ajt�:');
   case 1048: return ('Nem adtad meg az utc�t �s a h�zsz�mot!');
   case 1049: return ('Nem t�l r�vid ez az utcan�v?');
   case 1050: return ('A megadott utcan�v t�l hossz�.');
   case 1051: return ('Mi van a cseng�re, kaputelefonra �rva?');
   case 1052: return ('Ha m�s, mint az a n�v, amire a csomagot rendelted, FELT�TLEN�L �rd ide!');
   case 1053: return ('Mobiltelefon-sz�mod:');
   case 1054: return ('Ezen fog keresni a fut�r, ha nem tal�l. Felt�tlen�l add meg!');
   case 1055: return ('Nem adt�l meg telefonsz�mot.');
   case 1056: return ('A megadott telefonsz�m t�l r�vid.');
   case 1057: return ('T�l hossz� telefonsz�m.');
   case 1058: return ('E-mail c�m:');
   case 1059: return ('Ne foss�l, nem kapsz spamet. Az�rt kell, hogy el�rj�nk, ha gebasz van.');
   case 1060: return ('Nem adt�l meg e-mail c�met.');
   case 1061: return ('A megadott e-mail c�m t�l r�vid.');
   case 1062: return ('T�l hossz� e-mail c�m.');

}

return false;

}


function addmsg(code) {
   if (localmsg(code)) { document.write(localmsg(code)); }
   else { document.write('ERROR!'); }
}


// ------------------------ �LTAL�NOS RUTINOK ------------------------


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


// ------------------------  �ZEN�RENDSZER RUTINJAI ------------------------


function commitchanges() {
   if (confirm(localmsg(25))==false) {
   return false;
   }

}


