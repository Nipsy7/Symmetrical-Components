
//**************  SYMETRICAL COMPONENTS APP copyright 2019 Colin Harrison ******************


var coord="Rectangular";
var color1="black"; // main background color
var color2="black"; // main background color2
var color3="black"; // main grid background color
var color4="darkgrey";  // digital screen background color2
var color5="grey"; // navigation buttons back color
var color6="silver"; // grid line color main axis
var color7="white"; // grid line color main 
var color8="green"; // main title
var color9="black"; // sym components background
var color10="black"; // graphical buttons back color
var color11="silver"; // sym components grid lines
var colora="red";//#dd5555";//"#ee0000";
var colorb="white";//#dada77";
var colorc="cyan";//#33a1ff";//#33a1d0";
var colors="black,blue,cyan,darkgrey,green,grey,lightgrey,magenta,navy,olive,purple,red,silver,teal,white,yellow";
var keycolor1="#ba916c";
var keycolor2="#ba916c";
var keycolor3="#6e6cba";
var keycolor4="#6c95ba";
var size1=.8;
var line1=1.5;
var counter1=0;
var counter2=0;
var counter3=0;
var p=Math.PI;//3.1415926536;
var pi=Math.PI;//3.1415926536;
var e=Math.E;//2.718281
var d=(1+Math.sqrt(5))/2;  //phi
var phase="b";
var symphase="a";
var symang=0;
var maga=1;
var magb=1;
var magc=1;
var anga=0;
var angb=-120;
var angc=120;
var reala=1;
var imaga=0;
var realb=-0.5;
var imagb=Math.sin(-2*pi/3);
var realc=-0.5;
var imagc=Math.sin(2*pi/3);
var real1a=1;
var imag1a=0;
var real2a=0;
var imag2a=0;
var real0a=0;
var imag0a=0;
var mag1a=1;
var ang1a=0;
var mag2a=0;
var ang2a=0;
var mag0a=1;
var ang0a=0;
var coordinates="polar";
var showbtnall=false;
var showbtna=false;
var showbtnb=false;
var showbtnc=false;
var angularunits="Degrees";
var scale=0.2;
var scalefactor=scale*5;
var roundfactor=1000;
var roundfactora=10;
var labels=false;
var grid=true;
var gridsym=true;
var real1=real1a;
var real2=0;
var real0=0;
var imag1=0;
var imag2=0;
var imag0=0;
var real=[0,0,0];
var imag=[0,0,0];
var seq="negative"; 
var font1adj=1;
var font2adj=1;
var font3adj=1;
var font4adj=1;
var linesize=1;
var labels=false;
var euler=[false,false,false];
var gridcolour1="white";
var gridcolour2="white";
var zerocolour="green";
var sign1=[1,1,1];
var imagpresuf="suffix";
var pi_multiples=[3.142,1.571,0.785];
var pi_multiples_subs=[p,p/2,p/4];
var insert=false;
var current=1;
var zero=true;
var errorstate=false;
var phcolours="red white cyan";
var resetvalue=1;

// ****** new keypad variables
var sum = ["","","",""];
var imagnumbersymbol="i";
//var e=Math.E;
//var pi=Math.PI;
var length=[0,0,0,0];
var index=0;
var textedit=1;
var xstepmaster=0.0552;
var xstep=0.0552;
var positionx=[xstepmaster/3,xstepmaster/3,xstepmaster/3,xstepmaster/3];
var positiony=0.9;
var exp=false;
var backbtn=false;
var cursorcolor=["",colora,colorb,colorc];
var ebtn=[0,0];
var bracket = false;
var cursor=0;
var keysize=0.15;
var touchdown=false;
var polartext=false;
var update_cursor=true;
var gap=0.001;
var digformat="Rectangular";
var hyperbolic=false;
var inverse=false;
var layDlg=null;
var layFab=null;
var decimalplaces=4;
var basic=false;
var changeunits=false;
var fullcycle=false;

//Called when application is started.
function OnStart()
{

 
app.SetOrientation( "portrait" );
 app.ShowProgressBar( "Loading app...",0);
   
app.HideKeyboard( );


coord = app.LoadText( "Coord", "Rectangular" );
angularunits=app.LoadText( "angularunits", "Radians" );
font1adj = app.LoadNumber( "font1adj", 1 );
font2adj = app.LoadNumber( "font2adj", 1 );
font3adj = app.LoadNumber( "font3adj", 1 );
font4adj = app.LoadNumber( "font4adj", 1 );
font5adj= app.LoadNumber( "font5adj", 1 );
gridcolour1= app.LoadText( "gridcolour1", "green" );
gridcolour2= app.LoadText( "gridcolour2", "green" );
 imagnumbersymbol=app.LoadText( "imagsymbol", "j" );
 imagpresuf=app.LoadText( "prefixsuffix", "prefix" );
 zerocolour=app.LoadText( "zcolor", "white" );
 phcolours=app.LoadText( "phcolors","red yellow blue");
  keytheme=app.LoadText( "theme","woodland");
 if(imagpresuf=="prefix") {prefix=imagnumbersymbol;suffix="";}
 else {suffix=imagnumbersymbol;prefix="";}
//Updateprogress(0);
linesize=app.LoadNumber("linesize",0.5);

if(phcolours=="red white cyan"){colora="red";colorb="white";colorc="cyan";}
if(phcolours=="red white blue"){colora="red";colorb="white";colorc="#33a1ff";}
if(phcolours=="red yellow blue"){colora="red";colorb="yellow";colorc="#33a1ff";}
if(phcolours=="red yellow blue (muted)"){colora="#dd5555";colorb="#dada77";colorc="#33a1d0";}
if(phcolours=="magenta white cyan"){colora="magenta";colorb="white";colorc="cyan";}
if(phcolours=="pink grey turquoise"){ colora="#ff69b4";colorb="lightgrey";colorc="#40e0d0";}
 if(keytheme=="grey"){keycolor1="grey";keycolor2="grey";keycolor3="grey";keycolor4="grey";keycolor5="grey";keycolor6="white";}
   if(keytheme=="woodland"){keycolor1="#ba916c";keycolor2="#ba916c";keycolor3="#6c95ba";keycolor4="#95ba6c";keycolor5="grey";keycolor6="white";}
   if(keytheme=="sunrise"){keycolor1="#33a1d0";keycolor2="#33a1d0";keycolor3="#ffa500";keycolor4="#95ba6c",keycolor5="grey";keycolor6="white";}
   if(keytheme=="carbon"){keycolor1="#000000";keycolor2="#000000";keycolor3="#000000";keycolor4="#000000";keycolor5="#000000";keycolor6="lightgrey";}
   if(keytheme=="blue"){keycolor1="#3d598b";keycolor2="#3d598b";keycolor3="#3d598b";keycolor4="#3d598b";keycolor5="#3d598b";keycolor6="white";}
   if(keytheme=="nightfall"){keycolor1="#8b6f3d";keycolor2="#8b6f3d";keycolor3="#483d8b";keycolor4="#3d808b";keycolor5="black";keycolor6="lightgrey";}
if(keytheme=="desert"){keycolor1="#b37400";keycolor2="#b37400";keycolor3="#ffa500";keycolor4="#ba916c";keycolor5="grey";keycolor6="white";}
if(keytheme=="white"){keycolor1="white";keycolor2="white";keycolor3="white";keycolor4="white";keycolor5="grey";keycolor6="black";}
if(keytheme=="light"){keycolor1="white";keycolor2="white";keycolor3="white";keycolor4="white";keycolor5="white";keycolor6="#33a1ff";}


grid=app.LoadBoolean( "grid", true );    
gridsym=app.LoadBoolean( "gridsym", true );    
scale = app.LoadNumber( "scale", 0.25 );
resetvalue = app.LoadNumber( "resetvalue", 1 );
scalefactor=scale*5;
decimalplaces = app.LoadNumber( "decimal", decimalplaces );
roundfactor=Math.pow(10,decimalplaces);
   roundfactora=roundfactor;
zero=app.LoadBoolean( "zero", true );       
basic=app.LoadBoolean( "basic", false );       

digformat2=digformat;

var width=app.GetDisplayWidth();
var height=app.GetDisplayHeight();
aspectratio=width/height;
//app.ShowPopup( 1/aspectratio );

size2=0.5;
size1=size2*height/width;
if(size1>1)
{
size1=1;
size2=aspectratio;
}

//keysize=0.687/(aspectratio*0.65*7);
keysize=0.15;

divisions=Math.round(20/size1);
var screenadjustment=768/width;

if(size1>.8)
{
negcenter=Math.round(divisions/2)/divisions;
aposcenter=4/divisions;
zerocenter=(divisions-4)/divisions;
}
else
{
negcenter=Math.round(divisions/2)/divisions;
poscenter=5/divisions;
zerocenter=(divisions-5)/divisions;
}
fontsize1=Math.round(26);  // digital display on graphical page
fontsize2=Math.round(18);  // labels on graphical screen
fontsize3=Math.round(36);  // buttons on graphical screen
fontsize4=Math.round(24);  // dialog font size
fontsize5=Math.round(24);  // settings menu font size
fontsize6=Math.round(18);  // titles on graphical input images
fontsize7=Math.round(32); // buttons on calculator
if(width<768)fontsize3=Math.round(20);
//app.ShowPopup( font1adj );

if(width=>768)xstepmaster=fontsize1*font1adj*aspectratio/.77;
if(width<768)xstepmaster=fontsize1*font1adj*.77/aspectratio;
//if(width==768)xstepmaster=fontsize1*font1adj*Math.pow(width/768,2);

//xstep=xstepmaster*.00016;

//Create a layout with objects vertically centered.
	lay = app.CreateLayout( "linear", "VTop,FillXY" );
	lay.SetBackGradient( color1,color2 );
	lay.SetVisibility("Hide");

		app.AddLayout( lay );	
//	Updateprogress(1);	
	create_digital_input();



//Updateprogress(40);
  
  lay1 = app.CreateLayout( "linear", "VTop,FillX" );
	lay1.SetBackGradient( color1,color2 );
	lay.AddChild( lay1 );
  

	laygraphical = app.CreateLayout( "linear","VTop,FillX" );
	laynumbers=app.CreateLayout("Linear","FillX,Horizontal,Left");
	//lay1.AddChild( laynumbers );	
	lay1.AddChild( laygraphical );
	
	laygrids=app.CreateLayout("Linear","VTop,FillX");
	laygraphical.AddChild( laygrids );
	
	imgnumbersback=app.CreateImage(null,.5,.17);
	imgnumbersback.SetBackColor(color2);
//	laynumbers.AddChild( imgnumbersback );
	
	imgnumbers=app.CreateImage(null,.5,.15);
	imgnumbers.SetAutoUpdate( false );
	imgnumbers.SetMargins(-0.0,0,0,0);
	//imgnumbers.SetBackColor(color2);
	imgnumbers.SetOnTouchDown( imgnumbers_OnTouchDown );
	laynumbers.AddChild( imgnumbers );
	
	imgnumbersback.SetPaintColor("grey");
	imgnumbersback.DrawLine(0,0,1,0);
		imgnumbersback.DrawLine(0,0,0,1);
		imgnumbersback.DrawLine(1,0,1,1);
		imgnumbersback.DrawLine(0,1,1,1);
	
	laybuttons=app.CreateLayout("Linear","Horizontal");
	laybuttons.SetPadding( 0,0,0,0 );
	laygraphical.AddChild(laybuttons);

  imgnumbers.SetTextSize( fontsize1*font1adj,"dip");

  
	//laysettings = app.CreateLayout( "linear","VTop,FillX" );
	
	
	//Updateprogress(60);
	
	
	CreateSettingsMenu();
	
	

  imgbackground = app.CreateImage( null, size1, size2);
	imgbackground.SetMargins( 0.00, 0, 0.0, 0.0 );
  imgbackground.SetBackColor( color3 );
  imgbackground.SetPaintColor( color7 );
  imgbackground.SetLineWidth( linesize);
	laygrids.AddChild( imgbackground );
	
	h1=imgbackground.GetAbsHeight();
  w1=imgbackground.GetAbsWidth();
	
	
	imgbackground.DrawLine( 0,0,1,0 );
	imgbackground.DrawLine( 0,0,0,1 );
  imgbackground.SetLineWidth(1.5*linesize);
	imgbackground.DrawLine( 0,.998,1,.998 );
	imgbackground.DrawLine( .998,0,.998,1);
	imgbackground.SetPaintColor( gridcolour1);
	imgbackground.SetLineWidth(linesize);
  //imgbackground.DrawLine( 0,.5*w1/h1,1,.5 *w1/h1);
	//imgbackground.DrawLine( 0.5,0,0.5,1 );
	imgbackground.SetTextSize( fontsize6*font2adj,"dip");
	imgbackground.DrawText("Unbalanced phasors", 0.61,0.04 );
  
	
	imgback = app.CreateImage( null, size1, size2);
	imgback.SetMargins( 0.00, -size2, 0.0, 0.0 );
  //imgback.SetBackColor( color4 );
//	imgback.SetPaintColor( color6);
	imgback.SetAutoUpdate( false ); 
	imgback.SetLineWidth( linesize );
	laygrids.AddChild( imgback );
	
	imgcurrent = app.CreateImage( null, size1, size2);
	imgcurrent.SetMargins( 0.00, -size2, 0.0, 0.0 );
	imgcurrent.SetTextSize(fontsize6*font2adj*1.5,"dip");
	imgcurrent.SetAutoUpdate( false ); 
	imgcurrent.SetLineWidth( linesize );
	laygrids.AddChild( imgcurrent );
	
	imgfront = app.CreateImage( null, size1, size2);
	imgfront.SetMargins(0, -size2,0.0, 0.0 );
	imgfront.SetPaintColor( colora );
	imgfront.SetAutoUpdate( false ); 
	imgfront.SetLineWidth( 4 );
	imgfront.SetTextSize(fontsize2*font2adj,"dip" );
	laygrids.AddChild( imgfront );
	
	
	imgdraw = app.CreateImage( null, size1, size2 );
	imgdraw.SetMargins(0, -size2,0.0, 0.0 );
	imgdraw.SetAutoUpdate( false ); 
	//imgdraw.SetOnTouch( imgdraw_OnTouch );
	imgdraw.SetOnTouchMove( img_OnTouchMove );
	imgdraw.SetOnTouchDown( img_OnTouchDown );
	laygrids.AddChild( imgdraw );

imgnumbers2back=app.CreateImage(null,.5,.17);
//	imgnumbers2back.SetAutoUpdate( false );
	imgnumbers2back.SetBackColor("#222222");
//	laynumbers.AddChild( imgnumbers2back );
	
	imgnumbers2back.SetPaintColor("grey");
	imgnumbers2back.DrawRectangle(0,0,1,.35);
		imgnumbers2back.DrawLine(0,0,0,1);
		imgnumbers2back.DrawLine(1,0,1,1);
		imgnumbers2back.DrawLine(0,.33,1,.33);
	
	
imgnumbers2=app.CreateImage(null,.5,.15);
imgnumbers2.SetMargins(-0.0,0,0,0);
imgnumbers2.SetPaintColor( colora );
//imgnumbers2.SetBackColor(color2);
imgnumbers2.SetTextSize( fontsize1*font1adj ,"dip");
imgnumbers2.SetAutoUpdate( false );
imgnumbers2.SetOnTouchDown( imgnumbers2_OnTouchDown );
laynumbers.AddChild(imgnumbers2);

  imgseqbackground=app.CreateImage( null,  1,size2/2);
	imgseqbackground.SetMargins( 0.0, 0.01, 0.0, 0.0 );
  imgseqbackground.SetPaintColor( gridcolour2 );
  imgseqbackground.SetBackColor( color9 );
	imgseqbackground.SetTextSize( fontsize2*font2adj,"dip");
  imgseqbackground.SetLineWidth( linesize );
  laygrids.AddChild( imgseqbackground );

  imgseqbackground.SetLineWidth( 1.5*linesize );
  imgseqbackground.SetTextSize( fontsize6*font2adj,"dip");
  imgseqbackground.DrawLine( 0,0,1,0);
  imgseqbackground.DrawText( "Positive",poscenter+.01,0.09);
  imgseqbackground.DrawLine( 0,0,0,1);
  imgseqbackground.DrawText( "Negative",negcenter+.01,0.09);
  imgseqbackground.DrawLine( 0,1,1,1);
  imgseqbackground.DrawText( "Zero",zerocenter+.01,0.09);
  imgseqbackground.DrawLine(1,0,1,1);
      

  imgseqback=app.CreateImage( null,  1,size2/2);
	imgseqback.SetMargins( 0.0, -size2/2, 0.0, 0.0 );
	imgseqback.SetAutoUpdate(false);
  imgseqback.SetPaintColor( color7 );
	imgseqback.SetTextSize( fontsize2*font2adj,"dip");
  imgseqback.SetLineWidth( linesize );
  laygrids.AddChild( imgseqback );
  
 if(coord=="Rectangular")draw_rectangular_background();
   if(coord=="Polar")draw_polar_background();

	
	imgposseq=app.CreateImage( null,1,size2/2);
	imgposseq.SetMargins( 0,-size2/2, 0,0.01 );
	imgposseq.SetAutoUpdate( false ); 
	imgposseq.SetTextSize(fontsize2*font2adj,"dip");
	imgposseq.SetLineWidth( 3 );
	imgposseq.SetOnTouchDown( seq_OnTouchDown );
	imgposseq.SetOnTouchMove( seq_OnTouchMove);
	laygrids.AddChild( imgposseq );
	
	//Updateprogress(80);

	settingsbtn = app.CreateButton("[fa-cog]",0.11,0.07, "FontAwesome" ); 
       settingsbtn.icon ="[fa-cog]" ;
       settingsbtn.SetTextSize( fontsize3*font3adj,"dip");
       settingsbtn.SetOnTouch( showbtnc_ontouch ); 
        laybuttons.AddChild( settingsbtn ); 
        
        faultbtn = app.CreateButton("[fa-flash]", 0.11, 0.07, "FontAwesome" ); 
       faultbtn.icon ="[fa-flash]" ;
       faultbtn.SetTextSize( fontsize3*font3adj,"dip");
       faultbtn.SetOnTouch( OnFault ); 
       laybuttons.AddChild( faultbtn ); 
	
 infobtn = app.CreateButton("[fa-search-minus]", 0.11, 0.07, "FontAwesome" ); 
       infobtn.icon ="[fa-search-minus]" ;
       infobtn.SetTextSize( fontsize3*font3adj,"dip");
        infobtn.SetOnTouch( magnify ); 
       laybuttons.AddChild( infobtn ); 
       
       infobtn2 = app.CreateButton("[fa-search-plus]", 0.11, 0.07, "FontAwesome" ); 
       infobtn2.icon ="[fa-search-plus]" ;
       infobtn2.SetTextSize( fontsize3*font3adj,"dip");
       infobtn2.SetOnTouch( magnify2 ); 
       laybuttons.AddChild( infobtn2 ); 
  
  sumbtn = app.CreateButton("<b>&sum</b>", 0.11, 0.07, "Html" ); 
       sumbtn.icon ="[fa-plus]" ;
       sumbtn.SetTextSize( fontsize3*font3adj,"dip");
       sumbtn.SetOnTouch( showbtnall_ontouch ); 
        laybuttons.AddChild( sumbtn ); 
  
  labelsbtn = app.CreateButton("[fa-tags]", 0.11, 0.07, "FontAwesome" ); 
       labelsbtn.icon ="[fa-tags]" ;
       labelsbtn.SetTextSize( fontsize3*font3adj,"dip");
       labelsbtn.SetOnTouch( labelsbtn_ontouch ); 
        laybuttons.AddChild( labelsbtn ); 

  phasebtn = app.CreateButton("[fa-recycle]", 0.11, 0.07, "FontAwesome" ); 
       phasebtn.icon ="[fa-recycle]" ;
       phasebtn.SetTextSize( fontsize3*font3adj,"dip");
       phasebtn.SetTextColor(colora);
       phasebtn.SetOnTouch( phasebtn_ontouch ); 
        laybuttons.AddChild( phasebtn ); 
	 
   resetbtn = app.CreateButton("[fa-undo]", 0.11, 0.07, "FontAwesome" ); 
       resetbtn.icon ="[fa-undo]" ;
       resetbtn.SetTextSize( fontsize3*font3adj,"dip");
       resetbtn.SetOnTouch( reset ); 
        laybuttons.AddChild( resetbtn ); 
        
       exitbtn = app.CreateButton("[fa-power-off]", 0.11, 0.07, "FontAwesome" ); 
       exitbtn.icon ="[fa-power-off]" ;
       exitbtn.SetTextSize( fontsize3*font3adj,"dip");
       exitbtn.SetOnTouch( exit ); 
       laybuttons.AddChild( exitbtn ); 
	
   //Updateprogress(100); 
 
	
	reset();
	laygrids.AddChild(laynumbers);
	app.AddLayout( setmenu);
  lay.SetVisibility("Show");
   app.HideProgressBar();

}

function imgdraw_OnTouch(ev)
{
app.ShowPopup(ev.touch);
}

function Updateprogress( progress )
{
   app.UpdateProgressBar(progress );
}



function exit()
{
app.ClearValue(  );
app.Exit(  );
}

 function	seq_OnTouchMove(ev)
	{
  if(counter3<3){counter3++;return;}
  counter3=0;
	
	if(seq=="positive")
	{
   
    
  	real1a=(ev.x[0]-poscenter)*divisions/5;
  	imag1a=1-ev.y[0]*2;
  	mag1a=(Math.sqrt(Math.pow(real1a,2)+Math.pow(imag1a,2)));
  	ang1a=Math.atan((imag1a)/(real1a));
    if(real1a<0)ang1a=ang1a-p;
    if(ang1a<-p)ang1a=ang1a+2*p;
    
    real1b=mag1a*Math.cos(-2.094+ang1a);
     real1c=mag1a*Math.cos(2.094+ang1a);
      imag1b=mag1a*Math.sin(-2.094+ang1a);
     imag1c=mag1a*Math.sin(2.094+ang1a);
     }
     if(seq=="negative")
	{
  	real2a=(ev.x[0]-negcenter)*divisions/5;
  	imag2a=1-ev.y[0]*2;
  	mag2a=(Math.sqrt(Math.pow(real2a,2)+Math.pow(imag2a,2)));
  	ang2a=Math.atan((imag2a)/(real2a));
    if(real2a<0)ang2a=ang2a-p;
    if(ang2a<-p)ang2a=ang2a+2*p;
    
    real2b=mag2a*Math.cos(2.094+ang2a);
     real2c=mag2a*Math.cos(-2.094+ang2a);
      imag2b=mag2a*Math.sin(2.094+ang2a);
     imag2c=mag2a*Math.sin(-2.094+ang2a);
     }
     
     if(seq=="zero")
	{
   
  	real0a=(ev.x[0]-zerocenter)*divisions/5;
  	imag0a=1-ev.y[0]*2;
  	mag0a=(Math.sqrt(Math.pow(real0a,2)+Math.pow(imag0a,2)));
  	ang0a=Math.atan((imag0a)/(real0a));
    if(real0a<0)ang0a=ang0a-p;
    if(ang0a<-p)ang0a=ang0a+2*p;
    
    real0b=real0a;
    real0c=real0a;
    imag0b=imag0a;
    imag0c=imag0a;
     }
     
    
   
    imgposseq.Clear();
    imgfront.Clear();
    imgnumbers.Clear();
    imgnumbers2.Clear();                             
    draw_seq_components(); 
     calculate_unbalanced_phasors();
     if(showbtnall)show_components();                   //vector sum if selected
    show_text();                               // show unbalanced phasors text
    show_labels();                          // show labels on main grid if button selected 
    imgfront.Update();
    imgnumbers.Update();
  	imgnumbers2.Update();
  	
  	
  	}
  	
