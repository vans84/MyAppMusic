import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';


class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
                sections: [{
                      title: 'Here We Go Again 2009',
                      imageUrl: 'https://upload.wikimedia.org/wikipedia/pt/0/0b/Demi_Lovato_-_Here_We_Go_Again.jpg',
                      id: 1,
                      PlayList: [ 
                        'Here We Go Again',
                        'Solo',
                        'Got Nothing On Me',
                        'Falling Over Me',
                        'Quiet',
                        'Catch Me',
                        'Everytime You Lie',
                        'Got Dynamite',
                        'Stop The World',
                        'World Of Chances',
                        'Remember December',
                        'Everything Youre Not',
                        'Gift Of A Friend',
                        'So Far So Great',
                      ]
                    },
                    {
                      title: 'Unbroken 2011',
                      imageUrl: 'https://images.all-free-download.com/images/wallpapers_large/demi_lovato_5_6709.jpg',
                      id: 2,
                      PlayList: [ 
                        'All Night Long (feat. Missy Elliott & Timbaland)',
                        'Whos That Boy (feat. Dev)',
                        'Youre My Only Shorty (feat. Lyaz)',
                        'Together (feat. Jason Derulo)',
                        'Lightweight',
                        'Unbroken',
                        'Fix a Heart',
                        'Hold Up',
                        'Mistake',
                        'Give Your Heart a Break',
                        'Skyscraper',
                        'In Real Life',
                        'My Love Is Like a Star',
                        'For The Love Of a Daughter',
                        'Skyscraper (Wizz Dumb Remix)',
      
                      ]

                    },
                    {
                      title: 'Demi 2013',
                      imageUrl: 'https://upload.wikimedia.org/wikipedia/pt/8/81/Demi_Lovato_-_Made_in_the_USA.jpg',
                      id: 3,
                      PlayList:  [
                        'Heart Attack',
                        'Made in the USA',
                        'Without the Love',
                        'Neon Lights',
                        'Two Pieces',
                        'Nightingale',
                        'In Case',
                        'Really Dont Care (feat. Cher Lloyd)',
                        'Fire Starter',
                        'Something That We’re Not',
                        'Never Been Hurt',
                        'Shouldn’t Come Back',
                        'Warrior',

                      ]

                    },
                    {
                      title: 'Confident 2015',
                      imageUrl: 'https://images.all-free-download.com/images/wallpapers_large/demi_lovato_confident_15260.jpg',
                      id: 4,
                      PlayList: [
                        'Confident',
                        'Cool For The Summer',
                        'Old Ways',
                        'For You',
                        'Stone Cold',
                        'Kingdom Come (feat. Iggy Azalea)',
                        'Waitin For You (feat. Sirah)',
                        'Wildfire',
                        'Lionheart',
                        'Yes',
                        'Father',

                      ]
                    },
                    {
                      title: 'Tell Me You Love Me 2017',
                      imageUrl: 'https://www.pride.com/sites/default/files/2017/09/28/unknown.jpg',
                      id: 5,
                      PlayList: [
                        'Sorry Not Sorry',
                        'Tell Me You Love Me',
                        'Sexy Dirty Love',
                        'You Dont Do It For Me Anymore',
                        'Daddy Issues',
                        'Ruin The Friendship',
                        'Only Forever',
                        'Lonely (feat. Lil Wayne)',
                        'Cry Baby',
                        'Games',
                        'Concentrate',
                        'Hitchhiker',

                      ]
                    },
                    {
                        title: 'Dancing With The Devil 2021',
                        imageUrl: 'https://www.portalpopcyber.com/wp-content/uploads/2021/03/dancing-with-the-devil-the-art-of-starting-over-capa-1-e1616689304683.jpeg',
                        id: 6,
                        PlayList: [
                        'Anyone',
                        'Dancing With The Devil',
                        'ICU (Madisons Lullabye)',
                        'Intro',
                        'The Art Of Starting Over',
                        'Lonely People',
                        'The Way You Dont Look At Me',
                        'Melon Cake',
                        'Met Him Last Night (feat. Ariana Grande)',
                        'What Other People Say (feat. Sam Fischer)',
                        'Carefully',
                        'The Kind Of Lover I Am',
                        'Easy (feat. Noah Cyrus)',
                        '15 Minutes',
                        'My Girlfriends Are My Boyfriend (feat. Saweetie)',
                        'California Sober',
                        'Mad World',
                        'Butterfly',
                        'Good Place',
                        'Sunset',

                        ]
                      }
                    ]
        }
    }


render() {
    return (
        <div className='directory-menu'>
{ 
this.state.sections.map(({title, imageUrl, id, PlayList}) => (
    <MenuItem key={id} title={title} imageUrl={imageUrl} PlayList={PlayList}/>
))}
 </div>
    );
}
}

export default Directory;
