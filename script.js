const musicGenre = ['Hip-Hop', 'Metal', 'Rock'];

const metalBands = ['Metallica', 'Black Sabbath', 'Megadeath', 'Pantera', 'Slayer',];
const hipHopArtists = ['Eminem', '50 Cent', 'Ice Cube', 'Dr. Dre', 'Snoop dogg'];
const rockBands = ['Blink 182', 'Greenday', 'Linkin Park', 'Foo Fighters', 'Red Hot Chili Peppers'];

const MetallicaSongs = ['One', 'Blackened', 'Fade to Black', 'Master of Puppets', 'Nothing else matters', 'Unforgiven', 'enter sandman', 'For Whom the bell tolls'];
const BlackSabbathSongs = ['Paranoid','Iron Man','War Pigs','Hole in the sky','children of the grave']
const MegadeathSongs = ['a tout le monde','Holy wars','symphony of destruction','In my darkest hour','train of consequences'];
const PanteraSongs = ['walk','Cowboy from hell','Im Broken','F*cking hostile','Hollow'];
const SlayerSongs = ['south of heaven',' angel of death','raining blood','repentless','hell awaits'];

const EminemSongs = ['My name is','real slim shady','stan','till I collapse','Without me'];
const CentSongs = ['candy shop','in da club','P.I.M.P.','Just a lil bit','Many men'];
const IceCubeSongs = ['it was a good day','You know how we do it','check yo self','Aint got no haters','friday'];
const DrDreSongs = ['Forgot about Dre','still D.R.E.','Nuthin but a G thang','the next episode','I need a doctor'];
const SnoopDoggSongs = ['Young, wild, and free','Gin and Juice','Who am I','Peaches n Cream','Drop it Like its hot'];

const BlinkSongs = ['all the small things','I miss you','adams song','dammit','Aliens exist'];
const GreendaySongs = ['21 Guns','Wake me up when september ends','American Idiot','Basket Case','Good Riddance'];
const LinkinSongs = ['in the end','numb',"What I've done",'somewhere I belong','New divide'];
const FooSongs = ['Monkey wrench','Best of you','My hero','Learn to fly','The Pretender'];
const RedHotSongs = ['californication','under the bridge','otherside','Snow','Scar tissue'];


const genreSelect = musicGenre[Math.floor(Math.random() * musicGenre.length)]

const BandSelection = genreSelect => {
    let band = ''
    
    if (genreSelect === 'Hip-Hop') {
        band = hipHopArtists[Math.floor(Math.random() * hipHopArtists.length)]
        
    } else if (genreSelect === 'Metal') {
        band = metalBands[Math.floor(Math.random() * metalBands.length)];

    } else if (genreSelect === 'Rock') {
        band = rockBands[Math.floor(Math.random() * rockBands.length)];
    }
    return band;
}


let BandPick = BandSelection(genreSelect)


const songGenerator = BandPick => {
    let song = '';

    if (BandPick === 'Metallica') {
        song = MetallicaSongs[Math.floor(Math.random() * MetallicaSongs.length)];
    } else if (BandPick === 'Black Sabbath') {
        song = BlackSabbathSongs[Math.floor(Math.random() * BlackSabbathSongs.length)];
    } else if (BandPick === 'Megadeath') {
        song = MegadeathSongs[Math.floor(Math.random() * MegadeathSongs.length)];
    } else if (BandPick === 'Pantera') {
        song = PanteraSongs[Math.floor(Math.random() * PanteraSongs.length)];
    } else if (BandPick === 'Slayer') {
        song = SlayerSongs[Math.floor(Math.random() * SlayerSongs.length)];
    } else if (BandPick === 'Eminem') {
        song = EminemSongs[Math.floor(Math.random() * EminemSongs.length)];
    } else if (BandPick === '50 Cent') {
        song = CentSongs[Math.floor(Math.random() * CentSongs.length)];
    } else if (BandPick === 'Ice Cube') {
        song = IceCubeSongs[Math.floor(Math.random() * IceCubeSongs.length)];
    } else if (BandPick === 'Dr. Dre') {
        song = DrDreSongs[Math.floor(Math.random() * DrDreSongs.length)];
    } else if (BandPick === 'Snoop dogg') {
        song = SnoopDoggSongs[Math.floor(Math.random() * SnoopDoggSongs.length)];
    } else if (BandPick === 'Blink 182') {
        song = BlinkSongs[Math.floor(Math.random() * BlinkSongs.length)];
    } else if (BandPick === 'Greenday') {
        song =  GreendaySongs[Math.floor(Math.random() * GreendaySongs.length)];
    } else if (BandPick === 'Linkin Park') {
        song = LinkinSongs[Math.floor(Math.random() * LinkinSongs.length)];
    } else if (BandPick === 'Foo Fighters') {
        song = FooSongs[Math.floor(Math.random() * FooSongs.length)];
    } else if (BandPick === 'Red Hot Chili Peppers') {
        song = RedHotSongs[Math.floor(Math.random() * RedHotSongs.length)];
    } else {
        song = "No song selected, why don't you select one today."
    }
    return song;
}

let songPick = songGenerator(BandPick)

let finalOutPut = `Hello! Your genre for today is: ${genreSelect}. The band of the day is: ${BandPick} and their song "${songPick}" is what we have on deck. Let us know what you think!`

// console.log(BandPick)
// console.log(songPick)

console.log(finalOutPut)