function imgnumbers_OnTouchDown()
{
   maintitle.SetText("Unbalanced Phasors");
   digformat= heading1.GetText();
   
atxt.SetTextColor(colora);
btxt.SetTextColor(colorb);
ctxt.SetTextColor(colorc);
atxt.SetText("A=");
btxt.SetText("B=");
ctxt.SetText("C=");

display1.SetPaintColor( colora );
display2.SetPaintColor( colorb );
display3.SetPaintColor( colorc);
display1back.SetPaintColor( colora );
display2back.SetPaintColor( colorb );
display3back.SetPaintColor( colorc );

   update_digital_input();
 
 
   recycle(digformat);
  
  if(!fullcycle)layDlg.Animate( "SlideFromRight" );
fullcycle=false;
    
}
function update_digital_input()
{
   sign=[1,1,1];
   separator=["","",""];
 
 //   roundfactor=Math.pow(10,decimalplaces);
  // digformat=coord;
//   heading1.SetText(digformat);
   if(coord=="Rectangular")
   {
   if(imaga<0){sign[0]="-"; apart2=imaga*-1}else {apart2=imaga;sign[0]="+"};
   if(imagb<0){sign[1]="-"; bpart2=imagb*-1}else {bpart2=imagb;sign[1]="+"};
   if(imagc<0){sign[2]="-"; cpart2=imagc*-1}else {cpart2=imagc;sign[2]="+"};
   
   separator[0]=sign[0];
   separator[1]=sign[1];
   separator[2]=sign[2];
  
   apart1=reala*scalefactor;
   apart2=apart2*scalefactor;
   bpart1=realb*scalefactor;
   bpart2=bpart2*scalefactor;
   cpart1=realc*scalefactor;
   cpart2=cpart2*scalefactor;
  
   }
   if(coord=="Polar")
   {
   separator[0]="}";
   separator[1]="}";
   separator[2]="}";
   if(angularunits=="Degrees"){conv_fac=180/p;roundfactora=roundfactor/100;}else{conv_fac=1;roundfactora=roundfactor;}
   apart1=maga*scalefactor;
   apart2=anga*conv_fac;
   bpart1=magb*scalefactor;
   bpart2=angb*conv_fac;
   cpart1=magc*scalefactor;
   cpart2=angc*conv_fac;
   }
   populate_digital_input();
   }
   
   
   function populate_digital_input()
   {
   for(i=0;i<4;i++)
   {
   sum[i]="";
   }
  exp=false;
  if(coord=="Polar")
  {
    prefix="";
    suffix="";
  }
  if( coord=="Rectangular" && Math.abs(apart2)<0.0000001 && !zero) sum[1]=Math.round(apart1*roundfactor)/roundfactor+"";
  else sum[1]=Math.round(apart1*roundfactor)/roundfactor+separator[0]+prefix+"("+Math.round(apart2*roundfactor)/roundfactor+suffix+")";
  display1.Clear();
  display=display1;
  displayback=display1back;
  positionx[0]=xstep/3;
  for(i=0;sum[1][i]!=null;i++)
   {
   handle_btns(sum[1][i]);
   }
   length[1]=i;

   positionx[1]=positionx[0];
   
//  display.Update();
  
   if( coord=="Rectangular" && Math.abs(bpart2)<0.0000001 && !zero) sum[2]=Math.round(bpart1*roundfactor)/roundfactor+"";
  else sum[2]=Math.round(bpart1*roundfactor)/roundfactor+separator[1]+prefix+"("+Math.round(bpart2*roundfactor)/roundfactor+suffix+")";
  display2.Clear();
  display=display2;
  positionx[0]=xstep/3;
  for(i=0;sum[2][i]!=null;i++)
   {
   handle_btns(sum[2][i]);
   }
    length[2]=i;
    positionx[2]=positionx[0];

  
   if( coord=="Rectangular" && Math.abs(cpart2)<0.0000001 && !zero) sum[3]=Math.round(cpart1*roundfactor)/roundfactor+"";
  else sum[3]=Math.round(cpart1*roundfactor)/roundfactor+separator[2]+prefix+"("+Math.round(cpart2*roundfactor)/roundfactor+ suffix+")";
  display3.Clear();
  display=display3;
  positionx[0]=xstep/3;
  
  for(i=0;sum[3][i]!=null;i++)
   {
    handle_btns(sum[3][i]);
   }
     length[3]=i;
positionx[3]=positionx[0];
//  display3.Update();
  

  positionx[0]=positionx[1];
  textedit=1;
  displaybackback=display1backback;
  displayback=display1back;
  displayback.SetPaintColor("white");
  display=display1;
length[0]=length[textedit];
cursor=length[textedit];
sum[0]=sum[textedit];
 select_textedit();
 displayback.Clear();
displayback.DrawLine(positionx[1],positiony+.05,positionx[1]+xstep,positiony+.05);
displayback.Update();
  } 
  
 function create_digital_input()
   {
    if( layDlg ) app.DestroyLayout( layDlg );
   //Updateprogress(2);	
    
  layDlg = app.CreateLayout( "Linear", "FillXY" );
	layDlg.SetPadding( 0, 0, 0, 0 ); 
	layDlg.SetBackColor( "darkgrey" );
	layDlg.SetVisibility( "Hide" );
	app.AddLayout( layDlg );
//Updateprogress(3);	
	menubar=app.CreateLayout("linear","FillX,horizontal,center");
  menubar.SetBackColor("#666666");
  layDlg.AddChild( menubar ); 
 // Updateprogress(4);	
  text=app.CreateText("Decimal")
  text.SetMargins(0,0.008,0,0);
  text.SetTextColor("white");
  text.SetTextSize( fontsize4*font4adj*0.9,"dip" );
  menubar.AddChild(text); 
  decimal_places=app.CreateSpinner("0,1,2,3,4,5,6,7,8");
  decimal_places.SetTextSize( fontsize4*font4adj*0.9,"dip" );
  decimal_places.SelectItem(decimalplaces);
  decimal_places.SetMargins(0,0.0,0.05,.0);
  decimal_places.SetOnTouch( setdecimal_OnTouch2);
  menubar.AddChild(decimal_places);
//Updateprogress(5);	
  
	
	heading1=app.CreateSpinner("Rectangular,Polar,Exponential,Trigonometric");
	heading1.SelectItem( digformat);
	heading1.SetTextSize( fontsize4*font4adj*0.9,"dip" );
	//heading1.SetBackColor("#666666");
	heading1.SetTextColor("white");
	heading1.SetOnTouch(recycle);
	menubar.AddChild(heading1);
	//Updateprogress(6);	
	angunits=app.CreateSpinner("Radians,Degrees");
	angunits.SelectItem(angularunits);
	angunits.SetMargins(0.05,0.0,0.05,.0);
	angunits.SetTextSize( fontsize4*font4adj*0.9,"dip" );
	angunits.SetTextColor("white");
//	angunits.SetBackColor("#666666");
  angunits.SetOnTouch( setunit_OnTouch2);
	menubar.AddChild(angunits);
	//Updateprogress(6);	
	lineheading=app.CreateLayout("linear","FillX,horizontal,center");
   layDlg.AddChild( lineheading ); 
   //Updateprogress(7);	
   
  maintitle=app.CreateText("Unbalanced Phasors");
	maintitle.SetTextSize( fontsize4*font4adj*1.3,"dip" );
	maintitle.SetTextColor("white");
	maintitle.SetMargins(0,0.02,0,0.00);
  lineheading.AddChild(maintitle);
	//Updateprogress(8);	
	
     	cyclebtn = app.CreateButton("[fa-recycle]", 0.08, .05, "FontAwesome" ); 
       cyclebtn.icon ="[fa-recycle]" ;
       cyclebtn.SetTextSize( fontsize7*font3adj*.9,"dip");
       cyclebtn.SetTextColor("white");
       cyclebtn.SetBackColor("#666666");
       cyclebtn.SetOnTouch( fullcyclebtn_ontouch ); 
       menubar.AddChild( cyclebtn ); 

   linelay1=app.CreateLayout("linear","FillX,horizontal,center");
   layDlg.AddChild( linelay1 ); 
    //Updateprogress(9);	
    atxt=app.CreateText("A = ");
    atxt.SetTextColor( colora );
    atxt.SetMargins(0,0.04,0,.0);
    atxt.SetTextSize( fontsize1*font1adj*1.3,"dip");
    linelay1.AddChild( atxt ); 
    //Updateprogress(10);	
     display1backback = app.CreateImage( null, 0.8, .08);
	display1backback.SetTextSize( fontsize4*font4adj ,"dip" );
//	display1backback.SetBackColor( "green" );
	display1backback.SetLineWidth( 4 );
	display1backback.SetMargins( 0, 0.02, 0, 0 );
	display1backback.SetAutoUpdate( false );
	linelay1.AddChild( display1backback );
   
  display1back = app.CreateImage( null, 0.8, .08);
	display1back.SetTextSize( fontsize4*font4adj*1.2,"dip"  );
//	display1back.SetBackColor( "yellow" );
	display1back.SetLineWidth( 4 );
	display1back.SetMargins(-0.8, 0.02, 0, 0 );
	display1back.SetAutoUpdate( false );
	linelay1.AddChild( display1back );
	//Updateprogress(11);	

	//Create text control for displaying sum.
  display1 = app.CreateImage( null, 0.8, .08);
	display1.SetTextSize( fontsize4*font4adj,"dip" );
	display1.SetPaintColor( colora );
//	display1.SetBackColor( "lightgrey" );
	display1.SetMargins( -0.8, 0.02, 0, 0.0 );
	display1.SetAutoUpdate( false );
	display1.SetOnTouchDown( display1_OnTouch );
 	linelay1.AddChild( display1 );
	//Updateprogress(12);	
    linelay2=app.CreateLayout("linear","FillX,horizontal,center");
   layDlg.AddChild( linelay2 ); 
   //Updateprogress(13);	 
    btxt=app.CreateText("B = ");
    btxt.SetTextColor( colorb );
    btxt.SetMargins(0,0.04,0,0);
    btxt.SetTextSize( fontsize1*font1adj*1.3,"dip" );
   linelay2.AddChild( btxt ); 
   //Updateprogress(14);	
   display2backback = app.CreateImage( null, 0.8, .08);
	display2backback.SetTextSize( fontsize4*font4adj ,"dip" );
	display2backback.SetBackColor( "darkgreygrey" );
	display2backback.SetLineWidth( 4 );
	display2backback.SetMargins( 0, 0.02, 0, 0 );
	display2backback.SetAutoUpdate( false );
	linelay2.AddChild( display2backback );
   //Updateprogress(15);	
   display2back = app.CreateImage( null, 0.8, .08);
	display2back.SetTextSize( fontsize4*font4adj*1.2,"dip" );
	//display2back.SetBackColor( "darkgreygrey" );
	display2back.SetLineWidth( 4 );
	display2back.SetMargins(-.8, 0.02, 0, 0 );
	display2back.SetAutoUpdate( false );
	linelay2.AddChild( display2back );
	//Updateprogress(16);	

	//Create text control for displaying sum.
  display2 = app.CreateImage( null, 0.8, .08);
	display2.SetTextSize( fontsize4*font4adj,"dip"  );
	display2.SetPaintColor( colorb );
	//display2.SetBackColor( "grey" );
	display2.SetMargins( -0.8, 0.02, 0, 0 );
	display2.SetAutoUpdate( false );
	display2.SetOnTouchDown( display2_OnTouch );
 	linelay2.AddChild( display2 );
    //Create a text edit
//Updateprogress(17);	
    
    linelay3=app.CreateLayout("linear","FillX,horizontal,center");
   layDlg.AddChild( linelay3 ); 
//Updateprogress(18);	    
   ctxt=app.CreateText("C = ");
    ctxt.SetTextColor( colorc );
    ctxt.SetMargins(0,0.04,0,.02);
    ctxt.SetTextSize( fontsize1*font1adj*1.3,"dip" );
   linelay3.AddChild( ctxt ); 
   //Updateprogress(19);	
    display3backback = app.CreateImage( null, 0.8, .08);
	display3backback.SetTextSize( fontsize4*font4adj ,"dip" );
	display3backback.SetBackColor( "darkgreygrey" );
	display3backback.SetLineWidth( 4 );
	display3backback.SetMargins( 0, 0.02, 0, 0 );
	display3backback.SetAutoUpdate( false );
	linelay3.AddChild( display3backback );
   //Updateprogress(20);	
   display3back = app.CreateImage( null, 0.8, .08);
	display3back.SetTextSize( fontsize4*font4adj*1.2,"dip"  );
//	display3back.SetBackColor( "darkgrey" );
	display3back.SetLineWidth( 4 );
	display3back.SetMargins( -0.8, 0.02, 0, 0 );
	display3back.SetAutoUpdate( false );
	linelay3.AddChild( display3back );
	//Updateprogress(21);	

	//Create text control for displaying sum.
  display3 = app.CreateImage( null, 0.8, .08);
	display3.SetTextSize( fontsize4*font4adj,"dip"  );
	display3.SetPaintColor( colorc );
	//display3.SetBackColor( "green" );
	display3.SetMargins( -0.8, 0.02, 0, 0.03 );
	display3.SetAutoUpdate( false );
	display3.SetOnTouchDown( display3_OnTouch );
 	linelay3.AddChild( display3 );
   //Updateprogress(22);	
    
    
  keys = ["log","ln","e1","hyp","inv","rad","sqrt","sqrt3","|x|","sin","cos","tan","x2","x3","phi","csc","sec","cot","a","e","e2","p","(",")",7,8,9, "/","<",">",4,5,6,"*","","",1,2,3,"-","}","","0",".",imagnumbersymbol,"+","=",""];
  if(basic)keys = ["log","ln","e1","hyp","inv","rad","sqrt","sqrt3","|x|","sin","cos","tan","x2","x3","phi","csc","sec","cot","a","e","e2","p","(",")",7,8,9, "/","<",">",4,5,6,"*","","",1,2,3,"-","}","","0",".",imagnumbersymbol,"+","=",""];
  gap=.02;
   
  lay0th = app.CreateLayout( "linear", "Horizontal" );	
	for( i=0; i<6; i++ ) {AddButton2( lay0th, keys[i] );}
  if(!basic)	layDlg.AddChild( lay0th );
	//Updateprogress(23);	
	layhalf = app.CreateLayout( "linear", "Horizontal" );	
	for( i=6; i<12; i++ ) {AddButton2( layhalf, keys[i] );}
	layhalf.SetMargins( 0.0, 0.0, 0.0, 0.00 );
  if(!basic)layDlg.AddChild( layhalf );
	//Updateprogress(24);
	lay3quart = app.CreateLayout( "linear", "Horizontal" );	
	for( i=12; i<18; i++ ) {AddButton2( lay3quart, keys[i] );}
	lay3quart.SetMargins( 0.0, 0.0, 0.0, 0.00 );
  if(!basic)	layDlg.AddChild( lay3quart );
	//Updateprogress(25);
    lay1st = app.CreateLayout( "linear", "Horizontal" );	
	for( i=18; i<24; i++ ) {AddButton2( lay1st, keys[i] );}
	lay1st.SetMargins( 0.0, 0.0, 0.0, 0.02 );
  if(!basic)layDlg.AddChild( lay1st );
//	Updateprogress(26);
	//Create second row of buttons.
	lay2nd = app.CreateLayout( "linear", "Horizontal" );	
	for( i=24; i<30; i++ ) AddButton2( lay2nd, keys[i] );
	layDlg.AddChild( lay2nd );
	//Updateprogress(27);
	
	
	
	//Create third row of buttons.
	lay3rd = app.CreateLayout( "linear", "Horizontal" );	
	for( i=30; i<34;i++ ) AddButton2( lay3rd, keys[i] );
	layDlg.AddChild( lay3rd );
	//Updateprogress(28);
	btnreset=app.CreateButton( "[fa-undo]",keysize,0.062,"FontAwesome,Custom");
	btnreset.SetTextSize( fontsize7*font3adj,"dip");
	btnreset.SetStyle(keycolor5, keycolor5);
	btnreset.SetTextColor(keycolor6);
  //btnreset.SetBackGradient( "white","grey" );
//	btnreset.SetMargins( 0.005, 0.03, 0.005, 0.005 );
  btnreset.SetOnTouch( reset_dig);
  lay3rd.AddChild(btnreset);		
  //Updateprogress(29);
	 btnclear=app.CreateButton( "[fa-trash]",keysize,0.062,"FontAwesome,Custom");
  btnclear.SetStyle(keycolor5, keycolor5);
	btnclear.SetTextSize( fontsize7*font3adj*1,"dip");
	btnclear.SetTextColor(keycolor6);
	//btnclear.SetBackGradient( "white","grey" );
//	btnclear.SetMargins( 0.00, 0.0, 0.00, 0.00 );
  btnclear.SetOnTouch( trash_OnTouch);
  lay3rd.AddChild(btnclear);			
 //Updateprogress(30);
		
	
  

	

	//Create fourth row of buttons.
	lay4th = app.CreateLayout( "linear", "Horizontal" );	
	for( i=36; i<41; i++ ) AddButton2( lay4th, keys[i] );
	layDlg.AddChild( lay4th );
	//Updateprogress(31);
	btnformat=app.CreateButton( "[fa-recycle]",keysize,0.062,"FontAwesome,Custom");
	btnformat.SetTextSize( fontsize7*font3adj,"dip");
	btnformat.SetTextColor(keycolor6);
	btnformat.SetStyle(keycolor5, keycolor5);
	//btnformat.SetMargins( 0.005, 0.03, 0.005, 0.005 );
  btnformat.SetOnTouch( cycle);
//  lay4th.AddChild(btnformat);		
  //Updateprogress(32);
	btnback=app.CreateButton( "\uf060",keysize,0.062,"FontAwesome,Custom");
	btnback.SetTextSize( fontsize7*font3adj,"dip");
	btnback.SetStyle( keycolor5, keycolor5);
	btnback.SetTextColor(keycolor6);
	//btnback.SetBackGradient( "white","grey" );
//	btnback.SetMargins( 0.005, 0.03, 0.005, 0.005 );
  btnback.SetOnTouch( btnback_OnTouch );
  lay4th.AddChild(btnback);		
  //Updateprogress(33);
	
  
	

lay5th = app.CreateLayout( "linear", "Horizontal" );	
	for( i=42; i<47; i++ ) AddButton2( lay5th, keys[i] );
	layDlg.AddChild( lay5th );
	//Updateprogress(34);
enterbtn = app.CreateButton("[fa-line-chart]", keysize, 0.062, "FontAwesome,Custom" ); 
       enterbtn.icon ="[fa-line-chart]" ;
       enterbtn.SetStyle( keycolor5, keycolor5);
 //      enterbtn.SetBackGradient("white","grey");
       enterbtn.SetTextSize( fontsize7*font3adj,"dip");
       enterbtn.SetTextColor(keycolor6);
      // enterbtn.SetMargins(0.005,0.03,0.005,0.005);
       enterbtn.SetOnTouch( unbalenter_ontouch ); 
        lay5th.AddChild( enterbtn );
	//Updateprogress(35); 	
	lay6th = app.CreateLayout( "linear", "Horizontal" );
//	layDlg.AddChild( lay6th );
	
	 
  
   displayback=display1back;
   app.HideKeyboard(  );
    //Show dialog.
    
}

function fullcyclebtn_ontouch()
{
fullcycle=true;
if(maintitle.GetText()=="Unbalanced Phasors"){symphase="a";imgnumbers2_OnTouchDown();cyclebtn.SetTextColor(colora);return;}
if(symphase=="a"){symphase="b";imgnumbers2_OnTouchDown();phasebtn.SetTextColor(colorb);cyclebtn.SetTextColor(colorb);return;}
if(symphase=="b"){symphase="c";imgnumbers2_OnTouchDown();phasebtn.SetTextColor(colorc);cyclebtn.SetTextColor(colorc);return;}
if(symphase=="c"){symphase="a";imgnumbers_OnTouchDown();phasebtn.SetTextColor(colora);cyclebtn.SetTextColor("green");return;}
}

function reset_dig()
{
	reset();current=textedit;deselect_textedit();if(maintitle.GetText()=="Unbalanced Phasors"){update_digital_input();recycle(digformat);}else {update_dig_input();recycle(digformat);}
}

function trash_OnTouch()
 {
 //	btnclear.SetBackGradient( "darkgrey","darkgrey" );
 sum[0] = "";
 display.Clear();
 xstep=xstepmaster*0.0016;
 positionx[0]=xstep/3;
 positiony=0.8;
 exp=false;
 cursor=0;
 length[0]=0;
 displayback.Clear();
 displayback.DrawLine(positionx[0],positiony+0.05,positionx[0]+xstep,positiony+.05);
 display.Update();
 displayback.Update();
 //	btnclear.SetBackGradient( "white","grey" );
 }


function imgnumbers2_OnTouchDown()
{
maintitle.SetText("Symmetrical Components");
digformat=heading1.GetText();

if(symphase=="a")tint=colora;
if(symphase=="b")tint=colorb;
if(symphase=="c")tint=colorc;
atxt.SetTextColor(tint);
btxt.SetTextColor(tint);
ctxt.SetTextColor(tint);
display1.SetPaintColor( tint );
display2.SetPaintColor( tint );
display3.SetPaintColor( tint );
display1back.SetPaintColor( tint );
display2back.SetPaintColor( tint );
display3back.SetPaintColor( tint );
atxt.SetText(symphase+"1=");
btxt.SetText(symphase+"2=");
ctxt.SetText(symphase+"0=");

if(!fullcycle)layDlg.Animate( "SlideFromRight" );
fullcycle=false;

update_dig_input();
recycle(digformat);
}

function cycle()
{
 if(symphase=="a")
   {
   symphase="b";
//   phasebtn.SetTextColor(colorb);
   
   } 
   else  
   {
   if(symphase=="b")
   {
   symphase="c"; 
 //   phasebtn.SetTextColor(colorc);
   }
   else
   {
   if(symphase=="c")symphase="a";
//   phasebtn.SetTextColor(colora);
   }
   }
     
  // show_seq_text();
 //  imgnumbers2.Update();
  
//maintitle.SetText("Symmetrical Components");
digformat=digformat2;
//   heading1.SetText(digformat);

if(symphase=="a")tint=colora;
if(symphase=="b")tint=colorb;
if(symphase=="c")tint=colorc;
atxt.SetTextColor(tint);
btxt.SetTextColor(tint);
ctxt.SetTextColor(tint);
display1.SetPaintColor( tint );
display2.SetPaintColor( tint );
display3.SetPaintColor( tint );
display1back.SetPaintColor( tint );
display2back.SetPaintColor( tint );
display3back.SetPaintColor( tint );
atxt.SetText(symphase+"1=");
btxt.SetText(symphase+"2=");
ctxt.SetText(symphase+"0=");

//layDlg.Animate( "SlideFromRight" );

update_dig_input();
recycle(digformat);
}

function update_dig_input()
{
    
   sign=[1,1,1];
   separator=["","",""];
   
   mult=roundfactor;
   div=roundfactor;
   
   
   
   if(symphase=="a")
   {
   real1=real1a;
   real2=real2a;
   real0=real0a;
   imag1=imag1a;
   imag2=imag2a;
   imag0=imag0a;
    mag1=mag1a;
    ang1=ang1a;
     mag2=mag2a;
    ang2=ang2a;
     mag0=mag0a;
    ang0=ang0a;
   symang=0;
   tint=colora;
   }
   if(symphase=="b")
   {
   real1=real1b;
   real2=real2b;
   real0=real0a;
   imag1=imag1b;
   imag2=imag2b;
   imag0=imag0a;
   mag1=mag1a;
    ang1=ang1a-2*p/3;
     mag2=mag2a;
    ang2=ang2a+2*p/3;
     mag0=mag0a;
    ang0=ang0a;
   symang=-2*p/3;
   tint=colorb;
   }
   if(symphase=="c")
   {
   real1=real1c;
   real2=real2c;
   real0=real0a;
   imag1=imag1c;
   imag2=imag2c;
   imag0=imag0a;
   mag1=mag1a;
    ang1=ang1a+2*p/3;
     mag2=mag2a;
    ang2=ang2a-2*p/3;
     mag0=mag0a;
    ang0=ang0a;
   symang=2*p/3;
   tint=colorc;
   }
   
   if(coord=="Rectangular")
   {
   
   if(imag1<0){sign[0]="-";imag1=imag1*-1; }else {sign[0]="+"};
   if(imag2<0){sign[1]="-"; imag2=imag2*-1;}else {sign[1]="+"};
   if(imag0<0){sign[2]="-"; imag0=imag0*-1;}else {sign[2]="+"};
   
   separator[0]=sign[0];
   separator[1]=sign[1];
   separator[2]=sign[2];
   
   apart1=real1*scalefactor;
   apart2=imag1*scalefactor;
   bpart1=real2*scalefactor;
   bpart2=imag2*scalefactor;
   cpart1=real0*scalefactor;
   cpart2=imag0*scalefactor;
   }
   if(coord=="Polar")
   {
   if(ang1>p)ang1=ang1-2*p;
   if(ang2>p)ang2=ang2-2*p;
   if(ang0>p)ang0=ang0-2*p;
   
   
   separator=["}","}","}"]
   if(angularunits=="Degrees"){suffix ="";conv_fac=180/p;roundfactora=10;}else{conv_fac=1;roundfactora=1000;}
   apart1=Math.round(roundfactor*mag1*scalefactor)/roundfactor;
   apart2=Math.round(roundfactora*(ang1)*conv_fac)/roundfactora;
   bpart1=mag2*scalefactor;
   bpart2=Math.round(roundfactora*(ang2)*conv_fac)/roundfactora;
   cpart1=mag0*scalefactor;
   cpart2=Math.round(roundfactora*(ang0)*conv_fac)/roundfactora;
  }
  populate_digital_input();
  }

function unbalenter_ontouch()
{
//enterbtn.SetBackGradient("darkgrey","darkgrey");
digformat2=digformat;
digformat=coord;
//imgbackground.Clear();
if(textedit==3)sum[3]=sum[0];
if(textedit==2)sum[2]=sum[0];
if(textedit==1)sum[1]=sum[0];
ph=[sum[1],sum[2],sum[3]];


real=[0,0,0];
imag=[0,0,0];


for(x=0;x<3;x++)
{  
  imag[x]="";
  real[x]="";
  
  calculate_result(x);
}
//enterbtn.SetBackGradient("white","grey");
if(errorstate){errorstate=false;return;}
  if(maintitle.GetText()=="Unbalanced Phasors") analyse_unbal_input() ;
if(maintitle.GetText()=="Symmetrical Components") analyse_sym_input() ;
    
}
 
 function calculate_result(x)
 { 
 magnit="";
 angl="";
 k=0;
 abs=false;
 temp=[""];
constant=["(","-","0",".","5","+",imagnumbersymbol,".","8","6","6","0","2","5","4","0","3","8",")"];
for(i=0;sum[x+1][i]!=null;i++)
      {
       if(sum[x+1][i]=="a")
             {
             for(j=0;constant[j-1]!=")";j++)
                     {
                      temp[k]=constant[j];
                      k++;
                     }
             }
       else if(sum[x+1][i]=="A")
             {
              temp[k]="(";
              k++;
              for(j=0;sum[1][j]!=null;j++)
                     {
                      temp[k]=sum[1][j];
                      k++;
                     }
              temp[k]=")";
              k++;
             }
             else if(sum[x+1][i]=="B")
             {
              temp[k]="(";
              k++;
              for(j=0;sum[2][j]!=null;j++)
                     {
                      temp[k]=sum[2][j];
                      k++;
                     }
                      temp[k]=")";
              k++;
             }
             else if(sum[x+1][i]=="C")
             {
              temp[k]="(";
              k++;
              for(j=0;sum[3][j]!=null;j++)
                     {
                      temp[k]=sum[3][j];
                      k++;
                     }
                      temp[k]=")";
              k++;
             }
              else if(sum[x+1][i]=="k")
             {
              temp[k]="(";
              k++;
              temp[k]="1";
              k++;
              temp[k]="/";
              k++;
              temp[k]="s";
              k++; 
             }
             else if(sum[x+1][i]=="m")
             {
             temp[k]="(";
              k++;
              temp[k]="1";
              k++;
              temp[k]="/";
              k++;
              temp[k]="c";
              k++; 
             }
             else if(sum[x+1][i]=="n")
             {
              temp[k]="(";
              k++;
              temp[k]="1";
              k++;
              temp[k]="/";
              k++;
              temp[k]="t";
              k++; 
             }
             else if(sum[x+1][i]=="%")
             {
              temp[k]="(";
              k++;
              temp[k]="1";
              k++;
              temp[k]="/";
              k++;
              temp[k]="h";
              k++; 
             }
             else if(sum[x+1][i]=="@")
             { 
              temp[k]="(";
              k++;
              temp[k]="1";
              k++;
              temp[k]="/";
              k++;
              temp[k]="g";
              k++; 
             }
             else if(sum[x+1][i]=="&")
             { 
              temp[k]="(";
              k++;
              temp[k]="1";
              k++;
              temp[k]="/";
              k++;
              temp[k]="v";
              k++; 
             }
             
            else if(sum[x+1][i]=="|")
             {
              if(!abs)
                  {
                    temp[k]="$";
                    k++;
                    temp[k]="(";
                    k++;
                  }
                  if(abs)
                  {
                    temp[k]=")";
                    k++;
                  }
                  if(abs)abs=false; else abs=true;
             }
        else
            {
            temp[k]=sum[x+1][i];
            k++;
            }
      } 
      sum[x+1]=temp;  

if(sum[x+1]==""||sum[x+1]==null)sum[x+1]="0+0j";
temp=sum[x+1];

if(temp[0]=="*"||temp[0]=="/"){displayback.DrawText("input error 1",positionx[0]+2*xstep,.8);
 displayback.DrawLine(positionx[0],positiony+0.05,positionx[0]+xstep,positiony+.05);
  displayback.Update(); errorstate=true; return;}

 
RPN=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
type=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
stack=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
operator=["(",")","+","-","*","/","q","{","l","f","o","b","#","~",":","?","m","n","x","y","z","u","w","r","s","c","t","h","g","v","!","^","$","}"];
k=0;
m=0;
j=0;
exponent= false;
// substitute and/or add operators to the input string

// and

// build an array that reflects the infix input
for(i=0;i<100;i++)
{
      
   
     if(temp[i]=="^" && temp[i+1]=="^"){i=i+2;}
       if(temp[i]=="^" && temp[i+1]=="^"){i=i+2;}
     if(temp[i]=="+"||temp[i]=="-"||temp[i]=="*"||temp[i]=="/"||temp[i]=="!"||temp[i]=="q"||temp[i]=="{"||temp[i]=="^"||temp[i]=="s"||temp[i]=="c"||temp[i]=="t"||temp[i]=="v"||temp[i]=="g"||temp[i]=="h"||temp[i]=="l"||temp[i]=="f"||temp[i]=="x"||temp[i]=="y"||temp[i]=="z"||temp[i]=="u"||temp[i]=="w"||temp[i]=="r"||temp[i]=="o"||temp[i]=="b"||temp[i]=="#"||temp[i]=="~"||temp[i]==":"||temp[i]=="?"||temp[i]=="$"||temp[i]=="}")
     {
       k++;
       if(k==1&&(temp[0]=="s"||temp[0]=="c"||temp[0]=="t"||temp[0]=="v"||temp[0]=="g"||temp[0]=="h"||temp[0]=="l"||temp[0]=="x"||temp[0]=="y"||temp[0]=="z"||temp[0]=="u"||temp[0]=="w"||temp[0]=="r"||temp[0]=="o"||temp[0]=="b"||temp[0]=="#"||temp[0]=="~"||temp[0]==":"||temp[0]=="?"||temp[0]=="f"||temp[0]=="q"||temp[0]=="{"||temp[0]=="$"))k--;
       if((temp[i-1]=="+"||temp[i-1]=="*"||temp[i-1]=="}"||temp[i-1]=="/"||temp[i-1]=="-"||temp[i-1]=="!"||temp[i-1]=="("||RPN[k-2]=="("||temp[i-1]==")")&&(temp[i]=="s"||temp[i]=="c"||temp[i]=="t"||temp[i]=="v"||temp[i]=="g"||temp[i]=="h"||temp[i]=="l"||temp[i]=="x"||temp[i]=="y"||temp[i]=="z"||temp[i]=="u"||temp[i]=="w"||temp[i]=="r"||temp[i]=="o"||temp[i]=="b"||temp[i]=="#"||temp[i]=="~"||temp[i]==":"||temp[i]=="?"||temp[i]=="f"||temp[i]=="q"||temp[i]=="{"||temp[i]=="$"))k--;
       if((temp[i-1]>0||temp[i-1]==0||temp[i-1]=="."||RPN[k-1]==")")&&(temp[i]=="s"||temp[i]=="c"||temp[i]=="t"||temp[i]=="v"||temp[i]=="g"||temp[i]=="h"||temp[i]=="l"||temp[i]=="x"||temp[i]=="y"||temp[i]=="z"||temp[i]=="u"||temp[i]=="w"||temp[i]=="r"||temp[i]=="o"||temp[i]=="b"||temp[i]=="#"||temp[i]=="~"||temp[i]==":"||temp[i]=="?"||temp[i]=="f"||temp[i]=="q"||temp[i]=="{"||temp[i]=="$")){RPN[k]="*";k++;}
       RPN[k]=temp[i];
       if(k==1&&temp[0]=="-"||temp[0]=="+"){RPN[0]="0";}
      
      if(temp[i]=="-"&&RPN[k-2]=="("&&RPN[k-1]==""){RPN[k-1]="0";type[k-1]="0";}
      if(RPN[k]=="^"&&exponent==false){k++;RPN[k]="(";exponent=true;}
      if(RPN[k]=="^"&&exponent&&temp[i]!=""){RPN[k]=")";exponent=false;k--}
      k++;
      if(temp[i]=="!")k--;
     }
     if(temp[i]=="(")
     {
      if(temp[i-1]>0||temp[i-1]==0||temp[i-1]=="."||temp[i-1]==")")
                {
                 k++;
                 RPN[k]="*";
                  k++;
                  RPN[k]=temp[i];   
                  k++; 
                }
      else
                { 
                 RPN[k]=temp[i]; 
                 k++;   
                }
     }
     if(temp[i]==")")
     {
      if(temp[i+1]>0||temp[i+1]==0||temp[i+1]==".")
                {
                 k++;
                 RPN[k]=")"; 
                 k++;
                 RPN[k]="*";
                 k++;
                }     
         else
                {
                 k++;
                 RPN[k]=temp[i];
                 }
     }
     if(temp[i]==0||temp[i]>0||temp[i]==".")
         {
               RPN[k]+=temp[i];    
         } 
         
     if(temp[i]=="p"||temp[i]=="d"||temp[i]=="e"||temp[i]==imagnumbersymbol)
          {
          
           if(temp[i-1]>0||temp[i-1]==0||temp[i-1]=="."||temp[i-1]=="p"||temp[i-1]=="e"||temp[i-1]=="d"||temp[i-1]==imagnumbersymbol||temp[i-1]==")"||RPN[k]==")")
                {
                 k++;
                 RPN[k]="*";
                  k++;
                  if(temp[i]=="p")RPN[k]=p;   
                  if(temp[i]=="d")RPN[k]=d;   
                  if(temp[i]=="e")RPN[k]=e;    
                  if(temp[i]==imagnumbersymbol)RPN[k]=imagnumbersymbol;    
                  
                }      
          if(temp[i+1]>0||temp[i+1]==0||temp[i+1]=="."||temp[i+1]=="("||temp[i+1]=="s"||temp[i+1]=="c"||temp[i+1]=="t"||temp[i+1]=="v"||temp[i+1]=="g"||temp[i+1]=="h"||temp[i+1]=="l"||temp[i+1]=="x"||temp[i+1]=="y"||temp[i+1]=="z"||temp[i+1]=="u"||temp[i+1]=="w"||temp[i+1]=="r"||temp[i+1]=="o"||temp[i+1]=="b"||temp[i+1]=="#"||temp[i+1]=="~"||temp[i+1]==":"||temp[i+1]=="?"||temp[i+1]=="f"||temp[i+1]=="q"||temp[i+1]=="{"||temp[i+1]=="$")
                {
                 if(temp[i]=="p")RPN[k]=p;  
                   if(temp[i]=="d")RPN[k]=d;  
                 if(temp[i]=="e")RPN[k]=e;    
                 if(temp[i]==imagnumbersymbol)RPN[k]=imagnumbersymbol; 
                 k++;
                 RPN[k]="*";
                 k++;
                if( temp[i+1]=="s"||temp[i+1]=="c"||temp[i+1]=="t"||temp[i+1]=="v"||temp[i+1]=="g"||temp[i+1]=="h"||temp[i+1]=="l"||temp[i+1]=="x"||temp[i+1]=="y"||temp[i+1]=="z"||temp[i+1]=="u"||temp[i+1]=="w"||temp[i+1]=="r"||temp[i+1]=="o"||temp[i+1]=="b"||temp[i+1]=="#"||temp[i+1]=="~"||temp[i+1]==":"||temp[i+1]=="?"||temp[i+1]=="f"||temp[i+1]=="q"||temp[i+1]=="{"||temp[i+1]=="$")k--;
                }     
         else
                {
                if(temp[i]=="p")RPN[k]=p;  
                 if(temp[i]=="d")RPN[k]=d;  
                 if(temp[i]=="e")RPN[k]=e;    
                 if(temp[i]==imagnumbersymbol)RPN[k]=imagnumbersymbol; 
                 }
          
          }        
       
  
}

 

// Build RPN array
exponent=false;
temp=RPN;
if(temp[1]==""){temp[1]="*";temp[2]=1;}
k=0;  //RPN array pointer
m=0; // stack array pointer
halt=false;
precedence=0;
RPN=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];

