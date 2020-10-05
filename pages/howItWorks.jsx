import React from "react";
import styles from '../styles/HowItWorks.module.css';


const data = [
    {
        "name": "Dale Dominguez",
        "description": "Ima H. Ashley",
        "email": "mi@suscipit.com",
        "phone": "16320615 1312"
    },
    {
        "name": "Charles Sanchez",
        "description": "Gage K. Rivas",
        "email": "lacus@lacusNulla.co.uk",
        "phone": "16010425 9635"
    },
    {
        "name": "Warren Hayes",
        "description": "Fredericka Kaufman",
        "email": "sapien.imperdiet.ornare@lacusUtnec.ca",
        "phone": "16820905 0791"
    },
    {
        "name": "Tate Holden",
        "description": "Nigel I. Miller",
        "email": "erat.Etiam.vestibulum@etarcu.ca",
        "phone": "16090319 0130"
    },
    {
        "name": "Conan Macias",
        "description": "Reece Hartman",
        "email": "adipiscing@venenatislacusEtiam.ca",
        "phone": "16570809 0468"
    },
    {
        "name": "Avram Sweet",
        "description": "Oleg Frye",
        "email": "Fusce.aliquam.enim@nec.co.uk",
        "phone": "16881029 4515"
    },
    {
        "name": "Abel Hodge",
        "description": "Steel Hatfield",
        "email": "Class.aptent.taciti@aliquetnecimperdiet.com",
        "phone": "16310621 9656"
    },
    {
        "name": "Hammett Vaughn",
        "description": "Sade M. Cooley",
        "email": "Duis@egestasSed.co.uk",
        "phone": "16340313 7676"
    },
    {
        "name": "Ivor Sargent",
        "description": "Dale X. Mckay",
        "email": "libero.Morbi.accumsan@infelis.edu",
        "phone": "16250115 4419"
    },
    {
        "name": "Henry Albert",
        "description": "Brett Campos",
        "email": "ultrices.sit.amet@arcuac.net",
        "phone": "16161213 2116"
    },
    {
        "name": "Richard Baker",
        "description": "Amy K. Blanchard",
        "email": "laoreet@necante.net",
        "phone": "16370320 9274"
    },
    {
        "name": "Gareth Allison",
        "description": "Risa E. Wells",
        "email": "sit.amet@rhoncusProin.co.uk",
        "phone": "16500726 2149"
    },
    {
        "name": "Byron Gilbert",
        "description": "Jamal Bowers",
        "email": "eget@quismassaMauris.com",
        "phone": "16880920 1810"
    },
    {
        "name": "Lucas Pope",
        "description": "Hamish R. Coffey",
        "email": "iaculis.enim.sit@sollicitudincommodo.co.uk",
        "phone": "16680301 8685"
    },
    {
        "name": "Anthony David",
        "description": "Audrey Crane",
        "email": "porttitor@erat.edu",
        "phone": "16010125 2161"
    },
    {
        "name": "Allen Mcleod",
        "description": "Gannon Boone",
        "email": "mus@natoque.co.uk",
        "phone": "16930819 5529"
    },
    {
        "name": "Daquan Cole",
        "description": "Ebony E. Ford",
        "email": "dictum.sapien.Aenean@suscipitest.edu",
        "phone": "16100307 7680"
    },
    {
        "name": "Rigel Tyler",
        "description": "Briar Riddle",
        "email": "enim.nisl.elementum@ornarelectus.org",
        "phone": "16320304 3348"
    },
    {
        "name": "John Cotton",
        "description": "Tana O. Oneal",
        "email": "enim.gravida@eratEtiam.ca",
        "phone": "16730524 6998"
    },
    {
        "name": "Neville Livingston",
        "description": "Sybil Blanchard",
        "email": "feugiat@tristiquesenectus.co.uk",
        "phone": "16511027 2514"
    },
    {
        "name": "Abdul Merrill",
        "description": "Flavia Livingston",
        "email": "laoreet.libero@orciluctus.co.uk",
        "phone": "16730830 4133"
    },
    {
        "name": "Vladimir Reese",
        "description": "Hedley W. Sandoval",
        "email": "nec.orci.Donec@ipsumleo.org",
        "phone": "16411204 3379"
    },
    {
        "name": "Elijah Reilly",
        "description": "Wyatt K. Reeves",
        "email": "lorem.vehicula.et@eget.edu",
        "phone": "16521119 6786"
    },
    {
        "name": "Abel Humphrey",
        "description": "Dylan Q. Herrera",
        "email": "urna.convallis.erat@Seddiam.ca",
        "phone": "16700613 3230"
    },
    {
        "name": "Yasir Bell",
        "description": "Ruth Z. Santos",
        "email": "mauris.aliquam.eu@nonhendrerit.org",
        "phone": "16190325 6137"
    },
    {
        "name": "Carter Chambers",
        "description": "Xenos B. Barnes",
        "email": "enim.commodo.hendrerit@gravida.com",
        "phone": "16111225 3669"
    },
    {
        "name": "Lucian Shelton",
        "description": "Nerea Henson",
        "email": "Fusce@quisurna.com",
        "phone": "16791203 4076"
    },
    {
        "name": "Magee Talley",
        "description": "Yeo Brewer",
        "email": "ornare.elit.elit@orcisem.com",
        "phone": "16850310 9970"
    },
    {
        "name": "Judah Riggs",
        "description": "Reed Hall",
        "email": "interdum.ligula.eu@nec.ca",
        "phone": "16970207 4023"
    },
    {
        "name": "Driscoll Byrd",
        "description": "Hashim Figueroa",
        "email": "Sed.eu@Curabitursed.edu",
        "phone": "16060825 6392"
    },
    {
        "name": "Hyatt Albert",
        "description": "Zoe Peck",
        "email": "Donec.nibh@dictumeu.com",
        "phone": "16540925 5402"
    },
    {
        "name": "Aladdin Castaneda",
        "description": "Hedwig Klein",
        "email": "risus@sitamet.org",
        "phone": "16120203 1702"
    },
    {
        "name": "Bevis Sargent",
        "description": "Quyn P. Spencer",
        "email": "tellus.sem@enimcondimentum.co.uk",
        "phone": "16670713 2830"
    },
    {
        "name": "Malcolm Mercado",
        "description": "Jasper U. Fernandez",
        "email": "ornare.lectus@urna.net",
        "phone": "16810425 2856"
    },
    {
        "name": "Walker Contreras",
        "description": "Peter Herring",
        "email": "risus.a@mollis.edu",
        "phone": "16210606 3130"
    },
    {
        "name": "Damon Spears",
        "description": "Oscar Bird",
        "email": "erat.vitae@aliquet.co.uk",
        "phone": "16091030 6620"
    },
    {
        "name": "Mason Sanford",
        "description": "Carissa D. Joyce",
        "email": "in.molestie.tortor@auctorodio.com",
        "phone": "16810225 3187"
    },
    {
        "name": "Coby Blake",
        "description": "Austin Santos",
        "email": "quam.Curabitur@augueporttitorinterdum.org",
        "phone": "16960921 0233"
    },
    {
        "name": "Keaton Burks",
        "description": "Marah Pittman",
        "email": "vitae.erat.Vivamus@antedictumcursus.ca",
        "phone": "16100717 0903"
    },
    {
        "name": "Edan Curry",
        "description": "Isadora Haynes",
        "email": "leo.Vivamus@vel.co.uk",
        "phone": "16640904 0455"
    },
    {
        "name": "Peter Kramer",
        "description": "Signe Nixon",
        "email": "pharetra.nibh@Cras.ca",
        "phone": "16050711 1284"
    },
    {
        "name": "Myles Kirk",
        "description": "Hollee A. Bean",
        "email": "ultrices@ipsumSuspendisse.org",
        "phone": "16350609 8478"
    },
    {
        "name": "Lyle Gray",
        "description": "Allistair Stein",
        "email": "non@ipsum.org",
        "phone": "16061208 1869"
    },
    {
        "name": "Oren Gentry",
        "description": "Giacomo Wolf",
        "email": "massa.non.ante@malesuadaInteger.org",
        "phone": "16580710 9961"
    },
    {
        "name": "Wing Carrillo",
        "description": "Seth H. French",
        "email": "auctor@feugiatSednec.com",
        "phone": "16630922 9869"
    },
    {
        "name": "Emmanuel Rice",
        "description": "Katelyn W. Underwood",
        "email": "blandit.enim.consequat@Donectempus.com",
        "phone": "16050417 6512"
    },
    {
        "name": "Ronan Whitfield",
        "description": "Jack Coleman",
        "email": "tristique.aliquet@est.edu",
        "phone": "16461215 2407"
    },
    {
        "name": "Ivan Reilly",
        "description": "Grace Dixon",
        "email": "Proin.ultrices.Duis@Curabituregestas.com",
        "phone": "16430727 2551"
    },
    {
        "name": "Colton Swanson",
        "description": "Ashely Beasley",
        "email": "Phasellus.vitae.mauris@arcu.co.uk",
        "phone": "16081022 0111"
    },
    {
        "name": "Richard Garner",
        "description": "Iona Barton",
        "email": "sem.semper.erat@augueeu.net",
        "phone": "16280101 0709"
    },
    {
        "name": "Damon Yang",
        "description": "Mercedes Holt",
        "email": "ipsum.dolor.sit@suscipitnonummy.ca",
        "phone": "16000212 8510"
    },
    {
        "name": "Ignatius Gallegos",
        "description": "Carter U. Palmer",
        "email": "velit.Quisque.varius@dignissimlacusAliquam.net",
        "phone": "16380508 6299"
    },
    {
        "name": "Basil Bowman",
        "description": "Justine E. Stephens",
        "email": "Aenean@augue.com",
        "phone": "16250622 3334"
    },
    {
        "name": "Dominic Herman",
        "description": "Wang K. Cantu",
        "email": "Morbi.quis@lobortis.com",
        "phone": "16270206 0902"
    },
    {
        "name": "Quinlan Kline",
        "description": "Unity Franklin",
        "email": "orci.in@nonquam.edu",
        "phone": "16991024 2834"
    },
    {
        "name": "Price Mccullough",
        "description": "Reese Kemp",
        "email": "Fusce@Aliquamnecenim.com",
        "phone": "16690520 5982"
    },
    {
        "name": "Castor Guthrie",
        "description": "Martena D. Padilla",
        "email": "molestie.tellus.Aenean@lectus.net",
        "phone": "16150506 9847"
    },
    {
        "name": "Channing Vaughan",
        "description": "Thomas Randolph",
        "email": "vel@imperdiet.edu",
        "phone": "16451217 2810"
    },
    {
        "name": "Coby Hansen",
        "description": "Amery Stewart",
        "email": "et.magnis@Crasinterdum.org",
        "phone": "16721125 8426"
    },
    {
        "name": "Eagan Barnes",
        "description": "Savannah B. Morin",
        "email": "volutpat.nunc@eleifendnec.com",
        "phone": "16210909 7978"
    },
    {
        "name": "Stewart Forbes",
        "description": "Brian R. Christian",
        "email": "Nam@Mauris.com",
        "phone": "16530312 4969"
    },
    {
        "name": "Phelan Frederick",
        "description": "Callie U. Horne",
        "email": "Duis.sit@et.com",
        "phone": "16910207 1025"
    },
    {
        "name": "Cole Leach",
        "description": "Alyssa Jackson",
        "email": "torquent.per.conubia@nectellusNunc.edu",
        "phone": "16080113 4586"
    },
    {
        "name": "Ray Macias",
        "description": "Jarrod J. Delaney",
        "email": "urna.et.arcu@acrisusMorbi.edu",
        "phone": "16590707 3067"
    },
    {
        "name": "Harrison Reid",
        "description": "Craig Russell",
        "email": "Maecenas.libero@etultrices.org",
        "phone": "16390722 2370"
    },
    {
        "name": "Cyrus Stephens",
        "description": "Uriel R. Salazar",
        "email": "fermentum.arcu.Vestibulum@orci.edu",
        "phone": "16020221 1231"
    },
    {
        "name": "Scott Hawkins",
        "description": "Hiram U. Garcia",
        "email": "nec.tempus@luctussit.com",
        "phone": "16300303 5437"
    },
    {
        "name": "Drew Baldwin",
        "description": "Guinevere Kerr",
        "email": "et@Sednulla.ca",
        "phone": "16550609 8721"
    },
    {
        "name": "Hiram Dorsey",
        "description": "Lamar Moreno",
        "email": "Pellentesque@Fusce.co.uk",
        "phone": "16360207 9489"
    },
    {
        "name": "Channing Romero",
        "description": "Joelle Reynolds",
        "email": "ridiculus.mus.Proin@maurissit.ca",
        "phone": "16010215 8227"
    },
    {
        "name": "Omar Estes",
        "description": "Raya Walters",
        "email": "vitae@turpis.edu",
        "phone": "16841125 4793"
    },
    {
        "name": "Jermaine Waller",
        "description": "Jeanette Duran",
        "email": "mollis.dui@egestasAliquamnec.ca",
        "phone": "16440223 1346"
    },
    {
        "name": "Jonas Nelson",
        "description": "Elizabeth Sharpe",
        "email": "leo.Morbi@dignissimmagna.net",
        "phone": "16890918 9352"
    },
    {
        "name": "Bradley Conway",
        "description": "Gareth Ramsey",
        "email": "tristique.ac.eleifend@ac.org",
        "phone": "16530401 3526"
    },
    {
        "name": "Jackson Barker",
        "description": "Vivien Blair",
        "email": "ante@magna.net",
        "phone": "16550211 8234"
    },
    {
        "name": "Felix Hess",
        "description": "Lael H. Stark",
        "email": "montes.nascetur.ridiculus@accumsan.edu",
        "phone": "16971023 8552"
    },
    {
        "name": "Noble Daniels",
        "description": "Quamar N. Sawyer",
        "email": "Nunc.mauris@tempor.edu",
        "phone": "16230112 8761"
    },
    {
        "name": "Declan Cobb",
        "description": "Trevor B. Rose",
        "email": "ligula.Nullam@hendrerit.com",
        "phone": "16361124 3621"
    },
    {
        "name": "Gregory Emerson",
        "description": "Dawn Mckay",
        "email": "tellus.Nunc@auguescelerisquemollis.ca",
        "phone": "16430207 4325"
    },
    {
        "name": "Amal Suarez",
        "description": "Neil Yates",
        "email": "natoque@montesnasceturridiculus.org",
        "phone": "16210910 9591"
    },
    {
        "name": "Malachi Cherry",
        "description": "Glenna C. Kerr",
        "email": "turpis.egestas@ornareIn.com",
        "phone": "16800424 6651"
    },
    {
        "name": "Michael Dyer",
        "description": "Karen C. Hampton",
        "email": "mollis@sem.co.uk",
        "phone": "16750821 8638"
    },
    {
        "name": "Justin Bender",
        "description": "Guy Gillespie",
        "email": "sit@Inmi.org",
        "phone": "16250509 8505"
    },
    {
        "name": "Hayden Greer",
        "description": "Keegan G. Espinoza",
        "email": "sit@egetvarius.net",
        "phone": "16930224 6997"
    },
    {
        "name": "Emerson Gardner",
        "description": "Raymond N. Vargas",
        "email": "diam.eu@fermentumarcuVestibulum.ca",
        "phone": "16750521 7021"
    },
    {
        "name": "Henry Mcfadden",
        "description": "Zorita V. Moss",
        "email": "diam@Donecconsectetuermauris.net",
        "phone": "16620118 3826"
    },
    {
        "name": "Preston Bright",
        "description": "Hanna Z. Stout",
        "email": "ipsum@Duisrisusodio.net",
        "phone": "16790230 7441"
    },
    {
        "name": "Howard Spence",
        "description": "Zelda E. Mcgowan",
        "email": "sem.ut@diamSed.org",
        "phone": "16130824 9513"
    },
    {
        "name": "Kato Alford",
        "description": "Deanna Harmon",
        "email": "mauris.elit@etnetus.net",
        "phone": "16580720 2659"
    },
    {
        "name": "Nathaniel Griffith",
        "description": "Cherokee W. Vaughn",
        "email": "magna.Praesent@risusaultricies.net",
        "phone": "16080107 1440"
    },
    {
        "name": "Gregory Lang",
        "description": "Indira K. Kaufman",
        "email": "quam.vel@velturpisAliquam.org",
        "phone": "16930413 3268"
    },
    {
        "name": "Graham Thompson",
        "description": "Fiona V. Mcpherson",
        "email": "Proin.velit.Sed@lacusvestibulum.org",
        "phone": "16280418 2240"
    },
    {
        "name": "Allen Hart",
        "description": "Colleen R. Webb",
        "email": "pulvinar.arcu@orcilobortisaugue.net",
        "phone": "16340510 6422"
    },
    {
        "name": "Tucker Hardy",
        "description": "Montana Odonnell",
        "email": "eros.non.enim@doloregestasrhoncus.edu",
        "phone": "16471126 8682"
    },
    {
        "name": "Lee Cotton",
        "description": "Cherokee Knapp",
        "email": "mi@Nullaeu.org",
        "phone": "16420418 4255"
    },
    {
        "name": "Caesar Ferrell",
        "description": "Susan D. Delacruz",
        "email": "malesuada.id.erat@luctus.net",
        "phone": "16741007 4962"
    },
    {
        "name": "Jamal Dale",
        "description": "Mia V. Walton",
        "email": "ornare@at.ca",
        "phone": "16240101 3830"
    },
    {
        "name": "Ralph Clements",
        "description": "Mason D. Ferguson",
        "email": "mattis@venenatis.edu",
        "phone": "16930824 3261"
    },
    {
        "name": "Maxwell Ingram",
        "description": "Nash Ayers",
        "email": "adipiscing@Nam.edu",
        "phone": "16150613 5423"
    },
    {
        "name": "Eagan Weeks",
        "description": "Kelsey K. Hart",
        "email": "volutpat.nunc@enimSuspendissealiquet.com",
        "phone": "16220505 0590"
    }
]

export default function Home() {
    return (
        <div className={styles.container}>
            {
                data.map(_ => {
                    return (
                        <div className={styles.rowWrapper}>
                            <div className={styles.rowContent}>
                                <div className={styles.rowTitle}>name:</div>
                                <div>{_.name}</div>
                            </div>
                            <div className={styles.rowContent}>
                                <div className={styles.rowTitle}>description:</div>
                                <div>{_.description}</div>
                            </div>
                            <div className={styles.rowContent}>
                                <div className={styles.rowTitle}>email:</div>
                                <div>{_.email}</div>
                            </div>
                            <div className={styles.rowContent}>
                                <div className={styles.rowTitle}> phone:</div>
                                <div>{_.phone}</div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