for(i=0;temp[i]!="";i++)
{
   if(temp[i]=="("){stack[m]=temp[i]; m++;precedence=0;}
   if(temp[i]==")"||temp[i]=="+"||temp[i]=="-"||temp[i]=="*"||temp[i]=="}"||temp[i]=="/"||temp[i]=="!"||temp[i]=="^"||temp[i]=="s"||temp[i]=="c"||temp[i]=="t"||temp[i]=="v"||temp[i]=="g"||temp[i]=="h"||temp[i]=="l"||temp[i]=="x"||temp[i]=="y"||temp[i]=="z"||temp[i]=="u"||temp[i]=="w"||temp[i]=="r"||temp[i]=="o"||temp[i]=="b"||temp[i]=="#"||temp[i]=="~"||temp[i]==":"||temp[i]=="?"||temp[i]=="f"||temp[i]=="q"||temp[i]=="{"||temp[i]=="$")
       {
   
        for(n=0;temp[i]!=operator[n];n++){}
        // { stack[m]=temp[i];}
        
         if(n==precedence)
              {
                  m--;
                  RPN[k]=stack[m];
                 
                  stack[m]=temp[i];
                  m++;
                  k++;
              
                 }
        if(n>precedence)
               {
                 stack[m]=temp[i];
                 m++;
                 precedence=n;
                 
                 }
        if(n<precedence)
               {
                     m--;
                              
                              
                              RPN[k]=stack[m];
                                stack[m]="";//temp[i];
                                k++;
                                
                      
                   
                   if(m>0)
                      {
                      for(precedence=0;stack[m-1]!=operator[precedence];precedence++){}
                      //if(stack[m-1]=="^")precedence=1.5;
                       if(n<precedence)
                            {
                            
                                m--;
                             
                              RPN[k]=stack[m];
                                stack[m]="";
                                k++;
                               
                              }
                             // else  { stack[m]=temp[i];precedence=n;m++;} 
                         }//else  { stack[m]=temp[i];precedence=n;m++;}  
                       if(m>0)
                      {
                      for(precedence=0;stack[m-1]!=operator[precedence];precedence++){}
                     
                      if(n<precedence)
                            {
                            
                              
                                 m--;
                             
                              RPN[k]=stack[m];
                                stack[m]="";
                                k++;
                              
                              }
                               //else  { stack[m]=temp[i];precedence=n;m++;} 
                         }//else  { stack[m]=temp[i];precedence=n;m++;}  
                           if(m>0)
                      {
                      for(precedence=0;stack[m-1]!=operator[precedence];precedence++){}
                      
                      if(n<precedence)
                            {
                            
                               
                                 m--;
                             
                              RPN[k]=stack[m];
                                stack[m]="";
                                k++;
                               
                              }
                             // else  { stack[m]=temp[i];} 
                         }//else  { stack[m]=temp[i];precedence=n;}  
                           if(m>0)
                      {
                      for(precedence=0;stack[m-1]!=operator[precedence];precedence++){}
                     
                       if(n<precedence)
                            {
                             
                                
                                 m--;
                             
                              RPN[k]=stack[m];
                                stack[m]="";
                                k++;
                               
                                
                              }
                             // else  { stack[m]=temp[i];} 
                         }  // else  { stack[m]=temp[i];precedence=n;}  
                            if(m>0)
                      {
                      for(precedence=0;stack[m-1]!=operator[precedence];precedence++){}
                      
                      if(n<precedence)
                            {
                            
                             
                                 m--;
                             
                              RPN[k]=stack[m];
                                stack[m]="";
                                k++;
                               
                                
                              }
                  else  { stack[m]=temp[i];precedence=n;m++;} 
                      } 
                  else  { stack[m]=temp[i];precedence=n;m++;}  
                }
        if(temp[i]==")" && stack[m-1]=="(")
                {
                 m--;
                 stack[m]="";
                 //if(stack[m-1]=="^"){RPN[k]="^";k++;m--;stack[m]="";}
                 if(m==0)precedence=0;
                 else { for(precedence=0;stack[m-1]!=operator[precedence];precedence++){}}
                 //app.Exit(  );
                }       
                 if( temp[i]==")" && stack[m-2]=="("  )
                {
                 m--;
                 m--;
                 stack[m]="";
                 RPN[k]=1;
                 type[k]="0";
                 k++;
                 RPN[k]="*";
                 k++;
                 if(m==0)precedence=0;
                 else { for(precedence=0;stack[m-1]!=operator[precedence];precedence++){}}
               //  app.Exit(  );
                }       
         
       }
       
   if(temp[i]>0||temp[i]==0) 
      {
      RPN[k]=temp[i];
      type[k]="0";
      k++;
      }
   if(temp[i]==imagnumbersymbol) 
      {
      RPN[k]="1";
      type[k]="1";
      k++;
      }
 

      if(temp[i]==")"||temp[i]=="+"||temp[i]=="-"||temp[i]=="*"||temp[i]=="}"||temp[i]=="/"||temp[i]=="!"||temp[i]=="^"||temp[i]=="s"||temp[i]=="c"||temp[i]=="t"||temp[i]=="v"||temp[i]=="g"||temp[i]=="h"||temp[i]=="l"||temp[i]=="x"||temp[i]=="y"||temp[i]=="z"||temp[i]=="u"||temp[i]=="w"||temp[i]=="r"||temp[i]=="o"||temp[i]=="b"||temp[i]=="#"||temp[i]=="~"||temp[i]==":"||temp[i]=="?"||temp[i]=="f"||temp[i]=="q"||temp[i]=="{"||temp[i]=="$"||temp[i]=="("||temp[i]==imagnumbersymbol||temp[i]=="e"||temp[i]=="p"||temp[i]=="d"||temp[i]==0||temp[i]=="."||temp[i]>0){}
      else {displayback.DrawText("input error 2",positionx[0]+2*xstep,.8);
 displayback.DrawLine(positionx[0],positiony+0.05,positionx[0]+xstep,positiony+.05);
  displayback.Update(); errorstate=true; return;}
  
}



// pop remaining operators off the stack and onto the RPN output
for(n=0;stack[n]!="";n++){}
for(m=n-1;m>-1;m--)
    {
           if(stack[m]!=")"&& stack[m]!="("){RPN[k]=stack[m];k++;}
          
    }
    
//display2.Clear();
//display2.DrawText(RPN,0,.8);
//display2.Update();       

k=0;
// populate complex number array and put a complex array pointer to the number in RPN
var complex=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
for(w=0;RPN[w]!="";w++)
{
     if(RPN[w]=="("||RPN[w]==")")
     {
        for(i=w;RPN[i]!="";i++)
             {
               RPN[i]=RPN[i+1];
             }
     }
     if(RPN[w]>0||RPN[w]==0)
     {
       complex[k]=["0","0"];
       complex[k][type[w]]=RPN[w];
       RPN[w]=k;
       k++;
     }
}	



// Start evaluating RPN	
temp=RPN;
RPN=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];

result="error";
type_result="unknown";
denominator="0";

for(z=0;z<100;z++)
{
//find first operator in RPN array
halt=false;
for(s=0;!halt;s++)
{
  if(temp[s]=="+"||temp[s]=="-"||temp[s]=="*"||temp[s]=="}"||temp[s]=="/"||temp[s]=="!"||temp[s]=="^"||temp[s]=="s"||temp[s]=="c"||temp[s]=="t"||temp[s]=="v"||temp[s]=="g"||temp[s]=="h"||temp[s]=="l"||temp[s]=="x"||temp[s]=="y"||temp[s]=="z"||temp[s]=="u"||temp[s]=="w"||temp[s]=="r"||temp[s]=="o"||temp[s]=="b"||temp[s]=="#"||temp[s]=="~"||temp[s]==":"||temp[s]=="?"||temp[s]=="f"||temp[s]=="q"||temp[s]=="{"||temp[s]=="$")halt=true;
  RPN[s]=temp[s];
  if(s>80){displayback.DrawText("input error 3",positionx[0]+2*xstep,.8);
 displayback.DrawLine(positionx[0],positiony+0.05,positionx[0]+xstep,positiony+.05);
  displayback.Update();errorstate=true;return;}
}

s--;

//************** Perform complex number calculation *********************************************
// catch input errors
if(s-1<0){displayback.DrawText("input error 4",positionx[0]+2*xstep,.8);
 displayback.DrawLine(positionx[0],positiony+0.05,positionx[0]+xstep,positiony+.05);
  displayback.Update();errorstate=true;return;}
  
if(s-2<0&&(RPN[s]=="+"||RPN[s]=="-"||RPN[s]=="*"||RPN[s]=="/"||RPN[s]=="^"||RPN[s]=="}"))
       {
         displayback.DrawText("input error 5",positionx[0]+2*xstep,.8);
         displayback.DrawLine(positionx[0],positiony+0.05,positionx[0]+xstep,positiony+.05);
         displayback.Update();
         errorstate=true;return;
         }
  
  if(RPN[s]=="!")
{

answer=1;
 for(i=0;i<complex[s-1][0];i++)
        {
		         answer = answer*(complex[s-1][0]-i);
        }
  real_result=answer;
  imag_result=0;
}

if(RPN[s]=="}")
{


  if(angularunits=="Degrees")complex[s-1][0]=complex[s-1][0]*p/180;
  real_result=complex[s-2][0]*Math.cos(complex[s-1][0]);
  imag_result=complex[s-2][0]*Math.sin(complex[s-1][0]); 
 
}

if(RPN[s]=="+"||RPN[s]=="-")
{
real_result="("+complex[temp[s-2]][0]+")"+RPN[s]+"("+complex[temp[s-1]][0]+")";
imag_result="("+complex[temp[s-2]][1]+")"+RPN[s]+"("+complex[temp[s-1]][1]+")";
}

if(RPN[s]=="*")
{
real_result="("+complex[temp[s-2]][0]+")"+RPN[s]+"("+complex[temp[s-1]][0]+")-("+complex[temp[s-2]][1]+")"+RPN[s]+"("+complex[temp[s-1]][1]+")";
imag_result="("+complex[temp[s-2]][1]+")"+RPN[s]+"("+complex[temp[s-1]][0]+")+("+complex[temp[s-2]][0]+")"+RPN[s]+"("+complex[temp[s-1]][1]+")";
}

if(RPN[s]=="/") //multiply by conjugate of denominator
{
       //multiply numerator by conjugate of denominator
      real_numerator="("+complex[temp[s-2]][0]+")*("+complex[temp[s-1]][0]+")-("+complex[temp[s-2]][1]+")*("+complex[temp[s-1]][1]+")*(-1)";
      try {
	         	//Evaluate sum (and catch errors).
		         real_numerator = eval( real_numerator) ;
           	}
	   catch(e) { real_numerator= "Error" }
     imag_numerator="("+complex[temp[s-2]][1]+")*("+complex[temp[s-1]][0]+")+("+complex[temp[s-2]][0]+")*("+complex[temp[s-1]][1]+")*(-1)";
     try {
		       //Evaluate sum (and catch errors).
	        	imag_numerator = eval( imag_numerator) ;
	          }
	   catch(e) { imag_numerator= "Error" }
	   
   	denominator="("+complex[temp[s-1]][0]+")*("+complex[temp[s-1]][0]+")-("+complex[temp[s-1]][1]+")*("+complex[temp[s-1]][1]+")*(-1)";
	       try {  
	         		
	         	denominator = eval( denominator) ;
           	}
	    catch(e) { denominator = "Error" }
      real_result=real_numerator+"/"+denominator;
      imag_result=imag_numerator+"/"+denominator;
  
}

if(RPN[s]=="^")
   {
   // redo all this using polar/exponetial form. Then just need to multiply exponents
 
  //Calculate the number to the power of the real part of the exponent 
   magnitude=Math.sqrt(Math.pow(complex[temp[s-2]][0],2)+Math.pow(complex[temp[s-2]][1],2));
   if(complex[temp[s-2]][0]==0){angle=p/2;if(complex[s-2][1]<0)angle=-p/2;}
    else angle=Math.atan(complex[temp[s-2]][1]/complex[temp[s-2]][0]);
   if(complex[temp[s-2]][0]<0)angle=angle+p;
   
   
   magnitude2=Math.pow(magnitude,complex[temp[s-1]][0]);
  // angle=angle*complex[temp[s-1]][0];
  
   real_result=magnitude2*Math.cos(angle*complex[temp[s-1]][0]);//+Math.log(magnitude2))*Math.pow(e,complex[temp[s-1]][1]*angle*-1);//*Math.cos(complex[temp[s-1]][1]*Math.log(magnitude))-magnitude2*Math.pow(e,complex[temp[s-1]][1]*angle)*Math.sin((complex[temp[s-1]][1])*Math.log(magnitude))*Math.sin(angle*complex[temp[s-1]][0]);
   imag_result=magnitude2*Math.sin(angle*complex[temp[s-1]][0]);//+Math.log(magnitude2))*Math.pow(e,complex[temp[s-1]][1]*angle*-1);//*Math.cos(angle*complex[temp[s-1]][0])+magnitude2*Math.pow(e,complex[temp[s-1]][1]*angle)*Math.sin((complex[temp[s-1]][0])*angle)*Math.cos(angle*complex[temp[s-1]][1]*Math.log(magnitude));

   real_result2=Math.pow(e,complex[temp[s-1]][1]*angle*-1)*Math.cos(Math.log(magnitude)*complex[temp[s-1]][1]);
   imag_result2=Math.pow(e,complex[temp[s-1]][1]*angle*-1)*Math.sin(Math.log(magnitude)*complex[temp[s-1]][1]);
  
 
		
  real_result3=real_result*real_result2- imag_result*imag_result2;
  imag_result3=imag_result*real_result2+ real_result*imag_result2;
  real_result=real_result3;
  imag_result=imag_result3; 
 
  
    }
	try {
		//Evaluate sum (and catch errors).
		real_result = eval( real_result) ;
	}
	catch(e) { real_result = "Error" }
	
//	if(real_result<0){signr="-";real_result=-1*real_result;}
	try {
		//Evaluate sum (and catch errors).
		imag_result = eval( imag_result ) ;
	}
	catch(e) { imag_result = "Error" }


if(RPN[s]=="!"||RPN[s]=="s"||RPN[s]=="c"||RPN[s]=="t"||RPN[s]=="v"||RPN[s]=="g"||RPN[s]=="h"||RPN[s]=="l"||RPN[s]=="f"||RPN[s]=="x"||RPN[s]=="y"||RPN[s]=="z"||RPN[s]=="u"||RPN[s]=="w"||RPN[s]=="r"||RPN[s]=="q"||RPN[s]=="{"||RPN[s]=="o"||RPN[s]=="b"||RPN[s]=="#"||RPN[s]=="~"||RPN[s]==":"||RPN[s]=="?"||RPN[s]=="$")
       {
       if(angularunits=="Degrees"&&complex[s-1][1]==0&&RPN[s]!="q"&&RPN[s]!="{"&&RPN[s]!="x"&&RPN[s]!="y"&&RPN[s]!="z"&&RPN[s]!="w"&&RPN[s]!="u"&&RPN[s]!="r"&&RPN[s]!="o"&&RPN[s]!="b"&&RPN[s]!="$"&&RPN[s]!="l"&&RPN[s]!="f"&&RPN[s]!="#"&&RPN[s]!="~"&&RPN[s]!=":"&&RPN[s]!="?")complex[s-1][0]=complex[s-1][0]*p/180;
		   if(RPN[s]=="s")
		                  {
		                   real_result =(Math.pow(e,complex[s-1][1])+Math.pow(e,-complex[s-1][1]))*( Math.sin(complex[s-1][0]))/2; 
		                   imag_result=(Math.pow(e,complex[s-1][1])-Math.pow(e,-complex[s-1][1]))*( Math.cos(complex[s-1][0]))/2;
		                  }
		   if(RPN[s]=="c"){real_result =(Math.pow(e,complex[s-1][1])+Math.pow(e,-complex[s-1][1]))*( Math.cos(complex[s-1][0]))/2; imag_result=-(Math.pow(e,complex[s-1][1])-Math.pow(e,-complex[s-1][1]))*( Math.sin(complex[s-1][0]))/2;}
		   if(RPN[s]=="t"){real_result = Math.sin(2*complex[s-1][0])/(Math.cos(2*complex[s-1][0])+(Math.pow(e,2*complex[s-1][1])+Math.pow(e,-2*complex[s-1][1]))/2); imag_result = ( Math.pow(e,2*complex[s-1][1])/2-Math.pow(e,-2*complex[s-1][1])/2 )/(Math.cos(2*complex[s-1][0])+(Math.pow(e,2*complex[s-1][1])+Math.pow(e,-2*complex[s-1][1]))/2); }
		   if(RPN[s]=="h"||RPN[s]=="v"){real_result =(Math.pow(e,complex[s-1][0])-Math.pow(e,-complex[s-1][0]))/2*Math.cos(complex[s-1][1]); imag_result=(Math.pow(e,complex[s-1][0])+Math.pow(e,-complex[s-1][0]))/2*( Math.sin(complex[s-1][1]));reals=real_result;imags=imag_result;}
	   	if(RPN[s]=="g"||RPN[s]=="v"){real_result =(Math.pow(e,complex[s-1][0])+Math.pow(e,-complex[s-1][0]))/2*Math.cos(complex[s-1][1]); imag_result=(Math.pow(e,complex[s-1][0])-Math.pow(e,-complex[s-1][0]))/2*( Math.sin(complex[s-1][1]));realc=real_result;imagc=imag_result;}
		   if(RPN[s]=="v")
		                   {
		                   mag=Math.sqrt(Math.pow(reals,2)+Math.pow(imags,2))/Math.sqrt(Math.pow(realc,2)+Math.pow(imagc,2));
		                  
		                    if(reals==0){ang1=p/2;if(imags<0)ang1=-p/2;}
                       else ang1=Math.atan(imags/reals);
		                   if(reals<0)ang1=ang1-p;
		                   if(ang1<-p+0.000000001)ang1=ang1+2*p;
		                    if(realc==0){ang2=p/2;if(imagc<0)ang2=-p/2;}
                       else ang2=Math.atan(imagc/realc);
		                   if(realc<0)ang2=ang2-p;
		                   if(ang2<-p)ang2=ang2+2*p;
		                   ang=ang1-ang2;
		                   real_result=mag*Math.cos(ang);
		                   imag_result=mag*Math.sin(ang);
		                   }
		 if(RPN[s]=="l"||RPN[s]=="f")
		   {
		    //  if(angularunits=="Degrees"&&complex[s-1][1]==0)complex[s-1][0]=complex[s-1][0]*180/p;
		      magnitude=Math.sqrt(Math.pow(complex[s-1][0],2)+Math.pow(complex[s-1][1],2));
		      if(complex[s-1][0]==0)
		      {
		           if(complex[s-1][1]<0)angle=-p/2;
		           else angle=p/2;
		       }
		       else angle=Math.atan(complex[s-1][1]/complex[s-1][0]);
		       if(complex[s-1][0]<0 && complex[s-1][1] >=0)angle=angle+p;
		       if(complex[s-1][0]<0 && complex[s-1][1] <0)angle=angle-p;
		      // if(complex[s-1][0]<0)angle=-angle;
		      real_result = Math.log( magnitude);
          imag_result=angle;
       }
        if(RPN[s]=="f")
		   {
		      real_result = real_result/Math.log(10);
          imag_result=imag_result/Math.log(10);
       }
        if(RPN[s]=="o"||RPN[s]=="b"||RPN[s]=="#"||RPN[s]=="~"||RPN[s]==":"||RPN[s]=="?")
          {
         magnitude=Math.sqrt(Math.pow(complex[temp[s-1]][0],2)+Math.pow(complex[temp[s-1]][1],2));
         if(complex[s-1][0]==0){angle=p/2;if(complex[s-1][1]<0)angle=-p/2;}
         else angle=Math.atan(complex[s-1][1]/complex[s-1][0]);
         if(complex[s-1][0]<0)angle=angle+p;
           if(angle>p)angle=angle-2*p;
         // reciprocol of x and convert back to rectangular format
         magnitude=1/magnitude;
         angle=0-angle;
        interimr=(magnitude*Math.cos(angle));
        interimi=(magnitude*Math.sin(angle));
        
         complex[s-1][0] =interimr;
         complex[s-1][1]=interimi;
         
		    
          }
         
         if(RPN[s]=="x"||RPN[s]=="y"||RPN[s]=="o"||RPN[s]=="b")
		   {
		  
		      interimr=Math.pow(complex[s-1][0],2)-Math.pow(complex[s-1][1],2);
		      interimi=-2*complex[s-1][0]*complex[s-1][1];
		      interimr=1-interimr;
		      
		      magnitude=Math.sqrt(Math.pow(interimr,2)+Math.pow(interimi,2));
          if(interimr==0){angle=p/2;if(interimi<0)angle=-p/2;}
          else angle=Math.atan(interimi/interimr);
          if(interimr<0)angle=angle+p;
           if(angle>p)angle=angle-2*p;
          magnitude=Math.sqrt(magnitude);
          angle=angle/2;
          
           
          
          interimr=magnitude*Math.cos(angle)-complex[s-1][1];
          interimi=magnitude*Math.sin(angle)+Math.round(complex[s-1][0]*1000000000)/1000000000;
          
           magnitude=Math.sqrt(Math.pow(interimr,2)+Math.pow(interimi,2));
          if(interimr==0){angle=p/2;if(interimi<0)angle=-p/2;}
          else angle=Math.atan(interimi/interimr);
          if(interimr<0)angle=angle+p;
          if(angle>p)angle=angle-2*p;
          interimi=-Math.log( magnitude);
          interimr=angle;
          
          if(angularunits=="Degrees"&&RPN[s]!="y"&&RPN[s]!="b"&&complex[s-1][1]==0)interimr=interimr*180/p;
		      real_result =interimr;
          imag_result=interimi;
       }
             if( RPN[s]=="y"||RPN[s]=="b")
             {
                   real_result=-1*real_result+p/2;
              imag_result=-1*imag_result;
              if(angularunits=="Degrees"&&complex[s-1][1]==0)real_result=real_result*180/p;
		     
              }   
        if(RPN[s]=="z"||RPN[s]=="#")
 		   {
		      interimr1=0-Math.round(complex[s-1][0]*1000000000)/1000000000;
		      interimi1=1+Math.round(complex[s-1][1]*1000000000)/1000000000;
		      
		      magnitude1=Math.sqrt(Math.pow(interimr1,2)+Math.pow(interimi1,2));
          if(interimr1==0){angle1=p/2;if(interimi1<0)angle1=-p/2;}
          else angle1=Math.atan(interimi1/interimr1);
          if(interimr1<0)angle1=angle1-p;
          if(angle1<-p+0.000000001)angle1=angle1+2*p;
          
          interimr1=magnitude1;
          interimi1=angle1;
          
         
          interimr2=0+Math.round(complex[s-1][0]*1000000000)/1000000000;
		      interimi2=1-Math.round(complex[s-1][1]*1000000000)/1000000000;
		      
		      magnitude2=Math.sqrt(Math.pow(interimr2,2)+Math.pow(interimi2,2));
          if(interimr2==0){angle2=p/2;if(interimi2<0)angle2=-p/2;}
          else angle2=Math.asin(interimi2/magnitude2);
         
          
          if(interimr2<0)angle2=angle2-p;
          if(angle2<-p+0.000000001)angle2=angle2+2*p;
          
         
          magnitude=Math.log(magnitude1/magnitude2);
          angle=angle1-angle2;
   
         
          
          
          real_result=angle/2;
          imag_result=magnitude/2;
          if(imag_result=="Infinity")
          {
          // display.Clear();
          display.DrawText("="+imag_result,positionx[0],.8);
          display.Update(); 
          return;
          }
          if(angularunits=="Degrees"&&complex[s-1][1]==0)real_result=real_result*180/p;
		     
       }
       
      if(RPN[s]=="u"||RPN[s]=="~")
		   {
		    interimr=Math.pow(complex[s-1][0],2)-Math.pow(complex[s-1][1],2)+1;
		    interimi=2*complex[s-1][0]*complex[s-1][1];
		 
		    magnitude=Math.sqrt(Math.pow(interimr,2)+Math.pow(interimi,2));
        if(interimr==0){angle=p/2;if(interimi<0)angle=-p/2;}
        else angle=Math.atan(interimi/interimr);
        if(interimr<0)angle=angle-p;
          if(angle<-p+.000000001)angle=angle+2*p;
      
        magnitude=Math.sqrt(magnitude);
        angle=angle/2;
        interimr=(magnitude*Math.cos(angle))+Math.round(complex[s-1][0]*roundfactor)/roundfactor;
        interimi=(magnitude*Math.sin(angle))+Math.round(complex[s-1][1]*roundfactor)/roundfactor;
        magnitude=Math.sqrt(Math.pow(interimr,2)+Math.pow(interimi,2));
        if(interimr==0){angle=p/2;if(interimi<0)angle=-p/2;}
        else angle=Math.atan(interimi/interimr);
        if(interimr<0)angle=angle-p;
          if(angle<-p+0.000000001)angle=angle+2*p;
        interimr= Math.log( magnitude);
        interimi=angle;
         
		      real_result =interimr;
          imag_result=interimi; 
          if(angularunits=="Degrees"&&complex[s-1][1]==0)real_result=real_result*180/p;
		      
       }
       if(RPN[s]=="w"||RPN[s]==":")//asech(-i) gives incorrect answer
		   {
		   
		    interimr=Math.pow(complex[s-1][0],2)-Math.pow(complex[s-1][1],2)-1;
		    interimi=2*complex[s-1][0]*complex[s-1][1];
		   
		    magnitude=Math.sqrt(Math.pow(interimr,2)+Math.pow(interimi,2));
        if(interimr==0){angle=p/2;if(interimi<0)angle=-p/2;}
        else angle=Math.atan(interimi/interimr);
        if(interimr<0)angle=angle-p;
        if(angle<-p+.000000001)angle=angle+2*p;
         
        magnitude=Math.sqrt(magnitude);
        angle=angle/2;
       
        interimr=(magnitude*Math.cos(angle))+Math.round(complex[s-1][0]*roundfactor)/roundfactor;
        interimi=(magnitude*Math.sin(angle))+Math.round(complex[s-1][1]*roundfactor)/roundfactor;
         
		    
         magnitude=Math.sqrt(Math.pow(interimr,2)+Math.pow(interimi,2));
        if(interimr==0){angle=p/2;if(interimi<0)angle=-p/2;}
        else angle=Math.atan(interimi/interimr);
        if(interimr<0)angle=angle-p;
          if(angle<-p+0.000000001)angle=angle+2*p;
        
        interimr= Math.log( magnitude);
        interimi=angle;
        
		      real_result =interimr;
          imag_result=interimi; 
          if(complex[s-1][1]<0)
              {
               real_result =-interimr;
               imag_result=-interimi; 
               }
               
               
           if(angularunits=="Degrees"&&complex[s-1][1]==0)real_result=real_result*180/p;
		      
          }
          
           if(RPN[s]=="r"||RPN[s]=="?") // needs work?
		   {
		    interimr1=1*complex[s-1][0]+1;
		    interimi1=complex[s-1][1];
		
		    magnitude1=Math.sqrt(Math.pow(interimr1,2)+Math.pow(interimi1,2));
        if(interimr1==0){angle1=p/2;if(interimi1<0)angle1=-p/2;}
        else angle1=Math.atan(interimi1/interimr1);
        if(interimr1<0)angle1=angle1-p;
        if(angle1<-p+0.000000001)angle1=angle1+2*p;
    
        interimr2=1-complex[s-1][0]
		    interimi2=0-complex[s-1][1];
		    magnitude2=Math.sqrt(Math.pow(interimr2,2)+Math.pow(interimi2,2));
        if(interimr2==0){angle2=p/2;if(interimi2<0)angle2=-p/2;}
        else angle2=Math.atan(interimi2/interimr2);
        if(interimr2<0)angle2=angle2-p;
        if(angle2<-p+0.000000001)angle2=angle2+2*p;
        
        interimr=Math.log(magnitude1/magnitude2)/2;
        interimi=(angle1-angle2)/2;
        
             
		      real_result =interimr;
          imag_result=interimi; 
          if(angularunits=="Degrees"&&complex[s-1][1]==0)real_result=real_result*180/p;
		   
          }
          
         
          if(RPN[s]=="q"||RPN[s]=="{")
		   {
		    magnitude=Math.sqrt(Math.pow(complex[temp[s-1]][0],2)+Math.pow(complex[temp[s-1]][1],2));
        if(complex[temp[s-1]][0]==0){angle=p/2;if(temp[s-1][1]<0)angle=-p/2;}
         else angle=Math.atan(complex[temp[s-1]][1]/complex[temp[s-1]][0]);
         if(complex[temp[s-1]][0]<0)angle=angle+p;
   
         if(RPN[s]=="q")
         {
         magnitude=Math.pow(magnitude,0.5);
         angle=angle/2;
         }
         
           if(RPN[s]=="{")
         {
         magnitude=Math.pow(magnitude,1/3);
         angle=angle/3;
         }
  
   real_result=magnitude*Math.cos(angle);
      imag_result=magnitude*Math.sin(angle);
		      
          }
          
           if(RPN[s]=="$")
		     { 
		      if(complex[s-1][1]=="")complex[s-1][1]=0;
		      if(complex[s-1][0]=="")complex[s-1][0]=0;
		      real_result=Math.sqrt(Math.pow(complex[s-1][0],2)+Math.pow(complex[s-1][1],2));
          imag_result=0;
          
          }
      
       complex[s-1]=[real_result,imag_result];
       
       }
       
    else  complex[s-2]=[real_result,imag_result];



//*************************************************************

// restack RPN

if(RPN[s]=="!"||RPN[s]=="s"||RPN[s]=="c"||RPN[s]=="t"||RPN[s]=="v"||RPN[s]=="g"||RPN[s]=="h"||RPN[s]=="l"||RPN[s]=="f"||RPN[s]=="x"||RPN[s]=="y"||RPN[s]=="z"||RPN[s]=="u"||RPN[s]=="w"||RPN[s]=="r"||RPN[s]=="o"||RPN[s]=="b"||RPN[s]=="#"||RPN[s]=="~"||RPN[s]==":"||RPN[s]=="?"||RPN[s]=="q"||RPN[s]=="{"||RPN[s]=="$")
{
RPN[s-1]=s-1;
array_no=s;

for(array_no=s;array_no<100;array_no++)
{
if(temp[array_no+1]>0)RPN[array_no]=temp[array_no+1];
else RPN[array_no]=temp[array_no+1];
}

}
else
{
RPN[s-2]=s-2;
array_no=s-1;

for(array_no=s-1;array_no<100;array_no++)
{
if(temp[array_no+2]>0)RPN[array_no]=temp[array_no+2]-1;
else RPN[array_no]=temp[array_no+2];
if(complex[array_no+1]!=null) complex[array_no]=complex[array_no+1]
}

}
temp=RPN;
RPN=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
if(temp[1]=="")z=101;
}

try {
		//Evaluate sum (and catch errors).
		complex[0][0] = eval( complex[0][0]);
	}
	catch(e) { real_result = "Error" }
	
//	if(real_result<0){signr="-";real_result=-1*real_result;}
	try {
		//Evaluate sum (and catch errors).
		complex[0][1]= eval( complex[0][1] );
	}
	catch(e) { imag_result = "Error" }
	
if(digformat=="Rectangular")
{
real[x]=complex[0][0];
imag[x]=complex[0][1];
   
complex[0][0]=Math.round(complex[0][0]*roundfactor)/roundfactor;
complex[0][1]=Math.round(complex[0][1]*roundfactor)/roundfactor;
if(complex[0][1]<0)
      {
      operator="-";imagtext=complex[0][1]*-1;
      }
      else {operator = "+";imagtext=complex[0][1];}
      if(complex[0][0]==0 && complex[0][1] !=0)
      {
            realtext="";
           if(operator=="+")operator="";
       }
 else realtext=complex[0][0];
      if(imagtext==1)imagtext="";
  
if(imagpresuf=="prefix")
            {
             text=realtext+operator+imagnumbersymbol+imagtext;
             if(Math.abs(complex[0][1])==0 && !zero)text=realtext+"";
            
            }
else
            {
             text=realtext+operator+imagtext+imagnumbersymbol;
             if(Math.abs(complex[0][1])==0 && !zero)text=realtext+"";
             }


}
if(changeunits)
    {
    if(angularunits=="Radians")angularunits="Degrees";
    else angularunits="Radians";
    changeunits=false;
    }
if(digformat=="Polar"||digformat=="Exponential"||digformat=="Trigonometric")
     {
     magnitude=Math.sqrt(Math.pow(complex[0][0],2)+Math.pow(complex[0][1],2));
		 real[x]=magnitude;  
		 magnitude=Math.round(magnitude*roundfactor)/roundfactor;
		 
		         if(complex[0][0]==0)
		      {
		           if(complex[0][1]<0)angle=-p/2;
		           else angle=p/2;
		       }
		       
		       else angle=Math.atan(complex[0][1]/complex[0][0]);
		       if(complex[0][0]<0)angle=angle+p;
		       if(angle>p+.001)angle=angle-2*p;
		       if(angularunits=="Degrees")angle=angle*180/p;
		        imag[x]=angle;   
		       angle=Math.round(angle*roundfactor)/roundfactor;
		       if(angularunits=="Degrees")angle=Math.round(angle*10)/10;
		       if(magnitude==0)angle=0;
		       text=magnitude+"}"+angle;
		       if(angle<0)text=magnitude+"}"+"("+angle+")";
		       if(digformat=="Exponential")
		         {
		         if(imagpresuf=="prefix"){symbol1=imagnumbersymbol;symbol2="";}else{symbol2=imagnumbersymbol;symbol1="";}
		         if(angularunits=="Degrees")angle=Math.round(angle*p/180*roundfactor)/roundfactor;
		         text=magnitude+"e^"+symbol1+"("+angle+")"+symbol2;
		         if (magnitude==1)    text="e^"+symbol1+"("+angle+")"+symbol2;
		          if (magnitude==0) text="0";
		         }
		        if(digformat=="Trigonometric")
		         {
		         //change degrees to radians
		        // if(angularunits=="Degrees")angle=Math.round(angle*180/p*10)/10;
		         
		         text=magnitude+"(c("+angle+")+"+imagnumbersymbol+"s("+angle+"))";
		         if (magnitude==1) text="c("+angle+")+"+imagnumbersymbol+"s("+angle+")";
		         if (magnitude==0) text="0";
		         }
     }	 
     

                  
// Display the result
if(x==-1)
{

display.Clear();

sum[0] = "";

positiony=0.8;
exp=false;
display.SetTextSize(fontsize4*font1adj,"dip");
length[0]=0;
cursor=0;	
//displayback.DrawLine(positionx[0],positiony+.05,positionx[0]+xstep,positiony+.05);}
positionx[0]=xstep/3;
for(i=0;text[i]!=null;i++)
   {
    if(text[i]=="^")e1_OnTouchDown();
    else  handle_btns(text[i]);
   }
//display.SetTextSize( 36 );
//display.DrawText( complex[0][0]+sign+complex[0][1]+"j",xstep/3,0.8 );
display.Update();
if(update_cursor==false)return;
displayback.Clear();
select_textedit();
displayback.DrawLine(positionx[0],positiony+.05,positionx[0]+xstep,positiony+.05);
displayback.Update();	
} 	
     
                
               //   imgbackground.DrawText( coord+"     "+euler[1],.3,k/3+.25 )         
}
       //   imgbackground.DrawText( coord+"     "+euler[1],.7,k/3+.25 )         

    
 function analyse_unbal_input() 
 {   
   
if(coord=="Rectangular")
  {  
    

   
        
                reala=real[0]/scalefactor;
                imaga=imag[0]/scalefactor;
                 maga=Math.sqrt(Math.pow(reala,2)+Math.pow(imaga,2));
                if(reala==0){if(imaga>0)anga=p/2;else anga=-p/2;}else {anga=Math.atan(imaga/reala);}  
              	if(reala<0)anga=anga+p;
             
               realb=real[1]/scalefactor;
               imagb=imag[1]/scalefactor;
               magb=Math.sqrt(Math.pow(realb,2)+Math.pow(imagb,2));
               if(realb==0){if(imagb>0)angb=p/2;else angb=-p/2;}else {angb=Math.atan(imagb/realb);}
               if(realb<0)angb=angb+p;
              
               realc=real[2]/scalefactor;
               imagc=imag[2]/scalefactor;
               magc=Math.sqrt(Math.pow(realc,2)+Math.pow(imagc,2));
               if(realc==0){if(imagc>0)angc=p/2;else angc=-p/2;}else {angc=Math.atan(imagc/realc);}
               if(realc<0)angc=angc+p;
              
   }


  if(coord=="Polar")
  {
        if(angularunits=="Degrees")
           {
            conv_fac=p/180;
           }
        else
          {
           conv_fac=1;
           }
  
        // if(euler[0])conv_fac=1; else {if(angularunits=="Degrees")conv_fac=p/180;}
          maga=real[0]/scalefactor;
          anga=imag[0]*conv_fac;
          reala=maga*Math.cos(anga);
          imaga=maga*Math.sin(anga);
          if(maga==0)anga=0;
          
  // if(euler[1])conv_fac=1;else {if(angularunits=="Degrees")conv_fac=p/180;}
   magb=real[1]/scalefactor;
   angb=imag[1]*conv_fac;
   realb=magb*Math.cos(angb);
imagb=magb*Math.sin(angb);
 if(magb==0)angb=0;
   
//if(euler[2])conv_fac=1;else {if(angularunits=="Degrees")conv_fac=p/180;}
 magc=real[2]/scalefactor; 
angc=imag[2]*conv_fac;
realc=magc*Math.cos(angc);
imagc=magc*Math.sin(angc);
 if(magc==0)angc=0;
//imgbackground.DrawText( magc+" "+angc,.3,.1 ) ;
  euler=[false,false,false];
  //  imgnumbers.Clear();
 //   imgnumbers2.Clear();
 //   imgfront.Clear();
 //   show_vectors();
 }  
    imgnumbers.Clear();
  	imgnumbers2.Clear();
   
  	show_text();
  	draw_unbal_phasors();
    calculate_seq_components();
    draw_seq_components();
    show_seq_text();  
    if(showbtnall) show_components();  
    show_labels();  
  	imgfront.Update();
    imgnumbers.Update();
  	imgnumbers2.Update();
  
    layDlg.Animate("SlideToRight");
    deselect_textedit();
}


function analyse_sym_input()
{
  
  if(coord=="Rectangular")
{

 real1=real[0]/scalefactor;
 imag1=imag[0]/scalefactor;
 sign1="+1";
  if(imag1<0)sign1="-1";
   mag1=Math.sqrt(Math.pow(real1,2)+Math.pow(imag1,2));
   if(real1==0){ang1=p/2*sign1;} else {ang1=Math.atan(imag1/real1);}
    if(real1<0)ang1=ang1+p;


real2=real[1]/scalefactor;
imag2=imag[1]/scalefactor;
sign2="+1";
 if(imag2<0)sign2="-1";
  mag2=Math.sqrt(Math.pow(real2,2)+Math.pow(imag2,2));
   if(real2==0){ang2=p/2*sign2;} else {ang2=Math.atan(imag2/real2);}
  if(real2<0)ang2=ang2+p;

real0=real[2]/scalefactor;
imag0=imag[2]/scalefactor;
  sign0="+1";
     if(imag0<0)sign0="-1";
     mag0=Math.sqrt(Math.pow(real0,2)+Math.pow(imag0,2));
       if(real0==0){ang0=p/2*sign0;} else {ang0=Math.atan(imag0/real0);}
    if(real0<0)ang0=ang0+p;
            
   }
  if(coord=="Polar")
  {
  if(angularunits=="Degrees"){conv_fac=p/180;}else{conv_fac=1;}
  
  if(euler[0])conv_fac=1; else {if(angularunits=="Degrees")conv_fac=p/180;}
   mag1=real[0]/scalefactor;
   ang1=imag[0]*conv_fac;
 
 if(euler[1])conv_fac=1; else {if(angularunits=="Degrees")conv_fac=p/180;}
  mag2=real[1]/scalefactor;
  ang2=imag[1]*conv_fac;

  if(euler[2])conv_fac=1; else {if(angularunits=="Degrees")conv_fac=p/180;}
  mag0=real[2]/scalefactor;
  ang0=imag[2]*conv_fac;
    }
    
    
// imgbackground.DrawText( ": mag1="+Math.round(mag1*roundfactor)/roundfactor+": ang1 ="+ang1,.1,.3 )         
           
  
  
 euler=[false,false,false]; 
 real1a=mag1*Math.cos(ang1-symang);
real1b=mag1*Math.cos(ang1-2*p/3-symang);
real1c=mag1*Math.cos(ang1+2*p/3-symang);
real2a=mag2*Math.cos(ang2+symang);
real2b=mag2*Math.cos(ang2+2*p/3+symang);
real2c=mag2*Math.cos(ang2-2*p/3+symang);
real0a=mag0*Math.cos(ang0);
imag1a=mag1*Math.sin(ang1-symang);
imag1b=mag1*Math.sin(ang1-2*p/3-symang);
imag1c=mag1*Math.sin(ang1+2*p/3-symang);
imag2a=mag2*Math.sin(ang2+symang);
imag2b=mag2*Math.sin(ang2+2*p/3+symang);
imag2c=mag2*Math.sin(ang2-2*p/3+symang);
imag0a=mag0*Math.sin(ang0);

//imgbackground.DrawText( ": real1c="+mag1*Math.cos(ang1+2*p/3-symang)+": ang1 ="+ang1,.1,.3 )         
        
real0b=real0a;
real0c=real0a;
imag0b=imag0a;
imag0c=imag0a;   
  
    imgnumbers.Clear();
    imgnumbers2.Clear();
    imgfront.Clear();
    imgposseq.Clear();
    calculate_unbalanced_phasors();
   // show_vectors();
    
  	show_text();
  	//imgnumbers.Update();
    if(mag1!=0||mag2!=0||mag0!=0)calculate_seq_components();
    else if(coord=="Polar")calculate_seq_components();
   // calculate_seq_phasors();
    draw_seq_components();
    show_seq_text();  
   if(showbtnall) show_components();  
    
 //   draw_unbal_phasors();
  	show_labels(); 
  	
    imgnumbers.Update();
  	imgnumbers2.Update();
  imgposseq.Update();
  imgfront.Update();
 layDlg.Animate("SlideToRight");
 deselect_textedit();
}

function calculate_unbalanced_phasors()
{
reala=(real1a+real2a+real0a);
realb=(real1b+real2b+real0a);
realc=(real1c+real2c+real0a);
imaga=(imag1a+imag2a+imag0a);
imagb=(imag1b+imag2b+imag0a);
imagc=(imag1c+imag2c+imag0a);

    maga=Math.sqrt(Math.pow(reala,2)+Math.pow(imaga,2));
    magb=Math.sqrt(Math.pow(realb,2)+Math.pow(imagb,2));
    magc=Math.sqrt(Math.pow(realc,2)+Math.pow(imagc,2));
    if(reala==0){anga=p/2*sign1[0];}else {anga=Math.atan(imaga/reala);}
    if(realb==0){angb=p/2*sign1[1];}else {angb=Math.atan(imagb/realb);}
    if(realc==0){angc=p/2*sign1[2];}else {angc=Math.atan(imagc/realc);}
    
	
	if(reala<0||anga>p)anga=anga-p;
  if(realb<0||angb>p)angb=angb-p;
  if(realc<0||angc>p)angc=angc-p;
  
  if(anga<-p)anga=anga+2*p;
  if(angb<-p)angb=angb+2*p;
  if(angc<-p)angc=angc+2*p;
  
  if(maga==0)anga=0;
  if(magb==0)angb=0;
  if(magc==0)angc=0;

imgfront.Clear();
 imgfront.SetPaintColor( colora );
 imgfront.DrawLine(0.5,0.5,0.5 +reala/2,0.5-imaga/2 );

 imgfront.SetPaintColor( colorb );
 imgfront.DrawLine(0.5,0.5,0.5+realb/2,0.5-imagb/2 );
 imgfront.SetPaintColor( colorc );
 imgfront.DrawLine(0.5,0.5,0.5+realc/2,0.5-imagc/2 );

}

function draw_rectangular_background()
  	{
  		imgback.Clear();
  		imgseqback.Clear();
  	
		imgback.SetPaintColor( gridcolour1 );
			imgback.SetLineWidth(linesize);
		imgback.SetTextSize(fontsize2*font2adj/1.33);
		if(grid)
		{
		for(i=0;i<11;i++)
		{
		if(i==5)	imgback.SetLineWidth(1.75*linesize); else 	imgback.SetLineWidth(linesize);
		imgback.DrawLine( 0,i/10*w1/h1,1,i/10*w1/h1);
		imgback.DrawText(Math.round(100*(5-i)*scale)/100,0.01,i/10-.01);
		imgback.DrawLine( i/10,0,i/10,1 );
		imgback.DrawText(Math.round(100*(i-5)*scale)/100,i/10+.01,0.99);
		}
		}
		imgseqback.SetPaintColor(gridcolour2);
		imgseqback.SetLineWidth(0.75*linesize);
		if(gridsym)
		{
		for(i=0;i<divisions;i++)
		{
		imgseqback.DrawLine( i/divisions,0,i/divisions,1 );
	
		}
		for(i=0;i<11;i++)
		{
		imgseqback.DrawLine( 0,i/10,1,i/10);
		}
  			imgseqback.SetLineWidth(1.5*linesize);
	     
  		imgseqback.DrawLine( 0,0.5,1,0.5);
  		
  imgseqback.DrawLine( poscenter,0,poscenter,1);
  imgseqback.DrawLine( negcenter,0,negcenter,1);
  imgseqback.DrawLine( zerocenter,0,zerocenter,1);
  	}	
			
	imgback.Update();
	imgseqback.Update();
   	}
   	
   	function draw_polar_background()
   	{
     	imgback.Clear();
     	imgback.SetTextSize(fontsize2*font2adj/1.33);
     		imgback.SetLineWidth(1*linesize);
     	if(grid)
     	{
     	imgback.SetPaintColor( gridcolour1 );
   		imgback.DrawLine( 0,.5,1,.5);
	     imgback.DrawLine( 0.5,0,0.5,1 );
	     imgback.DrawLine( 0.2165,0,1-0.2165,1 );
	     imgback.DrawLine( 0,0.2165,1,1-0.2165 );
	     imgback.DrawLine( 1-0.2165,0,0.2165,1 );
	     imgback.DrawLine( 0,1-0.2165,1,0.2165 );
	     imgback.DrawLine( 0,0,1,1);
	     imgback.DrawLine( 1,0,0,1); 
	     imgback.DrawLine(0.5- 0.2588/2,0,0.5+0.2588/2,1);
	     imgback.DrawLine(0.5+ 0.2588/2,0,0.5-0.2588/2,1);
	     imgback.DrawLine(0,0.5- 0.2588/2,1,0.5+0.2588/2);
	     imgback.DrawLine(0,0.5+ 0.2588/2,1,0.5-0.2588/2);
	     imgback.SetPaintStyle("Line");
	     imgback.DrawCircle( 0.5,0.5,0.5 );
	     imgback.DrawCircle( 0.5,0.5,0.4 );
	     imgback.DrawCircle( 0.5,0.5,0.3 );
	     imgback.DrawCircle( 0.5,0.5,0.2 );
	     imgback.DrawCircle( 0.5,0.5,0.1 );
	     imgback.DrawCircle( 0.5,0.5,0.6 );
	     }
	     
	     imgseqback.Clear();
	     	imgseqback.SetPaintColor( gridcolour2 );
	     	imgseqback.SetLineWidth(1.5*linesize);
	     
	     	if(gridsym)
	     	{
	     		imgseqback.DrawLine(0,0.5,1,0.5);
	     for(i=0;i<3;i++)
	     {
	     if (i==0)center=poscenter;
	     if (i==1)center=negcenter;
	     if (i==2)center=zerocenter;
	     
     
	     	imgseqback.SetLineWidth(1.5*linesize);
	     imgseqback.DrawLine( center,0,center,1 );
	     
	     	imgseqback.SetLineWidth(0.75*linesize);
	    
	     imgseqback.DrawLine( center-5*.866/divisions,.5/2,center+5*.866/divisions,.5+.5/2);
	     imgseqback.DrawLine( center+5*.866/divisions,0.5/2,center-5*.866/divisions,.5+.5/2); 
	     imgseqback.DrawLine( center-5*.5/divisions,.134/2,center+5*.5/divisions,.5+.866/2);
	     imgseqback.DrawLine( center+5*.5/divisions,0.134/2,center-5*.5/divisions,.5+.866/2); 
	   
	     imgseqback.SetPaintStyle("Line");
	     imgseqback.DrawCircle( center,0.5,1/divisions);
	     imgseqback.DrawCircle( center,0.5,2/divisions );
	     imgseqback.DrawCircle( center,0.5,3/divisions );
	     imgseqback.DrawCircle( center,0.5,4/divisions );
	     imgseqback.DrawCircle( center,0.5,5/divisions );
	     
	     }
	     }
	     imgseqback.Update();
	    
	     
	     imgback.SetPaintStyle( "fill" );
	     imgback.SetPaintColor( "color7" );
	     
	      //imgback.DrawText( "-90",0.5,.99 );
	      if(grid)
	      {
	      if(angularunits=="Degrees")
	      {
	      imgback.DrawText( "-60", 1-0.2165,.99);
	      imgback.DrawText( "-120", 0.2165,.99);
	      imgback.DrawText( "-150", 0,1-0.2165);
	       imgback.DrawText( "180",0,0.5);
	      imgback.DrawText( "150", 0,0.2165)
	       imgback.DrawText( "120", 0.2165,0.035)
	       imgback.DrawText( "90",0.5,0.035 );
	     // imgback.DrawText( "60", 1-0.2165,.035);
	      imgback.DrawText( "30", 0.95,0.2165)
	      imgback.DrawText( "0", 0.975,0.49)
	      imgback.DrawText( "-30", 0.94,1-0.2165)
	      imgback.DrawText( Math.round(scale*100)/100, 0.51,0.6)
	      imgback.DrawText( Math.round(scale*2*100)/100, 0.51,0.7)
	      imgback.DrawText( Math.round(scale*3*100)/100, 0.51,0.8)
	      imgback.DrawText( Math.round(scale*4*100)/100, 0.51,0.9)
	      imgback.DrawText( Math.round(scale*5*100)/100, 0.51,0.99) 
	      imgback.DrawText( "0", 0.51,0.53)
	      }
	      else
	      {
	      imgback.DrawText( "-pi/3", 1-0.2165,.99);
	      imgback.DrawText( "-2pi/3", 0.2165,.99);
	      imgback.DrawText( "-5pi/6", 0,1-0.2165);
	       imgback.DrawText( "pi",0.01,0.49);
	      imgback.DrawText( "5pi/6", 0,0.2165)
	       imgback.DrawText( "2pi/3", 0.2165,0.035)
	       imgback.DrawText( "pi/2",0.5,0.035 );
	     // imgback.DrawText( "pi/3", 1-0.2165,.035);
	      imgback.DrawText( "pi/6", 0.92,0.2165)
	      imgback.DrawText( "0", 0.975,0.49)
	      imgback.DrawText( "-pi/6", 0.91,1-0.2165)
	      imgback.DrawText( Math.round(scale*100)/100, 0.51,0.6)
	      imgback.DrawText( Math.round(scale*2*100)/100, 0.51,0.7)
	      imgback.DrawText( Math.round(scale*3*100)/100, 0.51,0.8)
	      imgback.DrawText( Math.round(scale*4*100)/100, 0.51,0.9)
	      imgback.DrawText( Math.round(scale*5*100)/100, 0.51,0.99) 
	      imgback.DrawText( "0", 0.51,0.53)
	      }
	      }
	     imgback.Update();
   	}

     	
function 	img_OnTouchMove(ev)
	{
  if(counter2<3){counter2++;return;}
  counter2=0;
  
 
	
	if(phase=="a")
	{
  	reala=ev.x[0]*2-1;
  	imaga=1-ev.y[0]*2;
  	maga=(Math.sqrt(Math.pow(reala,2)+Math.pow(imaga,2)));
  	anga=Math.atan((imaga)/(reala));
    if(reala<0)anga=anga-p;
    if(anga<-p)anga=anga+2*p;
    
  	}
  	if(phase=="b")
	{
    
  realb=ev.x[0]*2-1;
  	imagb=1-ev.y[0]*2;
  
   magb=(Math.sqrt(Math.pow(realb,2)+Math.pow(imagb,2)));
   angb=Math.atan(imagb/realb);
   
  	if(realb<0)angb=angb-p;
 	 if(angb<-p)angb=angb+2*p;
   
  	}
  if(phase=="c")
	{
  	realc=ev.x[0]*2-1;
  	imagc=1-ev.y[0]*2;
  
   magc=(Math.sqrt(Math.pow(realc,2)+Math.pow(imagc,2)));
   angc=Math.atan(imagc/realc);
   
  	if(realc<0)angc=angc-p;
 	 if(angc<-p)angc=angc+2*p;
  	}
  calculate_seq_components();
   
    imgfront.Clear();
    imgnumbers.Clear();
    imgnumbers2.Clear();
    draw_seq_components();
		update_components();
  
  	show_vectors();
    show_text();
    show_labels();
  	imgfront.Update();
  	imgnumbers.Update();
  	imgnumbers2.Update();
  	}
  		
 
  
  function update_components()
  	{
    //calculatecomponents();
  	if(showbtnall==true)
  	{clear_components();show_components();showbtnall=true;}
  	else
  	{
  	if(showbtna==true){clear_components();show_positive_components();showbtna=true;}
  	if(showbtnb==true){clear_components();show_negative_components();showbtnb=true;}
  	if(showbtnc==true){clear_components();show_zero_components();showbtnc=true;}
  	}
  	
	}
  
  function img_OnTouchDown(ev)
  {

  showbtnb=false;
  showbtnc=false;
  showbtna=false;
 
    realpos=ev.x[0]*2-1;
  	imagpos=1-ev.y[0]*2;
  	
  apos=	Math.sqrt(Math.pow(realpos-reala,2)+Math.pow(imagpos-imaga,2));
  bpos=	Math.sqrt(Math.pow(realpos-realb,2)+Math.pow(imagpos-imagb,2));
  cpos=	Math.sqrt(Math.pow(realpos-realc,2)+Math.pow(imagpos-imagc,2));
  phase="b";
 if(apos<bpos&&apos<cpos)phase="a";
 if(cpos<apos&&cpos<bpos)phase="c";
 if(bpos<apos&&bpos<cpos)phase="b";



}
  
  function seq_OnTouchDown(ev)
  { 
     real=ev.x[0];
  	imag=ev.y[0];
  	
//  	real=(ev.x[0]-poscenter)*divisions/5;
  //	imag=1-ev.y[0]*2;
  	
  pos=	Math.pow((real-(poscenter+real1a*5/divisions))*divisions/10,2)+Math.pow(imag-(0.5-imag1a/2),2);
  neg=	Math.pow((real-(negcenter+real2a*5/divisions))*divisions/10,2)+Math.pow(imag-(0.5-imag2a/2),2);
  zero= Math.pow((real-(zerocenter+real0a*5/divisions))*divisions/10,2)+Math.pow(imag-(0.5-imag0a/2),2);
  if(pos<neg&&pos<zero)seq="positive"; 
  if(neg<pos&&neg<zero)seq="negative"; 
  if(zero<neg&&zero<pos)seq="zero"; 
  }
  
 
    
function draw_unbal_phasors()
{ 

 imgfront.Clear();
 imgfront.SetPaintColor( colora );
 imgfront.DrawLine(0.5,0.5,0.5 +reala/2,0.5-imaga/2 );

 imgfront.SetPaintColor( colorb );
 imgfront.DrawLine(0.5,0.5,0.5+realb/2,0.5-imagb/2 );
 imgfront.SetPaintColor( colorc );
 imgfront.DrawLine(0.5,0.5,0.5+realc/2,0.5-imagc/2 );
 show_text();
 //show_labels();
 //imgfront.Update();
 }
  

    	
   
  
  
  function reset()
 {
 maga=1/scalefactor*resetvalue;
 magb=1/scalefactor*resetvalue;
 magc=1/scalefactor*resetvalue;
 anga=0;
 angb=-2*p/3;
 angc=2*p/3;
 reala=1/scalefactor*resetvalue;
 imaga=0;
 realb=-0.5/scalefactor*resetvalue;
 realc=-0.5/scalefactor*resetvalue;
 imagb=Math.sin(-2*p/3)/scalefactor*resetvalue;
 imagc=Math.sin(2*p/3)/scalefactor*resetvalue;
 mag1=1/scalefactor*resetvalue;
 mag2=0;
 mag0=0;
 ang1=0;
 ang2=0;
 ang0=0;


 //vectorsumbtn.SetTextColor( colorb );
//showbtnall=false;
showbtna=false;
showbtnb=false;
showbtnc=false;
 imgfront.Clear();
 imgnumbers.Clear();
  imgnumbers2.Clear();
 imgfront.SetPaintColor( colora );
 imgfront.DrawLine(0.5,0.5,(reala+1)/2,(1-imaga)/2 );
 //atxt.SetText(maga+" pu "+angadeg+" deg");
 imgfront.SetPaintColor( colorb );
 imgfront.DrawLine(0.5,0.5,(realb+1)/2,(1-imagb)/2 );
 //btxt.SetText(magb+" pu "+angbdeg+" deg");
 imgfront.SetPaintColor( colorc );
 imgfront.DrawLine(0.5,0.5,(realc+1)/2,(1-imagc)/2);
// ctxt.SetText(magc+" pu "+angcdeg+" deg");
show_text();
imgcurrent.Clear();
imgcurrent.Update();
fault=false;

  
 
 //calculatecomponents();
 calculate_seq_components();
 // calculate_seq_phasors();
  show_labels();
  draw_seq_components();
  imgnumbers2.Update();
   imgfront.Update();
 imgnumbers.Update();
 }
 
 
 
 function calculate_seq_components()
 {
imgposseq.Clear();
//real1a=(reala+magb*Math.cos(angb+2*p/3)+magc*Math.cos(angc+2*2*p/3))/3; 
//imag1a=(imaga+magb*Math.sin(angb+2*p/3)+magc*Math.sin(angc+2*2*p/3))/3; 
//real2a=(reala+magb*Math.cos(angb+2*2*p/3)+magc*Math.cos(angc+2*p/3))/3; 
//imag2a=(imaga+magb*Math.sin(angb+2*2*p/3)+magc*Math.sin(angc+2*p/3))/3; 
//real0a=(reala+realb+realc)/3; 
//imag0a=(imaga+imagb+imagc)/3
angtemp=Math.cos(angb)*Math.cos(2*p/3)-Math.sin(angb)*Math.sin(2*p/3);
angtemp2=Math.cos(angc)*Math.cos(2*2*p/3)-Math.sin(angc)*Math.sin(2*2*p/3);
angtemp3=Math.sin(angb)*Math.cos(2*p/3)+Math.cos(angb)*Math.sin(2*p/3);
angtemp4=Math.sin(angc)*Math.cos(2*2*p/3)+Math.cos(angc)*Math.sin(2*2*p/3);
angtemp5=Math.cos(angb)*Math.cos(2*2*p/3)-Math.sin(angb)*Math.sin(2*2*p/3);
angtemp6=Math.sin(angb)*Math.cos(2*2*p/3)+Math.cos(angb)*Math.sin(2*2*p/3);
angtemp7=Math.cos(angc)*Math.cos(2*p/3)-Math.sin(angc)*Math.sin(2*p/3);
angtemp8=Math.sin(angc)*Math.cos(2*p/3)+Math.cos(angc)*Math.sin(2*p/3);

real1a=(reala+magb*angtemp+magc*angtemp2)/3; 
imag1a=(imaga+magb*angtemp3+magc*angtemp4)/3; 

real2a=(reala+magb*angtemp5+magc*angtemp7)/3; 
imag2a=(imaga+magb*angtemp6+magc*angtemp8)/3; 

real0a=(reala+realb+realc)/3; 
imag0a=(imaga+imagb+imagc)/3; 

 mag1a=Math.sqrt(Math.pow(real1a,2)+Math.pow(imag1a,2));
mag2a=Math.sqrt(Math.pow(real2a,2)+Math.pow(imag2a,2));
mag0a=Math.sqrt(Math.pow(real0a,2)+Math.pow(imag0a,2));
mag1b=mag1a;
mag2b=mag2a;
mag0b=mag0a;
mag1c=mag1a;
mag2c=mag2a;
mag0c=mag0a;


 ang1a=Math.atan(imag1a/real1a);
 ang2a=Math.atan(imag2a/real2a);
ang0a=Math.atan(imag0a/real0a);
j=1;
if(imag0a<1)j=-1;
if(real0a==0)ang0a=1.57*j;
if(real0a<0)ang0a=ang0a+p;
if(mag0a<0.0005)ang0a=0;
j=1;
if(imag2a<1)j=-1;
if(real2a==0)ang2a=1.57*j;
if(real2a<0)ang2a=ang2a+p;
if(mag2a<0.0005)ang2a=0;
j=1;
if(imag1a<1)j=-1;
if(real1a==0)ang1a=1.57*j;
if(real1a<0)ang1a=ang1a+p;
if(mag1a<0.0005)ang1a=0;

real1b=mag1a*Math.cos(ang1a+2*2*p/3); 
imag1b=mag1a*Math.sin(ang1a+2*2*p/3);
real2b=mag2a*Math.cos(ang2a+2*p/3);
imag2b=mag2a*Math.sin(ang2a+2*p/3);
real0b=real0a;
imag0b=imag0a

real1c=mag1a*Math.cos(ang1a+2*p/3);
imag1c=mag1a*Math.sin(ang1a+2*p/3);
real2c=mag2a*Math.cos(ang2a+2*2*p/3);
imag2c=mag2a*Math.sin(ang2a+2*2*p/3);
real0c=real0a; 
imag0c=imag0a;
}

function calculate_seq_phasors()
{
mag1a=(100*Math.sqrt(Math.pow(real1a,2)+Math.pow(imag1a,2)))/100;
ang1a=Math.atan(imag1a/real1a);
mag2a=(100*Math.sqrt(Math.pow(real2a,2)+Math.pow(imag2a,2)))/100;
ang2a=Math.atan(imag2a/real2a);
mag0a=(100*Math.sqrt(Math.pow(real0a,2)+Math.pow(imag0a,2)))/100;
ang0a=Math.atan(imag0a/real0a);

if(real1a<0)ang1a=ang1a+p;
if(real2a<0)ang2a=ang2a+p;
if(real0a<0)ang0a=ang0a+p;
}

//h=imgposseq.GetAbsHeight()/140;
//w=imgposseq.GetAbsWidth()/140;

function draw_seq_components()
{

imgposseq.SetPaintColor( colora );
imgposseq.DrawLine( poscenter,0.5,poscenter+real1a/4*size1,0.5-imag1a/2);
imgposseq.DrawLine( negcenter,0.5,negcenter+real2a/4*size1,0.5-imag2a/2);


imgposseq.SetPaintColor( colorb );
imgposseq.DrawLine( poscenter,0.5,poscenter+real1b/4*size1,0.5-imag1b/2);
imgposseq.DrawLine( negcenter,0.5,negcenter+real2b/4*size1,0.5-imag2b/2);

imgposseq.SetPaintColor( colorc );
imgposseq.DrawLine( poscenter,0.5,poscenter+real1c/4*size1,0.5-imag1c/2);
imgposseq.DrawLine( negcenter,0.5,negcenter+real2c/4*size1,0.5-imag2c/2);

imgposseq.SetPaintColor( zerocolour );
imgposseq.DrawLine( zerocenter,0.5,zerocenter+real0a/4*size1,0.5-imag0a/2);


if(labels)
    {
    imgposseq.SetPaintColor( colora );
    imgposseq.DrawText("a1",poscenter+real1a/4*size1,0.5-imag1a/2-.03);
    if(mag2a>0.001)imgposseq.DrawText( "a2",negcenter+real2a/4*size1-0.03,0.5-imag2a/2-0.03);
   
    imgposseq.SetPaintColor( colorb );
    imgposseq.DrawText( "b1",poscenter+real1b/4*size1-0.03,0.5-imag1b/2);
    if(mag2a>0.001)imgposseq.DrawText( "b2",negcenter+real2b/4*size1+0.005,0.5-imag2b/2+0.03);
   
     imgposseq.SetPaintColor( colorc );
    imgposseq.DrawText("c1",poscenter+real1c/4*size1-0.03,0.5-imag1c/2);
    if(mag2a>0.001)imgposseq.DrawText("c2",negcenter+real2c/4*size1+0.01,0.5-imag2c/2);
  
    imgposseq.SetPaintColor( "green" );
    if(mag0a>0.001)imgposseq.DrawText( "a0=b0=c0",zerocenter,.2);
    }
//ang1=Math.round(ang1*roundfactor)/roundfactor;
//ang2=Math.round(ang2*roundfactor)/roundfactor;
//ang0=Math.round(ang0*roundfactor)/roundfactor;

show_seq_text();
imgposseq.Update();
 }
 
 function showbtnall_ontouch()
 {
 if (showbtnall==false)
 {
 sumbtn.SetTextColor( "#22ff22" );

showbtnall=true;

clear_components();
show_components();
show_text();
//show_labels();
imgfront.Update();

 showbtnall=true;
  return;
  }
  sumbtn.SetTextColor( "white" );
  showbtnall=false;
  showbtna=false;
  showbtnb=false;
  showbtnc=false;
  clear_components();
  show_text();
  show_labels();
  imgfront.Update();
// sumbtn.SetTextColor("white" ); 
  }
  
  function show_components()
  {
  
  imgfront.SetLineWidth( line1 );
  imgfront.SetPaintColor( colora );
  imgfront.DrawLine(0.5,0.5,0.5+real1a/2,0.5-imag1a/2);
  imgfront.DrawLine(0.5+real1a/2,0.5-imag1a/2,0.5+real1a/2+real2a/2,0.5-imag1a/2-imag2a/2);
  imgfront.DrawLine(0.5+real1a/2+real2a/2,0.5-imag1a/2-imag2a/2,0.5+real1a/2+real2a/2+real0a/2,0.5-imag1a/2-imag2a/2-imag0a/2);
  imgfront.SetPaintColor( colorb );
  imgfront.DrawLine(0.5,0.5,0.5+real1b/2,0.5-imag1b/2);
  imgfront.DrawLine(0.5+real1b/2,0.5-imag1b/2,0.5+real1b/2+real2b/2,0.5-imag1b/2-imag2b/2);
  imgfront.DrawLine(0.5+real1b/2+real2b/2,0.5-imag1b/2-imag2b/2,0.5+real1b/2+real2b/2+real0b/2,0.5-imag1b/2-imag2b/2-imag0b/2);
  imgfront.SetPaintColor( colorc );
  imgfront.DrawLine(0.5,0.5,0.5+real1c/2,0.5-imag1c/2);
  imgfront.DrawLine(0.5+real1c/2,0.5-imag1c/2,0.5+real1c/2+real2c/2,0.5-imag1c/2-imag2c/2);
  imgfront.DrawLine(0.5+real1c/2+real2c/2,0.5-imag1c/2-imag2c/2,0.5+real1c/2+real2c/2+real0c/2,0.5-imag1c/2-imag2c/2-imag0c/2);
 
   imgfront.SetLineWidth( 4);
   show_labels();
   
   }
   
   function show_labels()
   {
   if(labels)
           {
           offscreenadj=0;
           xadj=0;
           yadj=0;
           if(reala>0.9){xadj=-0.04;yadj=-0.02;}
           if(reala<0){yadj=-0.01;xadj=-0.02;}
           imgfront.SetPaintColor( colora );
           imgfront.DrawText("A",0.5+reala/2+xadj+ Math.cos(anga)*0.01,0.5-imaga/2+yadj-Math.sin(anga)*0.02);
           imgfront.SetPaintColor( colorb );
            if(realb<0&&imagb<0){adj=.02;}else{adj=0;}
           imgfront.DrawText("B",0.5+realb/2+0.05*realb-0.01,0.5-imagb/2-0.05*imagb-.012);
           imgfront.SetPaintColor( colorc );
            if(realc<0&&imagc<0){adj=.02;}else{adj=0;}
           imgfront.DrawText("C",0.5+realc/2+0.05*realc-0.01,0.5-imagc/2-0.05*imagc+.015);
           
           if(showbtnall)
             {
             imgfront.SetPaintColor( colora );
             imgfront.DrawText("a1",0.5+real1a/4,0.5-0.01-imag1a/4);
             imgfront.DrawCircle(0.5+real1a/2,0.5-imag1a/2,.01);
             if(mag2a>0.001)imgfront.DrawText("a2",0.5+real1a/2+real2a/4,0.5-imag1a/2-imag2a/4-0.01);
             imgfront.DrawCircle(0.5+real1a/2+real2a/2,0.5-imag1a/2-imag2a/2,.01);
             imgfront.DrawCircle(0.5+real1a/2+real2a/2+real0a/2,0.5-imag1a/2-imag2a/2-imag0a/2 ,.01);
             if( mag0a>0.001)imgfront.DrawText("a0",0.5+real1a/2+real2a/2+real0a/4,0.5-imag1a/2-imag2a/2-imag0a/4 -0.01);
             imgfront.SetPaintColor( colorb );
             imgfront.DrawText("b1",0.5+real1b/4-0.04,0.5-imag1b/4);
             imgfront.DrawCircle(0.5+real1b/2,0.5-imag1b/2,.01);
             if(mag2a>0.001)imgfront.DrawText("b2",0.5+real1b/2+real2b/4-0.04,0.5-imag1b/2-imag2b/4);
             imgfront.DrawCircle(0.5+real1b/2+real2b/2,0.5-imag1b/2-imag2b/2,.01);
             imgfront.DrawCircle(0.5+real1b/2+real2b/2+real0b/2,0.5-imag1b/2-imag2b/2-imag0b/2 ,.01);
             if(mag0a>0.001)imgfront.DrawText("b0",0.5+real1b/2+real2b/2+real0b/4-0.04,0.5-imag1b/2-imag2b/2-imag0b/4 );
             imgfront.SetPaintColor( colorc );
             imgfront.DrawText("c1",0.5+real1c/4+0.01,0.5-imag1c/4);
             imgfront.DrawCircle(0.5+real1c/2,0.5-imag1c/2,.01);
             if(mag2a>0.001)imgfront.DrawText("c2",0.5+real1c/2+real2c/4,0.5-imag1c/2-imag2c/4);
             imgfront.DrawCircle(0.5+real1c/2+real2c/2,0.5-imag1c/2-imag2c/2,.01);
             imgfront.DrawCircle(0.5+real1c/2+real2c/2+real0c/2,0.5-imag1c/2-imag2c/2-imag0c/2 ,.01);
             if(mag0a>0.001) imgfront.DrawText("c0",0.5+real1c/2+real2c/2+real0c/4,0.5-imag1c/2-imag2c/2-imag0c/4+.02 );
             }
           
           
           }
  }
 
  function labelsbtn_ontouch()
 {
 if (labels==false)
  {
   labelsbtn.SetTextColor( "#22ff22" );
   labels=true;
//   fam4.SetButtonColors("#00aa00" ); 
   
   }
   else
   {
   labelsbtn.SetTextColor( "#ffffff" );
   labels=false; 
//   fam4.SetButtonColors("#646464" ); 
   }
  //  imgnumbers.Clear();
 // imgnumbers2.Clear();
  imgfront.Clear();
  imgposseq.Clear();
  clear_components(); //redraw unbalanced phasors
  //calculate_seq_components();
  //calculate_seq_phasors();
  draw_seq_components(); // draw symetrical components on sym grid
  finish_components(); // draw sym components on main grid if btn selected
  show_labels();
  //show_text();
  imgfront.Update();
  //imgnumbers.Update();
  //imgnumbers2.Update();
 // update();
 }
 
 function grid_dialog()
 {
 dlgTxt = app.CreateDialog( "Grid (On/Off/scale)");
    
    //Create a layout for dialog.
    layDlg3 = app.CreateLayout( "linear", "vertical,center" );
    layDlg3.SetSize( 1, 1);
    dlgTxt.AddLayout( layDlg3 );

    
    
    
   // headinglay=app.CreateLayout("linear","FillX,horizontal,right");
   // layDlg3.AddChild( headinglay);
    
    
    
    linelay=app.CreateLayout("Linear","FillX,horizontal,left");
    linelay.SetMargins(0,.03,0,0)
    layDlg3.AddChild( linelay);
    
    txt=app.CreateText(" Unbalanced grid ");
     txt.SetTextSize( fontsize4*font4adj,"dip");
    // txt.SetMargins( 0,0.05,0,0 );
    linelay.AddChild( txt );
    
    gridon = app.CreateCheckBox("");
    gridon.SetTextSize( fontsize3*font3adj,"dip");
    gridon.SetTextColor( "#dddddd" );
    gridon.SetMargins( 0,0,0,0 );
    if(grid)gridon.SetChecked(true);
   // gridon.SetOnTouch( gridon_ontouch );
    linelay.AddChild( gridon );
    
   

 


    gridcolor1 = app.CreateSpinner(colors);
    gridcolor1.SelectItem( gridcolour1 );
    gridcolor1.SetTextSize( fontsize3*font3adj,"dip");
    gridcolor1.SetTextColor( "#dddddd" );
    gridcolor1.SetOnChange( change_grid_colors );
    linelay.AddChild( gridcolor1 );
    
    
    linelay2=app.CreateLayout("Linear","FillX,horizontal,left");
    linelay2.SetMargins(0,.03,0,0);
    layDlg3.AddChild( linelay2);
    
    txt=app.CreateText(" Symmetrical grid ");
     txt.SetTextSize( fontsize4*font4adj,"dip");
    // txt.SetPadding( 0,0,0.04,0 );
    linelay2.AddChild( txt );
    
    gridonsym = app.CreateCheckBox("" );
    gridonsym.SetTextSize( fontsize3*font3adj,"dip");
    gridonsym.SetTextColor( "#dddddd" );
    //gridonsym.SetPadding( 0.06,0,0,0 );
    if(gridsym)gridonsym.SetChecked(true);
  //  gridonsym.SetOnTouch( gridbtn_ontouch );
    linelay2.AddChild( gridonsym );
    
     linelay4=app.CreateLayout("Linear","FillX,horizontal,left");
    linelay4.SetMargins(0,.03,0,0);
    layDlg3.AddChild( linelay4);
    
    txt=app.CreateText(" Grid line width ");
     txt.SetTextSize( fontsize4*font4adj,"dip");
    // txt.SetPadding( 0,0,0.04,0 );
    linelay4.AddChild( txt );
    
    linewidth = app.CreateSeekBar(.5);
    linewidth.SetRange(1);
    linewidth.SetValue(linesize);
    linewidth.SetMargins( 0, 0, 0.05, 0 );
    linelay4.AddChild( linewidth );
    
    gridcolor2 = app.CreateSpinner(colors);
    gridcolor2.SelectItem( gridcolour2 );
    gridcolor2.SetTextSize( fontsize3*font3adj,"dip");
    gridcolor2.SetTextColor( "#dddddd" );
     gridcolor2.SetOnChange( change_grid_colors );
    linelay2.AddChild( gridcolor2 );

    
    linelay3=app.CreateLayout("Linear","FillX,horizontal,left");
    linelay3.SetMargins(0,.03,0,0);
    layDlg3.AddChild( linelay3);
    
    txt=app.CreateText(" Grid Scale: 1 division = ");
    txt.SetTextSize( fontsize4*font4adj,"dip");
    linelay3.AddChild( txt );
   
    gridscale = app.CreateTextEdit(  scale, 0.2 );
    gridscale.SetTextSize( fontsize4*font4adj,"dip");
    gridscale.SetTextColor( "#dddddd" );
    gridscale.SetMargins(0,0,0,0.03);
    linelay3.AddChild( gridscale ); 
    
    linelay4=app.CreateLayout("Linear","FillX,horizontal,left");
    linelay4.SetMargins(0,.0,0,0);
    layDlg3.AddChild( linelay4);
    
    txt=app.CreateText(" Phasor reset magnitude = ");
    txt.SetTextSize( fontsize4*font4adj,"dip");
    linelay4.AddChild( txt );
    
    reset_value = app.CreateTextEdit( resetvalue, .2);
    reset_value.SetTextSize( fontsize4*font4adj,"dip");
    reset_value.SetTextColor( "#dddddd" );
    reset_value.SetMargins(0,0,0,0.04);
    linelay4.AddChild( reset_value ); 
    
    
 
	

	
	
      enterbtn = app.CreateButton("[fa-reply]", .12, 0.07, "FontAwesome" ); 
       enterbtn.icon ="[fa-reply]" ;
       enterbtn.SetBackColor("grey");
       enterbtn.SetTextSize( fontsize3*font3adj,"dip");
       enterbtn.SetOnTouch( gridbtn_ontouch ); 
        layDlg3.AddChild( enterbtn ); 
        
   
    dlgTxt.Show();
 }
 
 function change_grid_colors()
 {
 gridcolour1=gridcolor1.GetText();
  gridcolour2=gridcolor2.GetText();
 }
  function user_preferences()
 {
  dlgTxt = app.CreateDialog( "User Preferences");
    
    //Create a layout for dialog.
    layDlg3 = app.CreateLayout( "linear", "vertical,center" );
    layDlg3.SetSize( 1, 1);
    dlgTxt.AddLayout( layDlg3 );

    
    
    
   // headinglay=app.CreateLayout("linear","FillX,horizontal,right");
   // layDlg3.AddChild( headinglay);
    
    
    
    linelay=app.CreateLayout("Linear","FillX,horizontal,left");
    linelay.SetMargins(0,.03,0,0)
    layDlg3.AddChild( linelay);
    
    txt=app.CreateText(" Imaginary number symbol  ");
     txt.SetTextSize( fontsize4*font4adj,"dip");
    // txt.SetMargins( 0,0.05,0,0 );
    linelay.AddChild( txt );
    
    symbol = app.CreateSpinner("i,j");
    symbol.SetText( imagnumbersymbol );
    symbol.SetTextSize( fontsize3*font3adj,"dip");
    symbol.SetTextColor( "#dddddd" );
    linelay.AddChild( symbol );
    
    linelay1=app.CreateLayout("Linear","FillX,horizontal,left");
    linelay1.SetMargins(0,.03,0,0);
    layDlg3.AddChild( linelay1);
    
    zeroval = app.CreateCheckBox("Show imaginary zero values");
    zeroval.SetTextSize( fontsize4*font4adj,"dip");
    zeroval.SetTextColor( "#dddddd" );
    zeroval.SetMargins( 0.05,0.0,0,0 );
    if(zero)zeroval.SetChecked(true); 
    linelay1.AddChild( zeroval );
    
    
    linelay2=app.CreateLayout("Linear","FillX,horizontal,left");
    linelay2.SetMargins(0,.03,0,0);
    layDlg3.AddChild( linelay2);
    
    txt=app.CreateText(" Show "+imagnumbersymbol+"  as");
     txt.SetTextSize( fontsize4*font4adj,"dip");
     //txt.SetMargins( 0,0.077,0,0 );
    linelay2.AddChild( txt );
    
    presuf = app.CreateSpinner("prefix,suffix" );
    presuf.SetTextSize( fontsize4*font4adj,"dip");
    presuf.SetTextColor( "#dddddd" );
    presuf.SelectItem( imagpresuf );
    linelay2.AddChild( presuf );
  
    
     linelay4=app.CreateLayout("Linear","FillX,horizontal,left");
    linelay4.SetMargins(0,.03,0,0);
    layDlg3.AddChild( linelay4);
    
      txt=app.CreateText(" Zero sequence color ");
     txt.SetTextSize( fontsize4*font4adj,"dip");
   // txt.SetMargins( 0,0.075,0,0 );
    linelay4.AddChild( txt );
    
    zerophcolor = app.CreateSpinner(colors);
    zerophcolor.SelectItem( zerocolour );
    zerophcolor.SetTextSize( fontsize3*font4adj,"dip");
    zerophcolor.SetTextColor( "#dddddd" );
    linelay4.AddChild( zerophcolor );
    
    linelay5=app.CreateLayout("Linear","FillX,horizontal,left");
    linelay5.SetMargins(0,.03,0,0);
    layDlg3.AddChild( linelay5);
    
     txt=app.CreateText(" Phase colors ");
     txt.SetTextSize( fontsize4*font4adj,"dip");
    //txt.SetMargins( 0,0.077,0,0 );
    linelay5.AddChild( txt );
    
    phasecolors = app.CreateSpinner("red white cyan,red white blue,red yellow blue,red yellow blue (muted),magenta white cyan,pink grey turquoise",0.5);
    phasecolors.SelectItem( phcolours );
    phasecolors.SetTextSize( fontsize4*font4adj,"dip");
    phasecolors.SetTextColor( "#dddddd" );
    linelay5.AddChild( phasecolors );
    
    linelay6=app.CreateLayout("Linear","FillX,horizontal,left");
    linelay6.SetMargins(0,.03,0,0);
    layDlg3.AddChild( linelay6);
    
     txt=app.CreateText(" Calculator keypad colors ");
     txt.SetTextSize( fontsize4*font4adj,"dip");
    //txt.SetMargins( 0,0.077,0,0 );
    linelay6.AddChild( txt );
    
    keypadcolors = app.CreateSpinner("grey,carbon,blue,woodland,desert,sunrise,nightfall",0.5);
    keypadcolors.SelectItem( keytheme );
    keypadcolors.SetTextSize( fontsize4*font4adj,"dip");
    keypadcolors.SetTextColor( "#dddddd" );
    linelay6.AddChild( keypadcolors );
    
    linelay7=app.CreateLayout("Linear","FillX,horizontal,left");
    linelay7.SetMargins(0,.03,0,0);
    layDlg3.AddChild( linelay7);
    
    basiccalc = app.CreateCheckBox("Basic calculator");
    basiccalc.SetTextSize( fontsize4*font4adj,"dip");
    basiccalc.SetTextColor( "#dddddd" );
    basiccalc.SetMargins( 0.05,0.0,0,0 );
    if(basic)basiccalc.SetChecked(true); 
    linelay7.AddChild( basiccalc );
    
	
      enterbtn = app.CreateButton("[fa-reply]", .12, 0.07, "FontAwesome" ); 
       enterbtn.icon ="[fa-reply]" ;
       enterbtn.SetBackColor("grey");
       enterbtn.SetTextSize( fontsize3*font3adj,"dip");
       enterbtn.SetMargins(0,.1,0,0);
       enterbtn.SetOnTouch( userpref_ontouch ); 
        layDlg3.AddChild( enterbtn ); 
        
   
    dlgTxt.Show();
 }
 
function userpref_ontouch()
 {
 app.ShowProgressBar( "Processing...", 0 );
 imagnumbersymbol=symbol.GetText();
 imagpresuf=presuf.GetText();
 zerocolour=zerophcolor.GetText();
 phcolours=phasecolors.GetText();
 keytheme=keypadcolors.GetText();
 if(zeroval.GetChecked()==true)zero=true;
 else zero=false;
  if(basiccalc.GetChecked()==true)basic=true;
 else basic=false;
 
 app.SaveText( "imagsymbol", imagnumbersymbol );
 app.SaveText( "prefixsuffix", imagpresuf );
 app.SaveText( "zcolor", zerocolour );
 app.SaveText( "phcolors",phcolours);
 app.SaveText("theme",keytheme);
 app.SaveBoolean("zero",zero);
 app.SaveBoolean("basic",basic);
 imagbtn.SetText(imagnumbersymbol);
 
 if(imagpresuf=="prefix") {prefix=imagnumbersymbol;suffix="";}
 else {suffix=imagnumbersymbol;prefix="";}

 
 if(phcolours=="red white cyan"){colora="red";colorb="white";colorc="cyan";}
 if(phcolours=="red white blue"){colora="red";colorb="white";colorc="#33a1ff";}
 if(phcolours=="red yellow blue"){colora="red";colorb="yellow";colorc="#33a1ff";}
 if(phcolours=="red yellow blue (muted)"){colora="#dd5555";colorb="#dada77";colorc="#33a1d0";}
 if(phcolours=="magenta white cyan"){colora="magenta";colorb="white";colorc="cyan";}
  if(phcolours=="pink grey turquoise"){colora="#ff69b4";colorb="lightgrey";colorc="#40e0d0";}

  if(symphase=="a") phasebtn.SetTextColor(colora);
   if(symphase=="b") phasebtn.SetTextColor(colorb);
   if(symphase=="c")phasebtn.SetTextColor(colorc);
   
   if(keytheme=="grey"){keycolor1="grey";keycolor2="grey";keycolor3="grey";keycolor4="grey";keycolor5="grey";keycolor6="white";}
   if(keytheme=="woodland"){keycolor1="#ba916c";keycolor2="#ba916c";keycolor3="#6c95ba";keycolor4="#95ba6c";keycolor5="grey";keycolor6="white";}
   if(keytheme=="desert"){keycolor1="#b37400";keycolor2="#b37400";keycolor3="#ffa500";keycolor4="#ba916c";keycolor5="grey";keycolor6="white";}
   if(keytheme=="sunrise"){keycolor1="#33a1d0";keycolor2="#33a1d0";keycolor3="#ffa500";keycolor4="#95ba6c";keycolor5="grey";keycolor6="white";}
   if(keytheme=="carbon"){keycolor1="#000000";keycolor2="#000000";keycolor3="#000000";keycolor4="#000000";keycolor5="#000000";keycolor6="lightgrey";}
   if(keytheme=="blue"){keycolor1="#3d598b";keycolor2="#3d598b";keycolor3="#3d598b";keycolor4="#3d598b";keycolor5="#3d598b";keycolor6="white";}
   if(keytheme=="desert"){keycolor1="#b37400";keycolor2="#b37400";keycolor3="#ffa500";keycolor4="#ba916c";keycolor5="grey";keycolor6="white";}
  // if(keytheme=="light"){keycolor1="white";keycolor2="white";keycolor3="white";keycolor4="white";keycolor5="white";keycolor6="#33a1ff";}
    if(keytheme=="nightfall"){keycolor1="#8b6f3d";keycolor2="#8b6f3d";keycolor3="#483d8b";keycolor4="#3d808b";keycolor5="black";keycolor6="lightgrey";}
   digformat=digformat2;
   create_digital_input();
 	//Updateprogress(50);
   update();
   //Updateprogress(75);
   dlgTxt.Hide();
//   Updateprogress(100);
   app.HideProgressBar();
 
 }
 
 function AddButton( lay, name )
{
	w=0.1;
	btn = app.CreateButton( name, w, .08 );
	btn.SetTextSize( fontsize7*font3adj,"dip" );
	btn.SetMargins( 0.01, 0.01, 0.01, 0.01 );
	btn.SetBackColor( "grey" );
	btn.SetOnTouch( btns_OnTouch );
	lay.AddChild( btn );
}
 
 function btns_OnTouch()
 {
 
	//Get button text.
	btn = app.GetLastButton();
	var txt = btn.GetText();
	
	//Handle equals button.
	if( txt=="=" );// CalcResult();
	
	//Handle clear button.
	else if( txt=="C" )
	{     
	 scale="";
	
	}
	
	//Handle other buttons.
	else scale += txt;
	
	//Update display.
	gridscale.SetText( scale );
 }
 
 function font_dialog()
 {
 dlgTxt = app.CreateDialog( "Font Size Settings");
    
    //Create a layout for dialog.
    layDlg4 = app.CreateLayout( "linear", "vertical,center" );
    layDlg4.SetSize( 1, 0.8);
    dlgTxt.AddLayout( layDlg4 );
    
    
    linelay=app.CreateLayout("Linear","FillX,horizontal,right");
    linelay.SetMargins( 0.02,0.02,0,0 );
    layDlg4.AddChild( linelay);
    
    txt=app.CreateText("Digital input/output");
     txt.SetTextSize( fontsize4*font4adj,"dip");
    linelay.AddChild( txt );
   
    digitalfont = app.CreateSeekBar(.5);
    digitalfont.SetRange(2);
    digitalfont.SetValue(font1adj);
    digitalfont.SetMargins( 0, 0, 0.05, 0 );
    linelay.AddChild( digitalfont );
    
    
    
    linelay2=app.CreateLayout("Linear","FillX,horizontal,right");
    linelay2.SetMargins( 0.02,0.02,0,0 );
    layDlg4.AddChild( linelay2);
    
    txt=app.CreateText("Graphical text/labels");
     txt.SetTextSize( fontsize4*font4adj,"dip");
    linelay2.AddChild( txt );
    
    labelsfont = app.CreateSeekBar(0.5);
    labelsfont.SetRange(2);
    labelsfont.SetValue( font2adj);
    labelsfont.SetMargins( 0, 0, 0.05, 0 );
    linelay2.AddChild( labelsfont );
    
    
    
    linelay3=app.CreateLayout("Linear","FillX,horizontal,right");
   linelay3.SetMargins( 0.02,0.02,0,0 );
     layDlg4.AddChild( linelay3);
    
    txt=app.CreateText("Menus/Dialog screens");
    txt.SetTextSize( fontsize4*font4adj,"dip");
    linelay3.AddChild( txt );
   
    dialogfont = app.CreateSeekBar( 0.5);
    dialogfont.SetRange(2);
    dialogfont.SetValue( font4adj);
    dialogfont.SetMargins( 0, 0, 0.05, 0 );
    linelay3.AddChild( dialogfont ); 
    
    linelay4=app.CreateLayout("Linear","FillX,horizontal,right");
   linelay4.SetMargins( 0.02,0.02,0,0 );
     layDlg4.AddChild( linelay4);
    
    txt=app.CreateText("Keypads");
    txt.SetTextSize( fontsize4*font4adj,"dip");
    linelay4.AddChild( txt );
   
    btnfont = app.CreateSeekBar( 0.5);
    btnfont.SetRange(2);
    btnfont.SetValue( font3adj);
    btnfont.SetMargins( 0, 0, 0.05, 0 );
    linelay4.AddChild( btnfont );
    
     linelay5=app.CreateLayout("Linear","FillX,horizontal,right");
   linelay5.SetMargins( 0.02,0.02,0,0 );
     layDlg4.AddChild( linelay5);
    
    txt=app.CreateText("Menu");
    txt.SetTextSize( fontsize4*font4adj,"dip");
   // linelay5.AddChild( txt );
   
    menufont = app.CreateSeekBar( 0.5);
    menufont.SetRange(2);
    menufont.SetValue( font5adj);
    menufont.SetMargins( 0, 0, 0.05, 0 );
  //  linelay5.AddChild( menufont ); 
    
      resetbtnd = app.CreateButton("[fa-undo]", 0.07/aspectratio*font3adj/aspectratio, 0.07, "FontAwesome" ); 
      resetbtnd.icon ="[fa-undo]" ;
       resetbtnd.SetBackColor("grey");
       resetbtnd.SetTextSize( fontsize7*font3adj,"dip");
       resetbtnd.SetOnTouch(fontresetbtn_onenter ); 
        layDlg4.AddChild( resetbtnd ); 
     
      enterbtn = app.CreateButton("[fa-reply]", 0.07/aspectratio*font3adj/aspectratio, 0.07, "FontAwesome" ); 
       enterbtn.icon ="[fa-reply]" ;
       enterbtn.SetBackColor("grey");
       enterbtn.SetTextSize( fontsize7*font3adj,"dip");
       enterbtn.SetMargins( 0.01, 0.01, 0.01, 0.01 );
       enterbtn.SetOnTouch( fontbtn_onenter ); 
        layDlg4.AddChild( enterbtn ); 
      
    
    
    dlgTxt.Show();
 }
 
 function gridbtn_ontouch()
 {
   dlgTxt.Hide();
   imgback.Hide();
   imgseqback.Hide();
   
   imgback.SetPaintColor(gridcolour1);
   imgseqback.SetPaintColor(gridcolour2);
   if(gridon.GetChecked()){imgback.Show();grid=true;}else{grid=false;}
   if(gridonsym.GetChecked()){imgseqback.Show();gridsym=true;}else{gridsym=false;}
  
   linesize=linewidth.GetValue();
   
   div=gridscale.GetText()/scale;
   
   scale=gridscale.GetText();
   scalefactor=scale*5;
   resetvalue=reset_value.GetText();
  

   if(coord=="Rectangular")draw_rectangular_background();
   if(coord=="Polar")draw_polar_background();
   reala=reala/div;
   imaga=imaga/div;
   realb=realb/div;
   imagb=imagb/div;
   realc=realc/div;
   imagc=imagc/div;
   maga=maga/div;
   magb=magb/div;
   magc=magc/div;
   real1a=real1a/div;
   imag1a=imag1a/div;
   real2a=real2a/div;
   imag2a=imag2a/div;
   real0a=real0a/div;
   imag0a=imag0a/div;
   real1b=real1b/div;
   imag1b=imag1b/div;
   real2b=real2b/div;
   imag2b=imag2b/div; 
   real0b=real0b/div;
   imag0b=imag0b/div;
   real1c=real1c/div;
   imag1c=imag1c/div;
   real2c=real2c/div;
   imag2c=imag2c/div;
   real0c=real0c/div;
   imag0c=imag0c/div;
 
   imgposseq.Clear();
   draw_seq_components();
   calculate_seq_components();
   imgfront.Clear();
   show_vectors();
   update_components();
   imgfront.Update();  
   
update();   

app.SaveBoolean( "grid", grid );
app.SaveBoolean( "gridsym", gridsym );
app.SaveNumber("scale",scale);
app.SaveNumber("resetvalue",resetvalue);
app.SaveNumber("linesize",linesize);
app.SaveText( "gridcolour1", gridcolour1 );
app.SaveText( "gridcolour2", gridcolour2 );  
 }
 
 function magnify()
 {
   div=Math.sqrt(2);
   scale=scale*div;
   scalefactor=scale*5;
   

   if(coord=="Rectangular")draw_rectangular_background();
   if(coord=="Polar")draw_polar_background();
   
   
   reala=reala/div;
   imaga=imaga/div;
   realb=realb/div;
   imagb=imagb/div;
   realc=realc/div;
   imagc=imagc/div;
   maga=maga/div;
   magb=magb/div;
   magc=magc/div;
   real1a=real1a/div;
   imag1a=imag1a/div;
   real2a=real2a/div;
   imag2a=imag2a/div;
   real0a=real0a/div;
   imag0a=imag0a/div;
   real1b=real1b/div;
   imag1b=imag1b/div;
   real2b=real2b/div;
   imag2b=imag2b/div; 
   real0b=real0b/div;
   imag0b=imag0b/div;
   real1c=real1c/div;
   imag1c=imag1c/div;
   real2c=real2c/div;
   imag2c=imag2c/div;
   real0c=real0c/div;
   imag0c=imag0c/div;
   imgposseq.Clear();
   draw_seq_components();
   calculate_seq_components();
   imgfront.Clear();
   show_vectors();
   update_components();
   imgfront.Update();
   if(fault)
   {
    imgcurrent.Clear();
            imgcurrent.SetPaintColor(colora);
  	        imgcurrent.DrawText("Ia = "+asign+imagnumbersymbol+Math.round(Ia*100)/100,.55,.2);
  	        imgcurrent.SetPaintColor(colorb);
  	        imgcurrent.DrawText("Ib = "+imagnumbersymbol+Math.round(Ib*100)/100,.55,.3);
  	        imgcurrent.SetPaintColor(colorc);
  	        imgcurrent.DrawText("Ic = "+imagnumbersymbol+Math.round(Ic*100)/100,.55,.4);
  	        imgcurrent.SetLineWidth(4);
  	        imgcurrent.SetPaintColor(colora);
  	        for(i=0;i<Ia/scalefactor*10;i++)
  	        {
  	        imgcurrent.DrawLine(0.5,0.5+i/20,0.5,0.5+i/20+1/40);
  	        }
  	        imgcurrent.Update();
   }


 }
 function magnify2()
 {
   div=Math.sqrt(2);
   scale=scale/div;
   scalefactor=scale*5;
   

   if(coord=="Rectangular")draw_rectangular_background();
   if(coord=="Polar")draw_polar_background();
  reala=reala*div;
   imaga=imaga*div;
   realb=realb*div;
   imagb=imagb*div;
   realc=realc*div;
   imagc=imagc*div;
   maga=maga*div;
   magb=magb*div;
   magc=magc*div;
   real1a=real1a*div;
   imag1a=imag1a*div;
   real2a=real2a*div;
   imag2a=imag2a*div;
   real0a=real0a*div;
   imag0a=imag0a*div;
   real1b=real1b*div;
   imag1b=imag1b*div;
   real2b=real2b*div;
   imag2b=imag2b*div; 
   real0b=real0b*div;
   imag0b=imag0b*div;
   real1c=real1c*div;
   imag1c=imag1c*div;
   real2c=real2c*div;
   imag2c=imag2c*div;
   real0c=real0c*div;
   imag0c=imag0c*div;
   imgposseq.Clear();
   draw_seq_components();
//   imgposseq.Update();
   imgfront.Clear();
   show_vectors();
   update_components();
   imgfront.Update();
 //   update();   
  if(fault)
   {
   imgcurrent.Clear();
            imgcurrent.SetPaintColor(colora);
  	        imgcurrent.DrawText("Ia = "+asign+imagnumbersymbol+Math.round(Ia*100)/100,.55,.2);
  	        imgcurrent.SetPaintColor(colorb);
  	        imgcurrent.DrawText("Ib = "+imagnumbersymbol+Math.round(Ib*100)/100,.55,.3);
  	        imgcurrent.SetPaintColor(colorc);
  	        imgcurrent.DrawText("Ic = "+imagnumbersymbol+Math.round(Ic*100)/100,.55,.4);
  	        imgcurrent.SetLineWidth(4);
  	        imgcurrent.SetPaintColor(colora);
  	        for(i=0;i<Ia/scalefactor*10;i++)
  	        {
  	        imgcurrent.DrawLine(0.5,0.5+i/20,0.5,0.5+i/20+1/40);
  	        }
  	        imgcurrent.Update();
   }
 
 }
 
function fontbtn_onenter()
{
font1adj=digitalfont.GetValue();
font2adj=labelsfont.GetValue();
font3adj=btnfont.GetValue();
font4adj=dialogfont.GetValue();
font5adj=font4adj;

imgnumbers.SetTextSize(fontsize1*font1adj,"dip");
imgnumbers2.SetTextSize(fontsize1*font1adj,"dip");
pixelswide=app.GetScreenWidth();

if(pixelswide>768)xstepmaster=fontsize1*font1adj*Math.pow(pixelswide/768,2);
if(pixelswide<768)xstepmaster=fontsize1*font1adj*Math.pow(768/pixelswide,1.5);
if(pixelswide==768)xstepmaster=fontsize1*font1adj*Math.pow(pixelswide/768,2);

imgfront.SetTextSize(fontsize2*font2adj,"dip");
imgposseq.SetTextSize(fontsize2*font2adj,"dip");

update();
if(coord=="Polar")draw_polar_background();
else draw_rectangular_background();
imgbackground.Clear();
imgseqbackground.Clear();
imgbackground.DrawLine( 0,0,1,0 );
	imgbackground.DrawLine( 0,0,0,1 );
  imgbackground.SetLineWidth(2*linesize);
	imgbackground.DrawLine( 0,.998,1,.998 );
	imgbackground.DrawLine( .998,0,.998,1);
	imgbackground.SetPaintColor( gridcolour1 );
	imgbackground.SetLineWidth(linesize);
imgbackground.SetTextSize( fontsize6*font2adj,"dip");
imgbackground.DrawText("Unbalanced phasors", 0.61,0.04 );
imgseqbackground.SetLineWidth( 1.5 *linesize);
  imgseqbackground.SetTextSize( fontsize6*font2adj,"dip");
  imgseqbackground.DrawLine( 0,0,1,0);
  imgseqbackground.DrawText( "Positive",poscenter+.01,0.09);
  imgseqbackground.DrawLine( 0,0,0,1);
  imgseqbackground.DrawText( "Negative",negcenter+.01,0.09);
  imgseqbackground.DrawLine( 0,1,1,1);
  imgseqbackground.DrawText( "Zero",zerocenter+.01,0.09);
  imgseqbackground.DrawLine(1,0,1,1);
settingsbtn.SetTextSize(fontsize3*font3adj,"dip");
infobtn.SetTextSize(fontsize3*font3adj,"dip");
infobtn2.SetTextSize(fontsize3*font3adj,"dip");
sumbtn.SetTextSize( fontsize3*font3adj, "dip");
labelsbtn.SetTextSize( fontsize3 *font3adj,"dip");
phasebtn.SetTextSize( fontsize3 *font3adj,"dip");
resetbtn.SetTextSize( fontsize3 *font3adj,"dip");
exitbtn.SetTextSize( fontsize3 *font3adj,"dip");
btn.SetTextSize( fontsize3 *font3adj/1.5,"dip");
dlgTxt.Hide();
lstMenu2.SetTextSize( fontsize5*font5adj, "dip" );
txttitle.SetTextSize( fontsize5*font5adj*1.4, "dip" );
txttitle2.SetTextSize( fontsize5*font5adj, "dip" );
txtTitle.SetTextSize( fontsize5*font5adj*1.2, "dip" );
app.SaveNumber( "font1adj", font1adj );
app.SaveNumber( "font2adj", font2adj );
app.SaveNumber( "font3adj", font3adj );
app.SaveNumber( "font4adj", font4adj );
app.SaveNumber( "font5adj", font5adj );
create_digital_input();
} 
  
  function fontresetbtn_onenter()
  {
  digitalfont.SetValue(1);
  labelsfont.SetValue(1);
  dialogfont.SetValue(1);
  btnfont.SetValue(1);
  menufont.SetValue(1);
  }
  
  
  
  function showbtnc_ontouch()
 {
 
 setmenu.Animate( "SlideFromLeft" );
  
  }
  
 
  
  function clear_components()
  {
 // if (showbtn==true)return;
  imgfront.Clear();
  imgfront.SetPaintColor( colora );
  imgfront.DrawLine((1+reala)/2,(1-imaga)/2,0.5,0.5 );
//  imga.DrawText(maga+" pu "+angadeg+" deg",0.0,0.04 );
imgfront.SetPaintColor( colorb );
  imgfront.DrawLine((1+realb)/2,(1-imagb)/2,0.5,0.5 );
//  imgb.DrawText(magb+" pu "+angbdeg+" deg",0.35,0.04 );
imgfront.SetPaintColor( colorc );
  imgfront.DrawLine((1+realc)/2,(1-imagc)/2,0.5,0.5 );
//  imgc.DrawText(magc+" pu "+angcdeg+" deg",0.7,0.04 );
 // showbtnall=false;
  
 // imgb.Update();
 //show_labels();
  
 }
 
 function finish_components()
  {
 
   if (showbtnall==true)show_components();
  
   show_labels();
  
  }
  
  function show_vectors()
  {
    imgfront.SetPaintColor( colora );
  	imgfront.DrawLine( (reala+1)/2,(1-imaga)/2,0.5,0.5);
  	imgfront.SetPaintColor( colorb );
  	imgfront.DrawLine((realb+1)/2,(1-imagb)/2,0.5,0.5 );
  	imgfront.SetPaintColor( colorc );
  	imgfront.DrawLine((realc+1)/2,(1-imagc)/2,0.5,0.5 );
  	 //if(showbtnall==true)show_components();     
  }
  
  function show_text()
  {
  //imgnumbers.Clear();
  if(coord=="Polar")
  {
  if (angularunits=="Degrees"){convfac=180/p;roundfac=roundfactor/100,unit=" deg"}
  if (angularunits=="Radians"){convfac=1;roundfac=roundfactor;unit=" rad"}
//redtxt.SetText(Math.round(maga*scalefactor*roundfactor)/roundfactor+", "+(Math.round(anga*convfac*roundfac))/roundfac+unit,0,.04);
    imgnumbers.SetPaintColor( colora );
  	imgnumbers.DrawText( "A="+Math.round(maga*scalefactor*roundfactor)/roundfactor+", "+(Math.round(anga*convfac*roundfac))/roundfac+unit,0.0,.3);
  	imgnumbers.SetPaintColor( colorb );
  	
  	imgnumbers.DrawText( "B="+Math.round(magb*scalefactor*roundfactor)/roundfactor+", "+(Math.round(angb*convfac*roundfac))/roundfac+unit,0,.6);
  	imgnumbers.SetPaintColor( colorc );
  
  	imgnumbers.DrawText("C=" +Math.round(magc*scalefactor*roundfactor)/roundfactor+", "+(Math.round(angc*convfac*roundfac))/roundfac+unit,0,.9);
  }
  else
  {
  signa="+";
  signb="+";
  signc="+";
  if(imaga<0)signa="-";
  if(imagb<0)signb="-";
  if(imagc<0)signc="-";
  if(imagpresuf=="prefix"){prefix=imagnumbersymbol;suffix="";} else {prefix ="";suffix=imagnumbersymbol;}

  imgnumbers.SetPaintColor( colora );
  if(Math.abs(imaga)<0.0000001 && !zero)imgnumbers.DrawText( "A="+Math.round(reala*scalefactor*roundfactor)/roundfactor,0,.3);
  else imgnumbers.DrawText( "A="+Math.round(reala*scalefactor*roundfactor)/roundfactor+signa+prefix+Math.abs(Math.round(imaga*scalefactor*roundfactor)/roundfactor)+suffix,0.0,.3);
  imgnumbers.SetPaintColor( colorb );
  if(Math.abs(imagb)<0.0000001 && !zero)imgnumbers.DrawText( "B="+Math.round(realb*scalefactor*roundfactor)/roundfactor,0,.6);
  else imgnumbers.DrawText( "B="+Math.round(realb*scalefactor*roundfactor)/roundfactor+signb+prefix+Math.abs(Math.round(imagb*scalefactor*roundfactor)/roundfactor)+suffix,0,.6);
   imgnumbers.SetPaintColor( colorc );
   if(Math.abs(imagc)<=0.0000001 && !zero)imgnumbers.DrawText( "C="+Math.round(realc*scalefactor*roundfactor)/roundfactor,0,.9);
  else imgnumbers.DrawText( "C="+Math.round(realc*scalefactor*roundfactor)/roundfactor+signc+prefix+Math.abs(Math.round(imagc*scalefactor*roundfactor)/roundfactor)+suffix,0,.9);
  }
  //imgnumbers.Update();
  }
  
  function phasebtn_ontouch()
  {
   imgnumbers2.Clear();
   if(symphase=="a")
   {
   symphase="b";
   phasebtn.SetTextColor(colorb);
   
   } 
   else  
   {
   if(symphase=="b")
   {
   symphase="c"; 
    phasebtn.SetTextColor(colorc);
   }
   else
   {
   if(symphase=="c")symphase="a";
   phasebtn.SetTextColor(colora);
   }
   }
     
   show_seq_text();
   imgnumbers2.Update();
  }
  
  function show_seq_text()
  {
  if(symphase=="a")
  {
   real1=real1a;
   real2=real2a;
   real0=real0a;
   imag1=imag1a;
   imag2=imag2a;
   imag0=imag0a;
   symmag1=mag1a;
   symmag2=mag2a;
   symmag0=mag0a;
   symang1=ang1a;
   symang2=ang2a;
   symang0=ang0a;
   imgnumbers2.SetPaintColor(colora);
   }
  if(symphase=="b")
  {
  real1=real1b;
   real2=real2b;
   real0=real0a;
   imag1=imag1b;
   imag2=imag2b;
   imag0=imag0a;
   symmag1=mag1a;
   symmag2=mag2a;
   symmag0=mag0a;
   symang1=ang1a-2*p/3;
   symang2=ang2a+2*p/3;
   symang0=ang0a;
    imgnumbers2.SetPaintColor(colorb);
   }
   if(symphase=="c")
  {
  real1=real1c;
   real2=real2c;
   real0=real0a;
   imag1=imag1c;
  imag2=imag2c;
   imag0=imag0a;
  symmag1=mag1a;
   symmag2=mag2a;
   symmag0=mag0a;
   symang1=ang1a+2*p/3;
   symang2=ang2a-2*p/3;
   symang0=ang0a;
    
    imgnumbers2.SetPaintColor(colorc);
   }
  
  if(coord=="Polar")
  {
  if(symang1>p)symang1=symang1-2*p;
 if(symang2>p)symang2=symang2-2*p;  
 if(symang0>p)symang0=symang0-2*p;  
  if(symang1<-p)symang1=symang1+2*p;
  if(symang2<-p)symang2=symang2+2*p;
  
  if (angularunits=="Degrees"){convfac=180/p;roundfac=roundfactor/100,unit=" deg"}
  if (angularunits=="Radians"){convfac=1;roundfac=roundfactor;unit=" rad"}

  imgnumbers2.DrawText(symphase+"1= "+Math.round(symmag1*roundfactor*scalefactor)/roundfactor+", "+(Math.round(symang1*convfac*roundfac))/roundfac+unit,0.0,.3 );
  imgnumbers2.DrawText(symphase+"2= "+Math.round(symmag2*roundfactor*scalefactor)/roundfactor+", "+(Math.round(symang2*convfac*roundfac))/roundfac+unit,0,0.6 );
  imgnumbers2.DrawText(symphase+"0= "+Math.round(symmag0*roundfactor*scalefactor)/roundfactor+", "+(Math.round(symang0*convfac*roundfac))/roundfac+unit,0,0.9 );

  }
  else
  {
  sign1="+";
  sign2="+";
  sign0="+";

     if(imag1<0)sign1="-";
     if(imag2<0)sign2="-";
     if(imag0<0)sign0="-";
  if(Math.abs(imag1)<0.0000001 && !zero)imgnumbers2.DrawText(symphase+"1= "+Math.round(real1*scalefactor*roundfactor)/roundfactor,0,.3);
  else imgnumbers2.DrawText(symphase+"1= "+Math.round(real1*scalefactor*roundfactor)/roundfactor+sign1+prefix+Math.abs(Math.round(imag1*scalefactor*roundfactor)/roundfactor)+suffix,0.0,0.3 );
   if(Math.abs(imag2)<0.0000001 && !zero)imgnumbers2.DrawText(symphase+"2= "+Math.round(real2*scalefactor*roundfactor)/roundfactor,0,.6);
  else imgnumbers2.DrawText(symphase+"2= "+Math.round(real2*scalefactor*roundfactor)/roundfactor+sign2+prefix+Math.abs(Math.round(imag2*scalefactor*roundfactor)/roundfactor)+suffix,0,0.6 );
   if(Math.abs(imag0)<0.0000001 && !zero)imgnumbers2.DrawText(symphase+"0= "+Math.round(real0*scalefactor*roundfactor)/roundfactor,0,.9);
  else imgnumbers2.DrawText(symphase+"0= "+Math.round(real0*scalefactor*roundfactor)/roundfactor+sign0+prefix+Math.abs(Math.round(imag0*scalefactor*roundfactor)/roundfactor)+suffix,0,0.9 );
  }
  }
  
  function update()
  {
   imgnumbers.Clear();
  imgnumbers2.Clear();
  clear_components();
  calculate_seq_components();
  //calculate_seq_phasors();
  draw_seq_components();
  finish_components();
  show_text();
  imgfront.Update();
  imgnumbers.Update();
  imgnumbers2.Update();
  }
  
  
//  **************************SETTINGS MENU*********************************
  
  function CreateSettingsMenu()
{
   //Create a layout for the drawer.
	//(Here we also put it inside a scroller to allow for long menus)
//	drawerWidth = 0.8;
setmenu = app.CreateLayout( "Linear", "FillXY" );
	setmenu.SetPadding( 0, 0, 0, 0 ); 
	setmenu.SetBackColor( "white" );
	setmenu.SetVisibility( "Hide" );

		
		//Add title to top layout.
	txttitle = app.CreateText( "Symetrical Components App");
//	txttitle.SetPosition( 0.05, 0.015 );
	txttitle.SetTextColor( "darkgrey" );
	txttitle.SetTextSize( fontsize5*font5adj*1.4, "dip" );
		setmenu.AddChild( txttitle );
		
		txttitle2=app.CreateText("[fa-copyright] 2019 ",0.65,.1,"FontAwesome");
		txttitle2.SetPosition( 0, 0.055 );
	txttitle2.SetTextColor( "darkgrey" );
	txttitle2.SetTextSize( fontsize5*font5adj, "dip" );
		setmenu.AddChild( txttitle2 );
	

    
    //Add title between menus.
	txtTitle = app.CreateText( "Settings");
  txtTitle.SetTextColor( "darkgrey" );
 // txtTitle.SetTextShadow( 3,1,1,"red" );
	txtTitle.SetMargins( 16,12,0,0, "dip" );
	txtTitle.SetTextSize( fontsize5*font5adj*1.2, "dip" );
	setmenu.AddChild( txtTitle );
	
    //Add a second list to menu layout.
    var listItems = "Coordinate System,Angular Units,Decimal Places,Grid settings,Font size,User preferences";
    lstMenu2 = app.CreateList( listItems);
    lstMenu2.SetColumnWidths( -1, 0.5, 0.18 );
    lstMenu2.SetSize( .8,.4 );
    lstMenu2.SetTextSize( fontsize5*font5adj, "dip" );
    lstMenu2.SetTextColor( "darkgrey" );
    lstMenu2.SetOnTouch( lstMenu_OnTouch );
    setmenu.AddChild( lstMenu2 );
    
   //Create a button.
    btn = app.CreateButton( "Exit Settings" );
    btn.SetTextSize(fontsize3*font3adj/1.5,"dip");
    btn.SetMargins( 0, 0.02, 0, 0 );
    btn.SetOnTouch( exitsetmenu );
    setmenu.AddChild( btn );
   
	
}
function exitsetmenu()
{
setmenu.Animate( "SlideToLeft" );
}
//Handle menu item selection.
function lstMenu_OnTouch( title, body, type, index )
{
    //Close the drawer.
  //  app.CloseDrawer( "Left" );
    
    //Highlight the chosen menu item in the appropriate list.
  //  if( this==lstMenu1 ) lstMenu2.SelectItemByIndex(-1);
   // else lstMenu1.SelectItemByIndex(-1);
 //   this.SelectItemByIndex( index, true );
 

  if(title=="Coordinate System"){coordinate_system();}
  if(title=="Angular Units"){unit_function();}
  if(title=="Decimal Places"){decimal_function();}
  if(title=="Grid settings"){grid_dialog();}
  if(title=="Font size"){font_dialog();}
  if(title=="User preferences"){user_preferences();}
  if(title=="Close menu")exitsetmenu();
  }
  
function close_function()
{
app.CloseDrawer( "Right" );
}

function coordinate_system()
{
dlgTxt = app.CreateDialog( "Coordinate System" );
    
    //Create a layout for dialog.
    layDlg5 = app.CreateLayout( "linear", "vertical,fillxy,left" );
    layDlg5.SetPadding( 0.02, 0, 0.02, 0.02 );
    dlgTxt.AddLayout( layDlg5 );

    //Create a list control.
    var list = "Rectangular,Polar";
    lstDlg = app.CreateList( list, 0.6, 0.4 );
    lstDlg.SetTextSize( fontsize4*font4adj,"dip");
    lstDlg.SetTextColor( "#dddddd" );
    lstDlg.SetOnTouch( setcoord_OnTouch );
    layDlg5.AddChild( lstDlg );
    
    //Show dialog.
    dlgTxt.Show();
}

function unit_function()
{
dlgTxt = app.CreateDialog( "Angular Units" );
    
    //Create a layout for dialog.
    layDlg6 = app.CreateLayout( "linear", "vertical,fillxy,left" );
    layDlg6.SetPadding( 0.02, 0, 0.02, 0.02 );
    dlgTxt.AddLayout( layDlg6 );

    //Create a list control.
    var list = "Degrees,Radians";
    lstDlg = app.CreateList( list, 0.6, 0.4 );
    lstDlg.SetTextSize( fontsize4*font4adj,"dip" );
    lstDlg.SetTextColor( "#dddddd" );
    lstDlg.SetOnTouch( setunit_OnTouch,"dip" );
    layDlg6.AddChild( lstDlg );
    
    //Show dialog.
    dlgTxt.Show();
}

function decimal_function()
{
dlgTxt = app.CreateDialog( "Decimal Places" );
    
    //Create a layout for dialog.
    layDlg7 = app.CreateLayout("linear", "vertical,fillxy,center" );
    layDlg7.SetPadding( 0.02, 0, 0.02, 0.02 );
    layDlg7.SetSize( 0.4,-1 );
    dlgTxt.AddLayout( layDlg7 );

    //Create a list control.
    var list = "0,1,2,3,4,5,6,7,8";
    lstDlg = app.CreateList( list, 0.3, 0.5 );
    lstDlg.SetTextSize( fontsize4*font4adj,"dip" );
    lstDlg.SetTextColor( "#dddddd" );
    lstDlg.SetOnTouch( setdecimal_OnTouch,"dip" );
    layDlg7.AddChild( lstDlg );

 //uix = app.CreateUIExtras();
 
// picker = uix.CreateNumberPicker( decimalplaces,"NoCycle" );
// picker.SetRange( 0, 8);
// picker.SetDecimalPlaces(0);

// layDlg7.AddChild( picker );

decenterbtn = app.CreateButton("[fa-reply]", keysize, -1, "FontAwesome,Custom" ); 
       decenterbtn.icon ="[fa-reply]" ;
       decenterbtn.SetStyle( keycolor5, keycolor5);
 //      enterbtn.SetBackGradient("white","grey");
       decenterbtn.SetTextSize( fontsize3*font3adj,"dip");
       decenterbtn.SetTextColor(keycolor6);
       decenterbtn.SetMargins(0.00,0.05,0.00,0.00);
       decenterbtn.SetOnTouch( setdecimal_OnTouch ); 
//        layDlg7.AddChild( decenterbtn );
    
    //Show dialog.
    dlgTxt.Show();
}

function setcoord_OnTouch(item)
{
coord=item;
dlgTxt.Hide();

calculate_seq_components();

if(coord=="Polar")draw_polar_background();
else draw_rectangular_background();
imgnumbers.Clear();
show_text();
imgnumbers.Update()
imgnumbers2.Clear();
show_seq_text();
imgnumbers2.Update();
imgseqback.Update();
//update_digital_input(); // also update the digital input screen

    app.SaveText( "Coord", coord );

}



function setunit_OnTouch(item)
{
angularunits=item;
if(coord=="Polar")draw_polar_background();
if(angularunits=="Radians"){roundfactora=roundfactor;} else {roundfactora=10;}
dlgTxt.Hide();
imgfront.Clear();
show_text();
show_vectors();
//calculatecomponents();
//finish_components();
//imgfront.Update();
update();
//update_sym_text();
//app.CloseDrawer(  );
if(angularunits=="Radians")radbtn.SetText("rad");else radbtn.SetText("deg");
app.SaveText( "angularunits", angularunits );
angunits.SelectItem(angularunits);

}
function setunit_OnTouch2(item)
{
angularunits=item;
if(coord=="Polar")draw_polar_background();
if(angularunits=="Radians"){roundfactora=roundfactor;} else {roundfactora=10;}
//if(dlgTxt)dlgTxt.Hide();
imgfront.Clear();
show_text();
show_vectors();
//calculatecomponents();
//finish_components();
//imgfront.Update();
update();
//update_sym_text();
//app.CloseDrawer(  );
if(angularunits=="Radians")radbtn.SetText("rad");else radbtn.SetText("deg");
app.SaveText( "angularunits", angularunits );

}

function setdecimal_OnTouch(item)
{
decimalplaces=item;
dlgTxt.Hide();

app.SaveNumber( "decimal", decimalplaces );
roundfactor=Math.pow(10,decimalplaces);
update();
}

function setdecimal_OnTouch2(item)
{
decimalplaces=item;

app.SaveNumber( "decimal", decimalplaces );
roundfactor=Math.pow(10,decimalplaces);
update();
}

//*************    KEYBOARD CODE   **************
//Add a button to a given layout.
function AddButton2( lay, name )
  {
		if (name=="p")
	{
	pi=app.CreateButton("&pi",keysize,0.062,"Html,Link,Custom");
	pi.SetStyle( keycolor1, keycolor1);
		pi.SetMargins( 0.00, 0.00, 0, 0.00 );
		pi.SetTextSize( fontsize7*font3adj*1,"dip");
//	pi.SetBackGradient("olive","olive");
	pi.SetOnTouch( pi_OnTouchDown);
	lay.AddChild( pi );
	pi.SetTextColor(keycolor6);
//  pi.SetLineWidth(fontsize3*font3adj*.12);
//  pi.DrawLine(.29,.3,.71,.3);
//  pi.DrawLine(.42,.3,.42,.7);
//  pi.DrawLine(.58,.3,.58,.7);
	}
  		else	if (name=="}")
	{
	gle=app.CreateButton("&ang",keysize,0.062,"Html,Link,Custom");
	gle.SetStyle( keycolor4, keycolor4);
	gle.SetTextSize( fontsize7*font3adj*1,"dip");
	gle.SetTextColor(keycolor6);
	gle.SetOnTouch( gle_OnTouchDown);
	lay.AddChild( gle);
}
	else	if (name=="phi")
	{
	phi=app.CreateButton("&#966",keysize,0.062,"Html,Custom");
	phi.SetStyle( keycolor1, keycolor1);
	phi.SetTextSize( fontsize7*font3adj*1,"dip");
	phi.SetMargins( 0., 0, 0.048, 0 );
	phi.SetTextColor(keycolor6);
	phi.SetOnTouch( phi_OnTouchDown);
	lay.AddChild( phi);
}
		else	if (name=="sqrt")
	{
	sqrtbtn=app.CreateButton("<sup><sup><small><small><small>2</small></small></small></sup></sup>&#8730",keysize,0.062,"Html,Link,Custom");
	sqrtbtn.SetStyle( keycolor1, keycolor1);
	sqrtbtn.SetTextSize( fontsize7*font3adj*1,"dip");
	sqrtbtn.SetTextColor(keycolor6);
	sqrtbtn.SetMargins( 0., 0, 0.0, 0 );
	sqrtbtn.SetOnTouch( sqrtbtn_OnTouchDown);
	lay.AddChild( sqrtbtn);
}

else	if (name=="sqrt3")
	{
	sqrtbtn3=app.CreateButton("<sup><sup><small><small><small>3</small></small></small></sup></sup>&#8730",keysize,0.062,"Html,Link,Custom");
	sqrtbtn3.SetStyle( keycolor1, keycolor1);
	sqrtbtn3.SetTextSize( fontsize7*font3adj*1,"dip");
	sqrtbtn3.SetTextColor(keycolor6);
	sqrtbtn3.SetMargins( 0., 0, 0.0, 0 );
	sqrtbtn3.SetOnTouch( sqrtbtn3_OnTouchDown);
	lay.AddChild( sqrtbtn3);
}

	else	if (name=="x2")
	{
	sqbtn=app.CreateButton("x<sup><sup><small><small><small>2</small></small></small></sup>",keysize,0.062,"Html,Link,Custom");
	sqbtn.SetStyle( keycolor1, keycolor1);
	sqbtn.SetTextSize( fontsize7*font3adj*1,"dip");
	sqbtn.SetTextColor(keycolor6);
	sqbtn.SetMargins( 0., 0, 0.0, 0 );
	sqbtn.SetOnTouch( sqbtn_OnTouchDown);
	lay.AddChild( sqbtn);
}
else	if (name=="x3")
	{
	sqbtn3=app.CreateButton("x<sup><sup><small><small><small>3</small></small></small></sup>",keysize,0.062,"Html,Link,Custom");
	sqbtn3.SetStyle( keycolor1, keycolor1);
	sqbtn3.SetTextSize( fontsize7*font3adj*1,"dip");
	sqbtn3.SetTextColor(keycolor6);
	sqbtn3.SetMargins( 0., 0, 0.0, 0 );
	sqbtn3.SetOnTouch( sqbtn3_OnTouchDown);
	lay.AddChild( sqbtn3);
}
else	if (name=="e2")
	{
	e2btn=app.CreateButton("e<sup><sup><small><small><small>"+imagnumbersymbol+"</small></small></sup>",keysize,.062,"Html,Link,Custom");
	e2btn.SetStyle( keycolor1, keycolor1);
	e2btn.SetTextSize( fontsize7*font3adj*1,"dip");
	e2btn.SetTextColor(keycolor6);
	e2btn.SetMargins( 0., 0, 0.048, 0 );
	e2btn.SetOnTouch( e2_OnTouchDown);
	lay.AddChild( e2btn);
}
  	else if (name=="e1")
	{
	
	ebtn1=app.CreateButton("x<sup><sup><small><small><small>y</sup></sup></small></small></small>",keysize,.062,"Custom,Html");
	ebtn1.SetMargins( 0.00, 0.00, 0.048, 0.00 );
	ebtn1.SetStyle( keycolor1, keycolor1 );
	ebtn1.SetTextColor(keycolor6);
	ebtn1.SetOnTouch( e1_OnTouchDown);
	lay.AddChild( ebtn1 );
	ebtn1.SetTextSize( fontsize7*font3adj,"dip");
	}
	
	else if (name=="rad")
	{
	if(angularunits=="Radians")txt="rad";else txt="deg";
	radbtn=app.CreateButton(txt,keysize,.062,"Custom");
	radbtn.SetStyle( keycolor2, keycolor2);
//	radbtn.SetMargins( 0.005, 0.005, 0.005, 0.005 );
//	radbtn.SetBackGradient( "#ff8800","#cc5500");
	radbtn.SetTextColor(keycolor6);
	radbtn.SetOnTouch( btn_OnTouch);
	lay.AddChild( radbtn );
	radbtn.SetTextSize( fontsize7*font3adj*.65,"dip");  //*.65

	}
	else
	{
	if(name=="Clear"||name=="reset"||name=="Cartesian"){wide=1;}else{wide=1;}
	if(name=="="){wide=1;}
		if(name=="<"||name==">"){hite=1;}else hite=1;
//	if(name=="sin"||name=="cos"){wide=1.6;}
	if(name!=imagnumbersymbol)
	{
  
	btn = app.CreateButton(name,keysize*wide,.062,"Custom");
	btn.SetTextColor( keycolor6);
  btn.SetStyle( keycolor5, keycolor5);
	if(i>-1&&i<3||i>5&&i<9||i>11&&i<15||i==19||i==18)btn.SetStyle( keycolor1, keycolor1);
	if(i>2&&i<5||i>8&&i<12||i>14&&i<18||i>21&&i<24)btn.SetStyle( keycolor2, keycolor2);
	if(i>23&&i<27||i>29&&i<33||i>35&&i<39||i>41&&i<45)btn.SetStyle( keycolor3, keycolor3);
	if(i==27||i==33||i==39||i==45||i==46)btn.SetStyle(keycolor4, keycolor4);
	btn.SetTextSize( fontsize7*font3adj*1,"dip");
	if(name=="ln"||name=="log")	btn.SetTextSize( fontsize7*font3adj*.75,"dip");  //*.75
  if(name=="hyp"||name=="cos"||name=="tan"||name=="sin"||name=="inv"||name=="csc"||name=="sec"||name=="cot")	btn.SetTextSize( fontsize7*font3adj*.65,"dip");  //*.65
	if(i==2||i==8||i==14||i==20||i==26||i==32||i==38)btn.SetMargins( 0., 0, 0.048, 0 );
	btn.SetOnTouch( btn_OnTouch );
	lay.AddChild( btn );
	}
	else
	{
	imagbtn = app.CreateButton(name,keysize,.062,"Custom");
	imagbtn.SetStyle( keycolor3, keycolor3);
	if(basic)imagbtn.SetStyle( keycolor3, keycolor3);
	imagbtn.SetTextSize(fontsize7*font3adj,"dip");
//	imagbtn.SetBackGradient("yellow","yellow")
	imagbtn.SetTextColor(keycolor6);
	imagbtn.SetMargins( 0.0, 0, 0.048, 0.0 );
	imagbtn.SetOnTouch( btn_OnTouch );
	lay.AddChild( imagbtn );
	}
	}
	
}

//Called when user presses number buttons.
function btn_OnTouch()
{
btn = app.GetLastButton();
var txt = btn.GetText();
if(txt==" ")return;
//btn.SetBackGradient("grey","darkgrey");


if(txt=="rad"||txt=="deg"){convert_angles();if(coord=="Polar")draw_polar_background();return;}
if(txt=="hyp"&& hyperbolic==false){hyperbolic=true; btn.SetStyle("#00aa00","#00aa00");btn2=app.GetLastButton();return;}
if(txt=="hyp"&& hyperbolic==true){hyperbolic=false; btn.SetStyle(keycolor2, keycolor2);return;}

if(txt=="inv" && inverse==false){inverse=true; btn.SetStyle("#00aa00","#00aa00");btn3=app.GetLastButton();return;}
if(txt=="inv"&& inverse==true){inverse=false; btn.SetStyle(keycolor2, keycolor2);return;}

displayback.Clear();
if(txt=="<"||txt==">"){move_cursor(txt);}
else if(cursor<length[0]&&txt!="="){insert_text(txt);}
else {handle_btns(txt);}
display.Update();
select_textedit();
displayback.Update();
//if(txt!="^")btn.SetBackGradient("white","grey",7);
}

function convert_angles()
{
sum[textedit]=sum[0];
originaldisplay=display;
originaltextedit=textedit;

for(h=1;h<4;h++)
 { 
 for(i=0;sum[h][i]!=null;i++)
          {
           if(sum[h][i]=="}" && sum[h][i+1]==null)return;
          }
 }
btn = app.GetLastButton();
var txt = btn.GetText();
if(txt=="rad")btn.SetText("deg"); else btn.SetText("rad");
update_cursor=false;

 for(h=1;h<4;h++)
 { 
   
 sum[0]=sum[h];
 cursor[0]=cursor[h];
 length[0]=length[h];
 magnit="";
 angl="";
if(h==1)display=display1;
if(h==2)display=display2;
if(h==3)display=display3;
if(h>1)
{
if(angularunits=="Radians")angularunits="Degrees";else angularunits="Radians";
}
changeunits=true;
      calculate_result(-1);
      if(errorstate)
        {
     //   errorstate=false;
    //    return;
        }
      sum[h]=sum[0];
      cursor[h]=cursor[0];
      length[h]=length[0];
      }
   	angunits.SelectItem(angularunits);
      sum[0]=sum[originaltextedit];
      cursor[0]=cursor[originaltextedit];
      length[0]=length[originaltextedit];
      display=originaldisplay;
      move_cursor(">");
      move_cursor(">");
      move_cursor(">");
      move_cursor(">");
      update_cursor=true;
}

function recycle(item)
{
digformat=item;
sum[textedit]=sum[0];
originaldisplay=display;
originaltextedit=textedit;
update_cursor=false;

 for(h=1;h<4;h++)
 { 
 
 sum[0]=sum[h];
 cursor[0]=cursor[h];
 length[0]=length[h];

if(h==1)display=display1;
if(h==2)display=display2;
if(h==3)display=display3;

//if(display==originaldisplay)update_cursor=true; else update_cursor=false;

      
      calculate_result(-1);
      sum[h]=sum[0];
      cursor[h]=cursor[0];
      length[h]=length[0];
      
    
    }
    //  polartext=false;
      sum[0]=sum[originaltextedit];
      cursor[0]=cursor[originaltextedit];
      length[0]=length[originaltextedit];
      display=originaldisplay;
      move_cursor(">");
      move_cursor(">");
      move_cursor(">");
      move_cursor(">");
      update_cursor=true;
}
 
  function handle_btns(txt)
  { 
  if(txt=="="){calculate_result(-1);if(errorstate){errorstate=false;}return;}
  if(txt=="<"||txt==">"||txt==""){return;}
  if(txt==" ")return;
  if(txt=="}")
         {
           display.SetLineWidth(3);
           display.DrawLine(positionx[0],positiony,positionx[0]+xstep,positiony);
           display.DrawLine(positionx[0],positiony,positionx[0]+xstep,positiony-.4); 
          }
  if(txt=="x!")txt="!";
  if(txt=="|x|")txt="|";
  if(txt=="$")txt="|";
  if(exp)
      {
      display.SetTextSize( fontsize1*font1adj *0.9,"dip" );
      positiony=.4;
      xstep=xstepmaster*0.0011;
      }
      else
      {
      display.SetTextSize( fontsize1*font1adj*1.5,"dip");
      positiony=.8;
      xstep=xstepmaster*0.0016;
      }
  
  if(txt=="csc")txt="k";
	if(txt=="sec")txt="m";
	if(txt=="cot")txt="n";
	
	
	if(hyperbolic==true)
	{
		if(txt=="sin"){txt="h";}
	  if(txt=="cos"){txt="g";}
  	if(txt=="tan"){txt="v";}
  	if(txt=="k")txt="%";
  	if(txt=="m")txt="@";
  	if(txt=="n")txt="&";
  	btn2.SetStyle(keycolor2, keycolor2);
	}
	if(inverse==true)
	{
	  if(txt=="sin"){txt="x";}
	  if(txt=="cos"){txt="y";}
  	if(txt=="tan"){txt="z";}
  	if(txt=="h")txt="u";
  	if(txt=="g")txt="w";
  	if(txt=="v")txt="r";
  	if(txt=="k")txt="o";
  	if(txt=="m")txt="b";
  	if(txt=="n")txt="#";
  	if(txt=="%")txt="~";
  	if(txt=="@")txt=":";
  	if(txt=="&")txt="?";
  	btn3.SetStyle(keycolor2, keycolor2);
	}
	hyperbolic=false;
	inverse=false;
	if(txt=="log")txt="f";

	sum[0]+=txt[0];
	length[0]++;
  cursor++;
 
    if(txt=="s")txt="sin";
  	if(txt=="c")txt="cos";
  	if(txt=="t")txt="tan";
  	if(txt=="x")txt="asin";
  	if(txt=="y")txt="acos";
  	if(txt=="z")txt="atan";
  	if(txt=="l")txt="ln";
  	if(txt=="f")txt="log";
  	if(txt=="h")txt="sinh";
  	if(txt=="g")txt="cosh";
  	if(txt=="v")txt="tanh";
  	if(txt=="u")txt="asinh";
  	if(txt=="w")txt="acosh";
  	if(txt=="r")txt="atanh";
  	
	if(txt=="k")txt="csc";
	if(txt=="m")txt="sec";
	if(txt=="n")txt="cot";
	if(txt=="o")txt="acsc";
	if(txt=="b")txt="asec";
	if(txt=="#")txt="acot";
  if(txt=="%")txt="csch";
	if(txt=="@")txt="sech";
	if(txt=="&")txt="coth";
	if(txt=="~")txt="acsch";
	if(txt==":")txt="asech";
	if(txt=="?")txt="acoth";
  	
  	if(txt !="}")display.DrawText(txt,positionx[0],positiony);	
  	if(txt=="ln")positionx[0]=positionx[0]+xstep/2;
  	if(txt=="sin"||txt=="tan"||txt=="log")positionx[0]=positionx[0]+1.4*xstep;
  	if(txt=="cos"||txt=="csc"||txt=="sec"||txt=="cot")positionx[0]=positionx[0]+2*xstep;
  	if(txt=="cosh"||txt=="acsc"||txt=="asec"||txt=="acot"||txt=="csch"||txt=="sech")positionx[0]=positionx[0]+2.8*xstep;
  	if(txt=="tanh"||txt=="sinh"||txt=="atan"||txt=="asin"||txt=="coth")positionx[0]=positionx[0]+2.5*xstep;
  	if(txt=="asinh"||txt=="atanh"||txt=="acoth")positionx[0]=positionx[0]+3.4*xstep;
  	if(txt=="acos")positionx[0]=positionx[0]+3*xstep;
    if(txt=="acosh"||txt=="acsch"||txt=="asech")positionx[0]=positionx[0]+3.8*xstep;

  	positionx[0]=positionx[0]+xstep;
  	if(txt==imagnumbersymbol || txt=="."||txt=="("||txt=="!"||txt=="|")positionx[0]=positionx[0]-xstep/2;
  		if(txt=="}")positionx[0]=positionx[0]+xstep/4;
  	
  	if(txt=="/"||txt==")"||txt=="-")positionx[0]=positionx[0]-xstep/4;
  	displayback.DrawLine(positionx[0],positiony+.05,positionx[0]+xstep,positiony+.05);

	
   
	
	}
	
	
 
function gle_OnTouchDown()
{
if(cursor<length[0]){insert_text("}");return;}
sum[0] +="}";
 display.SetLineWidth(3);
  display.DrawLine(positionx[0],positiony,positionx[0]+xstep,positiony);
  display.DrawLine(positionx[0],positiony,positionx[0]+xstep,positiony-.4); 
positionx[0]=positionx[0]+xstep*1.3;
if(backbtn==false&&insert==false)display.Update();
displayback.Clear();
displayback.DrawLine(positionx[0],positiony+0.05,positionx[0]+xstep,positiony+0.05);
//select_textedit();
if(backbtn==false&&insert==false)displayback.Update();
length[0]++;
cursor++;
} 

function sqrtbtn_OnTouchDown()
{
if(cursor<length[0]){insert_text("q");return;}
sum[0] +="q";
display.SetTextSize(fontsize1*font1adj*.8,"dip");
  display.DrawText("2",positionx[0]-xstep/10,.5);
 display.SetLineWidth(3);
  display.DrawLine(positionx[0],positiony-.2,positionx[0]+xstep/3,positiony);
  display.DrawLine(positionx[0]+xstep/3,positiony,positionx[0]+xstep*.7,positiony-.6); 
  display.DrawLine(positionx[0]+xstep*.7,positiony-.6,positionx[0]+xstep*.8+xstep,positiony-.6); 
  
positionx[0]=positionx[0]+xstep*.8;
if(backbtn==false&&insert==false)display.Update();
displayback.Clear();
displayback.DrawLine(positionx[0],positiony+0.05,positionx[0]+xstep,positiony+0.05);
//select_textedit();
if(backbtn==false&&insert==false)displayback.Update();
length[0]++;
cursor++;
} 

function sqrtbtn3_OnTouchDown()
{
if(cursor<length[0]){insert_text("{");return;}
sum[0] +="{";
display.SetTextSize(fontsize1*font1adj*.8,"dip");
  display.DrawText("3",positionx[0]-xstep/10,.5);
 display.SetLineWidth(3);
  display.DrawLine(positionx[0],positiony-.2,positionx[0]+xstep/3,positiony);
  display.DrawLine(positionx[0]+xstep/3,positiony,positionx[0]+xstep*.7,positiony-.6); 
  display.DrawLine(positionx[0]+xstep*.7,positiony-.6,positionx[0]+xstep*.8+xstep,positiony-.6); 
  
positionx[0]=positionx[0]+xstep*.8;
if(backbtn==false&&insert==false)display.Update();
displayback.Clear();
displayback.DrawLine(positionx[0],positiony+0.05,positionx[0]+xstep,positiony+0.05);
//select_textedit();
if(backbtn==false&&insert==false)displayback.Update();
length[0]++;
cursor++;
} 

function phi_OnTouchDown()
{
if(cursor<length[0]){insert_text("d");return;}
sum[0] +="d";
display.SetLineWidth(3);
if(exp)display.SetTextSize(fontsize1*font1adj,"dip");
if(!exp)
{
display.SetTextSize(fontsize1*font1adj*1.3,"dip");
display.DrawText("O",positionx[0],positiony);
display.DrawText("|",positionx[0]+xstep*0.33,positiony-.05);
}
else 
{
display.SetTextSize(fontsize1*font1adj*0.8,"dip");
display.DrawText("O",positionx[0],positiony);
display.DrawText("|",positionx[0]+xstep*0.33,positiony-.03);
}
positionx[0]=positionx[0]+xstep*1.2;
if(backbtn==false&&insert==false)display.Update();
displayback.Clear();
displayback.DrawLine(positionx[0],positiony+0.05,positionx[0]+xstep,positiony+0.05);
//select_textedit();
if(backbtn==false&&insert==false)displayback.Update();
length[0]++;
cursor++;
} 

function sqbtn_OnTouchDown()
{
e1_OnTouchDown();
if(cursor<length[0]){insert_text("2");}else {handle_btns("2");}
e1_OnTouchDown();
} 
function sqbtn3_OnTouchDown()
{
e1_OnTouchDown();
if(cursor<length[0]){insert_text("3");}else {handle_btns("3");}
e1_OnTouchDown();
} 
function e2_OnTouchDown()
{
if(cursor<length[0]){insert_text("e^"+imagnumbersymbol);return;}
handle_btns("e");
e1_OnTouchDown();
handle_btns(imagnumbersymbol);
move_cursor(">");
display.Update();
} 

function pi_OnTouchDown()
{
if(cursor<length[0]){insert_text("p");return;}
sum[0] +="p";
draw_pi();
}

function draw_pi()
{
if(!exp)display.SetTextSize(fontsize1*font1adj*1.3,"dip");
if(exp)display.SetTextSize(fontsize1*font1adj*0.8,"dip");
  display.DrawText("T",positionx[0],positiony);
  display.DrawText("T",positionx[0]+.45*xstep,positiony); 
positionx[0]=positionx[0]+xstep*1.5;
if(backbtn==false&&insert==false)display.Update();
displayback.Clear();
displayback.DrawLine(positionx[0],positiony+0.05,positionx[0]+xstep,positiony+0.05);
select_textedit();
if(backbtn==false&&insert==false)displayback.Update();
length[0]++;
cursor++;
}


function e1_OnTouchDown()
{
if(cursor<length[0]&& insert==false){insert_text("^");return;}
//sum[0] +="e";

length[0]++;
cursor++;
 //imgbackground.DrawText( "ebtn =  "+"1",.3,1/3+.1 )  

if(!exp)
	                   {
	                //   if(!backbtn)ebtn1.SetStyle( "#00aa00", "#00aa00" );
	                   sum[0] +="^";
	                   display.SetTextSize( fontsize1*font1adj*1.5,"dip");
	                   //display.DrawText("e",positionx[0],positiony);
	                   //ebtn1.SetBackGradient("green","#00cc00");
	                   exp=true;
	                   positiony=0.4;
	                   xstep=xstepmaster*0.0011;
	                   display.SetTextSize( fontsize1*font1adj*0.9,"dip");
	                  // display.DrawText(imagnumbersymbol,positionx[0]+xstep*1.5,0.4);
	                  // positionx[0]=positionx[0]+2*xstep;
	                    }
	                   else
	                    { 
	               //     if(!backbtn)ebtn1.SetStyle( keycolor1, keycolor1 );
	                    sum[0] +="^";
	                  //  ebtn1.SetBackGradient("white","grey");
	                    exp=false;
	                    positiony=0.8;
	                    xstep=xstepmaster*0.0016;
	                    display.SetTextSize( fontsize1*font1adj*1.5,"dip");
	                    }  
if(exp)
  {
  x=1.5*font1adj;
  y=1.5*font1adj;
  display.SetLineWidth(2);
  }
  else
  {
  x=1*font1adj;
  y=1*font1adj;
  display.SetLineWidth( 3 );
  }


if(backbtn==false&&insert==false)display.Update();
//positionx[0]=positionx[0]+2.2*xstep;
displayback.Clear();
if(update_cursor)displayback.DrawLine(positionx[0],positiony+0.05,positionx[0]+xstep,positiony+.05);
select_textedit();
if(backbtn==false&&insert==false)displayback.Update();
}



function btnback_OnTouch()
{
if(cursor==0)return;
//	btnback.SetBackGradient( "darkgrey","darkgrey" );
exp=false;
display.SetTextSize( fontsize1*font1adj *1.5,"dip");
positiony=0.8;
positionytemp=0.8;
 xstep=xstepmaster*0.0016;

 tempposition=positionx[0];
 positionx[0]=xstep/3;
 tempcursor=cursor;
 templength=length[0];
 length[0]=0;
 tempnum=sum[0];
 sum[0]="";
 cursor=0;
backbtn=true;
display.Clear();
if(tempcursor<templength)templength++;
temp=0;
for(i=0;i<templength-1;i++)
   {
        if(i==tempcursor-1){i++;temp=positionx[0];if(!exp)positionytemp=0.8;else positionytemp=0.4;}
        if(i<tempcursor-1) 
                     {
                      if(tempnum[i]!="^")temp=positionx[0]+xstep;
                      if(tempnum[i]=="}")temp=positionx[0]+1.3*xstep;
                       if(tempnum[i]=="."||tempnum[i]==imagnumbersymbol||tempnum[i]=="("||tempnum[i]=="!"||tempnum[i]=="|")temp=temp-xstep/2;
                      if(tempnum[i]=="/"||tempnum[i]==")"||tempnum[i]=="-")temp=temp-xstep/4;
                       if(tempnum[i]=="p"||tempnum[i]=="l")temp=temp+0.5*xstep;     
                       if(tempnum[i]=="s"||tempnum[i]=="t"||tempnum[i]=="f")temp=temp+1.4*xstep;
                       if(tempnum[i]=="c"||tempnum[i]=="k"||tempnum[i]=="m"||tempnum[i]=="n")temp=temp+2*xstep;
                       if(tempnum[i]=="h"||tempnum[i]=="v"||tempnum[i]=="&")temp=temp+2.5*xstep;
                       if(tempnum[i]=="g"||tempnum[i]=="#"||tempnum[i]=="b"||tempnum[i]=="#"||tempnum[i]=="%"||tempnum[i]=="@")temp=temp+2.8*xstep;
                       if(tempnum[i]=="u"||tempnum[i]=="r"||tempnum[i]=="?")temp=temp+3.4*xstep;
                       if(tempnum[i]=="x"||tempnum[i]=="z")temp=temp+3.5*xstep;
                       if(tempnum[i]=="y")temp=temp+4.2*xstep;
                       if(tempnum[i]=="w"||tempnum[i]=="~"||tempnum[i]==":")temp=temp+3.8*xstep;

                      }
        if(tempnum[i]=="p"){pi_OnTouchDown();}
        else if(tempnum[i]=="^"){e1_OnTouchDown();}
        else if(tempnum[i]=="d"){phi_OnTouchDown();}
        else if(tempnum[i]=="q"){sqrtbtn_OnTouchDown();}
        else if(tempnum[i]=="{"){sqrtbtn3_OnTouchDown();}
        else handle_btns(tempnum[i]);
       
   }
// if(tempnum[i]=="^")btnback_OnTouch();
 if(cursor==templength-1  && exp)positionytemp=0.4;
  display.Update();
//if(txt[i]=="e")btnback_OnTouch();
displayback.Clear();
positionx[0]=temp;
positiony=positionytemp;
if(positionx[0]<xstep/3){positionx[0]=xstep/3;cursor=0;}
   select_textedit();
   //displayback.SetPaintColor("green");
   displayback.DrawLine(positionx[0],positiony+.05,positionx[0]+xstep,positiony+.05); 
   displayback.Update();
   tempnum="";
   cursor=tempcursor-1;
//if(!exp)ebtn1.SetBackGradient("white","grey");
//if(exp)ebtn1.SetBackGradient("green","green");
backbtn=false;
//	btnback.SetBackGradient( "white","grey" );
}

function move_cursor(txt)
{
 xstep=xstepmaster*0.0016;
 positiony=0.8;
 positionx[0]=xstep/3;
 exp=false;
 	
 if (txt=="<")	{cursor--;}
 else {cursor++;}
 if(cursor<0)cursor=0;
 if(cursor>length[0])cursor=length[0];

for(i=0;i<cursor;i++)
{
if(sum[0][i]=="^")
      {
       if(exp)exp=false; else exp=true;
       
      }
if(exp)
    { 
      xstep=xstepmaster*0.0011;
      positiony=0.4;
     // positionx[0]=positionx[0]+xstep*0.001;
    
    //  displayback.DrawLine(positionx[0],positiony+0.05,positionx[0]+xstep,positiony+.05);
      }
else
      {
      xstep=xstepmaster*0.0016;
      positiony=0.8;
     // positionx[0]=positionx[0]+xstep;
      }

if(sum[0][i]=="."||sum[0][i]==imagnumbersymbol||sum[0][i]=="("||sum[0][i]=="!"||sum[0][i]=="|")positionx[0]=positionx[0]-xstep/2;
if(sum[0][i]=="/"||sum[0][i]==")"||sum[0][i]=="-")positionx[0]=positionx[0]-xstep/4;
if( sum[0][i]=="}")positionx[0]=positionx[0]+0.3*xstep;     
if( sum[0][i]=="p"||sum[0][i]=="l")positionx[0]=positionx[0]+0.5*xstep;     
if( sum[0][i]=="d")positionx[0]=positionx[0]+0.2*xstep;     
if(sum[0][i]=="s"||sum[0][i]=="t"||sum[0][i]=="f")positionx[0]=positionx[0]+1.5*xstep;
if(sum[0][i]=="c"||sum[0][i]=="k"||sum[0][i]=="m"||sum[0][i]=="n")positionx[0]=positionx[0]+2*xstep;
if(sum[0][i]=="h"||sum[0][i]=="v"||sum[0][i]=="&")positionx[0]=positionx[0]+2.5*xstep;
if(sum[0][i]=="g"||sum[0][i]=="b"||sum[0][i]=="#"||sum[0][i]=="o"||sum[0][i]=="%"||sum[0][i]=="@")positionx[0]=positionx[0]+2.8*xstep;
if(sum[0][i]=="u"||sum[0][i]=="r"||sum[0][i]=="?")positionx[0]=positionx[0]+3.4*xstep;
if(sum[0][i]=="x"||sum[0][i]=="z")positionx[0]=positionx[0]+2.5*xstep;
if(sum[0][i]=="y")positionx[0]=positionx[0]+3.2*xstep;
if(sum[0][i]=="w"||sum[0][i]=="~"||sum[0][i]==":")positionx[0]=positionx[0]+3.8*xstep;

if(sum[0][i]!="^")positionx[0]=positionx[0]+xstep;
}


//	if(positionx[0]<fontsize1*font1adj*0.0016/3){positionx[0]=fontsize1*font1adj*0.0016/3;cursor=0;}
//	if(positionx[0]>length[0]*xstep+fontsize1*font1adj*0.0016/3)positionx[0]=length[0]*xstep+fontsize1*font1adj*0.0016/3;
//	if(sum[0][i]=="^") move_cursor(txt);
	if(touchdown)return;
	  displayback.Clear();
  select_textedit();
 
 
 displayback.DrawLine(positionx[0],positiony+0.05,positionx[0]+xstep,positiony+.05);
  displayback.Update();
 
	}

function insert_text(txt)
{
  if(txt=="<"||txt==">"){return;}
  insert=true;
  exp=false;
  xstep=xstepmaster*0.0016;
 positiony=0.8;
 display.Clear();
 //tempposition=positionx[0];
 positionx[0]=xstep/3;
 tempcursor=cursor;
 templength=length[0];
 length[0]=0;
 tempnum=sum[0];
 sum[0]="";
 cursor=0;
 for(i=0;i<tempcursor;i++)
   {
   if(tempnum[i]=="p"){sum[0]+="p";draw_pi();}
   else if(tempnum[i]=="^"){e1_OnTouchDown();}
   else if(tempnum[i]=="d"){phi_OnTouchDown();}
   else if(tempnum[i]=="q"){sqrtbtn_OnTouchDown();}
   else if(tempnum[i]=="{"){sqrtbtn3_OnTouchDown();}
   else  handle_btns(tempnum[i]);
   }
   
    if(txt=="p"){sum[0]+="p";draw_pi();}
     else if(txt=="^")
     {
     sum[0]+="^";
     e1_OnTouchDown();
     }
     else if(txt=="q")
     {
     sqrtbtn_OnTouchDown();
     }
     else if(txt=="{")
     {
     sqrtbtn3_OnTouchDown();
     }
      else if(txt=="d")
     {
     phi_OnTouchDown();
     }
    else handle_btns(txt);
    posy=positiony;
    posx=positionx[0];
    
  for(i=tempcursor;i<templength;i++)
   {
   if(tempnum[i]=="p"){sum[0]+="p";draw_pi();}
    else if(tempnum[i]=="^")
    { 
     e1_OnTouchDown();
     }
     else if(tempnum[i]=="d")
    { 
     phi_OnTouchDown();
     }
     else if(tempnum[i]=="q")
    { 
          sqrtbtn_OnTouchDown();
     }
     else if(tempnum[i]=="{")
    { 
          sqrtbtn3_OnTouchDown();
     }
     else handle_btns(tempnum[i]);
   }
   displayback.Clear();
   
   select_textedit();
   displayback.DrawLine(posx,posy+.05,posx+xstep,posy+.05); 
   displayback.Update();
   display.Update();
   tempnum="";
   cursor=tempcursor+1;
   insert=false;
   
 
}
function display2_OnTouch(ev)
{
real=ev.x[0];
  	imag=ev.y[0];
  
if(textedit!=2)deselect_textedit();

display=display2;
sum[textedit]=sum[0];
sum[0]=sum[2];
length[textedit]=length[0];
length[0]=length[2];
positionx[0]=xstep/3;
cursor=0;
xstep=xstepmaster*0.0016;
positiony=0.8;
touchdown=true;
for(i=0;positionx[0]+xstep<real && i<length[0]+1;i++)
{
     move_cursor(">");
}
move_cursor(">");
move_cursor("<");
if(real>positionx[0]+xstep)move_cursor(">");
touchdown=false;
cursor=i;
displayback=display2back;
displaybackback=display2backback;
select_textedit();
displayback.SetPaintColor("white");
displayback.Clear();
displayback.DrawLine(positionx[0],positiony+.05,positionx[0]+xstep,positiony+.05);
displayback.Update();

textedit=2;
app.HideKeyboard();
}

function display1_OnTouch(ev)
{
real=ev.x[0];
  	imag=ev.y[0];
  
if(textedit!=1)deselect_textedit();
display=display1;
sum[textedit]=sum[0];
sum[0]=sum[1];
length[textedit]=length[0];
length[0]=length[1];

positionx[0]=xstep/3;
cursor=0;
xstep=xstepmaster*0.0016;
positiony=0.8;
touchdown=true;
for(i=0;positionx[0]+xstep<real&&i<length[0]+1;i++)
{
     move_cursor(">");
}
move_cursor(">");
move_cursor("<");
if(real>positionx[0]+xstep)move_cursor(">");
touchdown=false;
cursor=i;
displayback=display1back;
displaybackback=display1backback;
select_textedit();
displayback.SetPaintColor("white");
displayback.Clear();
displayback.DrawLine(positionx[0],positiony+.05,positionx[0]+xstep,positiony+.05);
displayback.Update();
//positiony=0.8;
//xstep=xstepmaster*0.0016;
//ebtn1.SetBackGradient("white","grey");
textedit=1;
app.HideKeyboard();


}

function display3_OnTouch(ev)
{
real=ev.x[0];
imag=ev.y[0];
if(textedit!=3)deselect_textedit();
display=display3;
sum[textedit]=sum[0];
sum[0]=sum[3];
length[textedit]=length[0];
length[0]=length[3];
//cursor=length[0];
displayback=display3back;
positionx[0]=xstep/3;
cursor=0;
xstep=xstepmaster*0.0016;
positiony=0.8;
touchdown=true;
for(i=0;positionx[0]+xstep<real&&i<length[0]+1;i++)
{
     move_cursor(">");	
}
move_cursor(">");
move_cursor("<");
if(real>positionx[0]+xstep)move_cursor(">");
touchdown=false;
cursor=i;
//displayback=display3back;
displaybackback=display3backback;
select_textedit();
displayback.SetPaintColor("white");
displayback.Clear();
displayback.DrawLine(positionx[0],positiony+.05,positionx[0]+xstep,positiony+.05);
displayback.Update();

//ebtn1.SetBackGradient("white","grey");

//exp=false;
//positiony=0.8;
//xstep=xstepmaster*0.0016;
textedit=3;
app.HideKeyboard();

}

function select_textedit()
{
displaybackback.SetLineWidth(4);
displaybackback.SetPaintColor( "white" );
displaybackback.DrawLine(0,1,1,1);
displaybackback.DrawLine(.00,0,0.00,1);
displaybackback.SetPaintColor( "#666666" );
displaybackback.SetBackColor( "black" );

displaybackback.DrawLine(0,0,1,0);
displaybackback.DrawLine(1,0,1,1);
displaybackback.SetPaintColor( "white" );
displaybackback.SetLineWidth(2);
displaybackback.Update();
   
}

function deselect_textedit()
{
displaybackback.Clear();
displayback.Clear();
displaybackback.SetPaintStyle( "Line" );
displaybackback.SetBackColor( "darkgrey" );

//displayback.SetPaintColor( "silver" );
//displayback.DrawRectangle(0,0,1,1);
displaybackback.Update();
displayback.Update();
}
 
 

//**************************    FAULT DIALOG    *****************************
function OnFault()
{
    dlgFault = app.CreateDialog( "Fault Parameters" );
    dlgFault.SetTitleTextSize(fontsize4*font4adj,"dip");
    

layPhases = app.CreateLayout( "linear", "Vertical,Center,FillX" );
   layPhases.SetSize( 0.8, -1 );
    dlgFault.AddLayout( layPhases );
    
   txt=app.CreateText("Select Faulted Phases");
    txt.SetTextSize( fontsize4*font4adj,"dip");
    txt.SetMargins( 0, 0.0, 0, 0.01 );
    txt .SetTextColor("white");
    layPhases.AddChild( txt );

    chkA = app.CreateCheckBox( "Phase A" );
    chkA.SetTextSize(fontsize4*font4adj,"dip");
    chkA.SetTextColor(colora);
    chkA.SetMargins( 0, 0, 0, 0.0 );
    layPhases.AddChild( chkA );

chkB = app.CreateCheckBox( "Phase B" );
chkB.SetTextSize(fontsize4*font4adj,"dip");
chkB.SetTextColor(colorb);
    chkB.SetMargins( 0.0, 0.02, 0, 0.0 );
    layPhases.AddChild( chkB );

chkC = app.CreateCheckBox( "Phase C" );
chkC.SetTextSize(fontsize4*font4adj,"dip");
chkC.SetTextColor(colorc);
    chkC.SetMargins( 0.0, 0.02, 0, 0.0 );
    layPhases.AddChild( chkC );
    
    chkG = app.CreateCheckBox( "Ground " );
    chkG.SetTextSize(fontsize4*font4adj,"dip");
    chkG.SetTextColor("green");
    chkG.SetMargins( 0.0, 0.02, 0, 0.05 );
    layPhases.AddChild( chkG );
    
    txt=app.CreateText("Sequence Impedance");
    txt.SetTextSize( fontsize4*font4adj,"dip");
    txt.SetMargins( 0, 0.0, 0, 0.02 );
    txt .SetTextColor("white");
    layPhases.AddChild( txt );
    
    txt=app.CreateText("X1 = ");
    txt.SetTextSize( fontsize4*font4adj,"dip");
    txt.SetMargins( 0, 0.0, 0, 0.05 );
    txt .SetTextColor("white");
    layPhases.AddChild( txt );
   
    z1 = app.CreateTextEdit( 0.25);
    z1.SetTextSize( fontsize4*font4adj,"dip");
    z1.SetTextColor( "white" );
    z1.SetMargins(0.1,-0.1,0,0.02);
    layPhases.AddChild( z1 );  
    
    txt=app.CreateText("X2 = ");
    txt.SetTextSize( fontsize4*font4adj,"dip");
    txt.SetMargins( 0.0, 0.01, 0, 0.05 );
    txt .SetTextColor("white");
    layPhases.AddChild( txt );
   
    z2 = app.CreateTextEdit( 0.25);
    z2.SetTextSize( fontsize4*font4adj,"dip");
    z2.SetTextColor( "white" );
    z2.SetMargins(0.1,-0.1,0,0.02);
    layPhases.AddChild( z2 );  
    
    txt=app.CreateText("X0 = ");
    txt.SetTextSize( fontsize4*font4adj,"dip");
    txt.SetMargins( 0.0, 0.01, 0, 0.05 );
    txt .SetTextColor("white");
    layPhases.AddChild( txt );
   
    z0 = app.CreateTextEdit( 0.25 );
    z0.SetTextSize( fontsize4*font4adj,"dip");
    z0.SetTextColor( "white" );
    z0.SetMargins(0.1,-0.1,0,0.02);
    layPhases.AddChild( z0 );  
    
    btnDlg = app.CreateButton( "Apply Fault",0.4,-1,"FillX,Alum");
    btnDlg.SetTextSize(fontsize4*font4adj,"dip");
    btnDlg.SetOnTouch( FaultCalc );
    layPhases.AddChild( btnDlg );
    
    btnDlg = app.CreateButton( "Cancel", 0.3, 0.1 );
    btnDlg.SetOnTouch( dlgFault.Hide );
    //layDlg.AddChild( btnDlg );

    dlgFault.Show();
    }
//**************************    FAULT CALCULATIONS    *****************************
function FaultCalc()
{
    dlgFault.Hide();
    IaR=0;
    IaI=0;
    IbR=0;
    IbI=0;
    IcR=0;
    IcI=0;
    asign="+";
    
    //*********  GROUND FAULTS**********
       if(chkG.GetChecked()==true)
       {
//  ************************ SINGLE PHASE TO GROUND FAULTS ******************************
           if(chkA.GetChecked() && !chkB.GetChecked() && !chkC.GetChecked())
             {
             fault=true;
              Ia1=1/(z1.GetText()*1+z2.GetText()*1+z0.GetText()*1);
              Ia2=Ia1;
              Ia0=Ia1;
              IaI=3*Ia1;
              Ia=IaI;
              IaR=0;
              asign="-";
              Ib=0;
              Ic=0;
              Va1=1-(Ia1*z1.GetText()*1);
              Va2=0-(Ia2*z2.GetText()*1); 
              Va0=0-(Ia0*z0.GetText()*1); 
              mag1a=Va1*0.2/scale;   //grid scale factor 
              ang1a=0;
              mag2a=-Va2*0.2/scale; //grid scale factor 
              ang2a=p;
              mag0a=-Va0*0.2/scale;  //grid scale factor 
              ang0a=p;
              
              mag1b=mag1a;
              ang1b=ang1a-2*p/3;
              mag2b=mag2a;
              ang2b=ang2a+2*p/3;
              mag0b=mag0b;
              ang0b=ang0a;
              
              mag1c=mag1a;
              ang1c=ang1a+2*p/3;
              mag2c=mag2a;
              ang2c=ang2a-2*p/3;
              mag0c=mag0a;
              ang0c=ang0a; 
             }
            if(chkB.GetChecked()&& !chkA.GetChecked() && !chkC.GetChecked())
             {
             fault=true;
              Ib1=1/(z1.GetText()*1+z2.GetText()*1+z0.GetText()*1);
              Ib2=Ib1;
              Ib0=Ib1;
              Ib=3*Ib1;
              Ia=0;
              Ic=0;
              IbR=Ib*Math.cos(5*p/6);
              IbI=Ib*Math.sin(5*p/6);
              asign="+";
              Vb1=1-(Ib1*z1.GetText()*1);
              Vb2=0-(Ib2*z2.GetText()*1); 
              Vb0=0-(Ib0*z0.GetText()*1); 
              mag1b=Vb1*0.2/scale;   //grid scale factor 
              ang1b=-2*p/3;
              mag2b=-Vb2*0.2/scale; //grid scale factor 
              ang2b=p/3;
              mag0b=-Vb0*0.2/scale;  //grid scale factor 
              ang0b=p/3;
              
              mag1a=mag1b;
              ang1a=ang1b+2*p/3;
              mag2a=mag2b;
              ang2a=ang2b-2*p/3;
              mag0a=mag0b;
              ang0a=ang0b;
              
               mag1c=mag1b;
              ang1c=ang1b-2*p/3;
              mag2c=mag2b;
              ang2c=ang2b+2*p/3;
              mag0c=mag0b;
              ang0c=ang0b;
              
             } 
             if(chkC.GetChecked()&& !chkB.GetChecked() && !chkA.GetChecked())
             {
              fault=true;
              Ic1=1/(z1.GetText()*1+z2.GetText()*1+z0.GetText()*1);
              Ic2=Ic1;
              Ic0=Ic1;
              Ic=3*Ic1;
              Ia=0;
              Ib=0;
              IcR=Ic*Math.cos(p/6);
              IcI=Ic*Math.sin(p/6);
              asign="+";
              Vc1=1-(Ic1*z1.GetText()*1);
              Vc2=0-(Ic2*z2.GetText()*1); 
              Vc0=0-(Ic0*z0.GetText()*1); 
              mag1c=Vc1*0.2/scale;   //grid scale factor 
              ang1c=2*p/3;
              mag2c=-Vc2*0.2/scale; //grid scale factor 
              ang2c=-p/3;
              mag0c=-Vc0*0.2/scale;  //grid scale factor 
              ang0c=-p/3;
              
              mag1a=mag1c;
              ang1a=ang1c-2*p/3;
              mag2a=mag2c;
              ang2a=ang2c+2*p/3;
              mag0a=mag0c;
              ang0a=ang0c;
              
               mag1b=mag1c;
              ang1b=ang1c-2*p/3;
              mag2b=mag2c;
              ang2b=ang2c-2*p/3;
              mag0b=mag0c;
              ang0b=ang0c;
              
             }
        Z1=z1.GetText()*1;
        Z2=z2.GetText()*1;
        Z0=z0.GetText()*1;
// ********************* TWO PHASE TO GROUND FAULT *****************************
              if(chkC.GetChecked() && chkB.GetChecked() && !chkA.GetChecked())
             {
              fault=true;
              Ia1=1/(Z1+Z2*Z0/(Z2+Z0));
                 app.ShowPopup(Ia1);         
              Va1=1-(Ia1*z1.GetText()*1);
              Va2=Va1; 
              Va0=Va1; 
              mag1a=Va1*0.2/scale;   //grid scale factor 
              ang1a=0;
              mag2a=Va2*0.2/scale; //grid scale factor 
              ang2a=ang1a;
              mag0a=Va0*0.2/scale;  //grid scale factor 
              ang0a=ang1a;  
              
              mag1b=mag1a;
              ang1b=ang1a-2*p/3;
              mag2b=mag2a;
              ang2b=ang2a+2*p/3;
              mag0b=mag0b;
              ang0b=ang0a;
              
              mag1c=mag1a;
              ang1c=ang1a+2*p/3;
              mag2c=mag2a;
              ang2c=ang2a-2*p/3;
              mag0c=mag0a;
              ang0c=ang0a; 
              
             }
         if(chkA.GetChecked() && chkB.GetChecked() && !chkC.GetChecked())
             {
             fault=true;
              Ic1=1/(Z1+Z2*Z0/(Z2+Z0));
               app.ShowPopup(Ic1);         
              Vc1=1-(Ic1*z1.GetText()*1);
              Vc2=Vc1; 
              Vc0=Vc1; 
              mag1c=Vc1*0.2/scale;   //grid scale factor 
              ang1c=2*p/3;
              mag2c=Vc2*0.2/scale; //grid scale factor 
              ang2c=ang1c;
              mag0c=Vc0*0.2/scale;  //grid scale factor 
              ang0c=ang1c;  
              
               mag1a=mag1c;
              ang1a=ang1c-2*p/3;
              mag2a=mag2c;
              ang2a=ang2c+2*p/3;
              mag0a=mag0c;
              ang0a=ang0c;
              
               mag1b=mag1c;
              ang1b=ang1c+2*p/3;
              mag2b=mag2c;
              ang2b=ang2c-2*p/3;
              mag0b=mag0c;
              ang0b=ang0c;
              
             }    
             if(chkA.GetChecked() && chkC.GetChecked() && !chkB.GetChecked())
             {
             fault=true;
              Ib1=1/(Z1+Z2*Z0/(Z2+Z0));
               app.ShowPopup(Ib1);         
              Vb1=1-(Ib1*z1.GetText()*1);
              Vb2=Vb1; 
              Vb0=Vb1; 
              mag1b=Vb1*0.2/scale;   //grid scale factor 
              ang1b=-2*p/3;
              mag2b=Vb2*0.2/scale; //grid scale factor 
              ang2b=ang1b;
              mag0b=Vb0*0.2/scale;  //grid scale factor 
              ang0b=ang1b;  
              
               mag1a=mag1b;
              ang1a=ang1b+2*p/3;
              mag2a=mag2b;
              ang2a=ang2b-2*p/3;
              mag0a=mag0b;
              ang0a=ang0b;
              
               mag1c=mag1b;
              ang1c=ang1b-2*p/3;
              mag2c=mag2b;
              ang2c=ang2b+2*p/3;
              mag0c=mag0b;
              ang0c=ang0b;
              
             }    
       }
       
// ***********************  PHASE FAULTS (NO GROUND) ****************************

// ***********************  TWO PHASE FAULTS  **********************************      
       if(chkG.GetChecked()==false)
       {
           if(chkC.GetChecked() && chkB.GetChecked() && !chkA.GetChecked())
             {
             fault=true;
       //      app.ShowPopup(  maga*scalefactor);
              I1=maga*scalefactor/(z1.GetText()*1+z2.GetText()*1);
              IbR=-2*I1*Math.cos(3.141592/6);
              IcR=-IbR;
                    
              Va1=1-(I1*z1.GetText()*1);
              Va2=Va1; 
              Va0=0; 
              mag1a=Va1*0.2/scale;   //grid scale factor 
              ang1a=0;
              mag2a=Va2*0.2/scale; //grid scale factor 
              ang2a=0;
              mag0a=Va0*0.2/scale;  //grid scale factor 
              ang0a=0;  
              
               mag1b=mag1a;
              ang1b=ang1a-2*p/3;
              mag2b=mag2a;
              ang2b=ang2a+2*p/3;
              mag0b=mag0b;
              ang0b=ang0a;
              
              mag1c=mag1a;
              ang1c=ang1a+2*p/3;
              mag2c=mag2a;
              ang2c=ang2a-2*p/3;
              mag0c=mag0a;
              ang0c=ang0a; 
              
             }
         if(chkA.GetChecked() && chkB.GetChecked() && !chkC.GetChecked())
             {
             fault=true;
             
              I1=maga*scalefactor/(z1.GetText()*1+z2.GetText()*1);
              IaR=-2*I1*Math.cos(3.141592/6)*Math.cos(3.141592/6);
              IaI=-2*I1*Math.cos(3.141592/6)*Math.sin(3.141592/6);
              IbR=-IaR;
              IbI=-IaI;
              
                
              Vc1=1-(I1*z1.GetText()*1);
              Vc2=Vc1; 
              Vc0=0; 
              mag1c=Vc1*0.2/scale;   //grid scale factor 
              ang1c=2*p/3;
              mag2c=Vc2*0.2/scale; //grid scale factor 
              ang2c=2*p/3;
              mag0c=Vc0*0.2/scale;  //grid scale factor 
              ang0c=0;  
              
               mag1a=mag1c;
              ang1a=ang1c-2*p/3;
              mag2a=mag2c;
              ang2a=ang2c+2*p/3;
              mag0a=mag0c;
              ang0a=ang0c;
              
               mag1b=mag1c;
              ang1b=ang1c+2*p/3;
              mag2b=mag2c;
              ang2b=ang2c-2*p/3;
              mag0b=mag0c;
              ang0b=ang0c;
              
             }    
             if(chkA.GetChecked() && chkC.GetChecked() && !chkB.GetChecked())
             {
             fault=true;
              Ib1=maga*scalefactor/(z1.GetText()*1+z2.GetText()*1);
                     
              Vb1=1-(Ib1*z1.GetText()*1);
              Vb2=Vb1; 
              Vb0=0; 
              mag1b=Vb1*0.2/scale;   //grid scale factor 
              ang1b=-2*p/3;
              mag2b=Vb2*0.2/scale; //grid scale factor 
              ang2b=-2*p/3;
              mag0b=Vb0*0.2/scale;  //grid scale factor 
              ang0b=0;  
              
               mag1a=mag1b;
              ang1a=ang1b+2*p/3;
              mag2a=mag2b;
              ang2a=ang2b-2*p/3;
              mag0a=mag0b;
              ang0a=ang0b;
              
               mag1c=mag1b;
              ang1c=ang1b-2*p/3;
              mag2c=mag2b;
              ang2c=ang2b+2*p/3;
              mag0c=mag0b;
              ang0c=ang0b;
              
             }    
       }
// *************************  THREE PHASE FAULT **************************************       
       if(chkA.GetChecked() && chkB.GetChecked() && chkC.GetChecked())
             {
             fault=true;
              Ia1=1/(z1.GetText()*1);
              Va1=1-(Ia1*z1.GetText()*1);
              Va2=0; 
              Va0=0; 
              mag1a=Va1*0.2/scale;   //grid scale factor 
              ang1a=0;
              mag2a=Va2*0.2/scale; //grid scale factor 
              ang2a=0;
              mag0a=Va0*0.2/scale;  //grid scale factor 
              ang0a=0;
              
              mag1b=mag1a;
              ang1b=ang1a-2*p/3;
              mag2b=mag2a;
              ang2b=ang2a+2*p/3;
              mag0b=mag0b;
              ang0b=ang0a;
              
              mag1c=mag1a;
              ang1c=ang1a+2*p/3;
              mag2c=mag2a;
              ang2c=ang2a-2*p/3;
              mag0c=mag0a;
              ang0c=ang0a; 
             }
             if(fault)
             {
           real1a=mag1a*Math.cos(ang1a);
            real1b=mag1a*Math.cos(-2*p/3+ang1a);
            real1c=mag1a*Math.cos(2*p/3+ang1a);
            imag1a=mag1a*Math.sin(ang1a);
            imag1b=mag1a*Math.sin(-2*p/3+ang1a);
            imag1c=mag1a*Math.sin(2*p/3+ang1a);
             
            real2a=mag2a*Math.cos(ang2a);
            real2b=mag2a*Math.cos(2*p/3+ang2a);
            real2c=mag2a*Math.cos(-2*p/3+ang2a);
            imag2a=mag2a*Math.sin(ang2a);
            imag2b=mag2a*Math.sin(2*p/3+ang2a);
            imag2c=mag2a*Math.sin(-2*p/3+ang2a);
            
            real0a=mag0a*Math.cos(ang0a);
            real0b=real0a;
            real0c=real0a;
            imag0a=mag0a*Math.sin(ang0a);
            imag0b=imag0a;
            imag0c=imag0a;
           
            imgposseq.Clear();
            imgfront.Clear();
            imgnumbers.Clear();
            imgnumbers2.Clear();
            draw_seq_components(); 
            calculate_unbalanced_phasors();
            if(showbtnall)show_components();                   //vector sum if selected
            show_text();                               // show unbalanced phasors text
            show_labels();                          // show labels on main grid if button selected 
            imgfront.Update();
            imgnumbers.Update();
  	        imgnumbers2.Update();
  	        
  	        imgcurrent.SetPaintColor(colora);
  	         imgcurrent.DrawText("Ia = "+Math.round(IaR*100)/100+asign+imagnumbersymbol+Math.round(IaI*100)/100,.55,.2);
  	     
  	        imgcurrent.SetPaintColor(colorb);
  	        imgcurrent.DrawText("Ib = "+Math.round(IbR*100)/100+asign+imagnumbersymbol+Math.round(IbI*100)/100,.55,.3);
  	        imgcurrent.SetPaintColor(colorc);
  	        imgcurrent.DrawText("Ic = "+Math.round(IcR*100)/100+asign+imagnumbersymbol+Math.round(IcI*100)/100,.55,.4);
  	       
  	  //      imgcurrent.DrawText("Ia1 = "+asign+imagnumbersymbol+Math.round(Ia1*100)/100,.55,.6);
  	  //      imgcurrent.DrawText("Ia2 = "+asign+imagnumbersymbol+Math.round(Ia2*100)/100,.55,.7);
  	  //      imgcurrent.DrawText("Ia0 = "+asign+imagnumbersymbol+Math.round(Ia0*100)/100,.55,.8);
  	        
  	 /*       imgcurrent.SetLineWidth(4);
  	        
  	        imgcurrent.SetPaintColor(colora);
   	       for(i=0;i<Ia/scalefactor*10;i++)
  	        {
  	        imgcurrent.DrawLine(0.5,0.5+i/20,0.5,0.5+i/20+1/40);
  	        }
  	        imgcurrent.SetPaintColor(colorb);
   	        for(i=0;i<Ib/scalefactor*10;i++)
  	        {
  	        imgcurrent.DrawLine(0.5+i*IbR/scalefactor/20,  0.5-i*IbI/scalefactor/20,  0.5+IbR/scalefactor/40*(i+0.5),    0.5-IbI/scalefactor/40*(i+0.5));
  	        }
  	        imgcurrent.DrawLine(0.5+9*IbR/scalefactor/20,  0.5+9*IbI/scalefactor/20,  0.5+IbR/scalefactor/20*10,    0.5+IbI/scalefactor/20*10);
  	        
  	        imgcurrent.SetPaintColor(colorc);
   	        for(i=0;i<9;i++)
  	        {
  	        imgcurrent.DrawLine(0.5+i*IcR/scalefactor/20,  0.5+i*IcI/scalefactor/20,  0.5+IcR/scalefactor/20*(i+0.5),    0.5+IcI/scalefactor/20*(i+0.5));
  	        }
  	        imgcurrent.DrawLine(0.5+9*IcR/scalefactor/20,  0.5+9*IcI/scalefactor/20,  0.5+IcR/scalefactor/20*10,    0.5+IcI/scalefactor/20*10);
  	    */    
  	        imgcurrent.Update();
  	        }
   
}