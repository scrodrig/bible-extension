class BooksUtils {
    static getBooks = function() {
        const oldTestament = [
            {
                key: 'Genesis',
                value: 'Genesis',
                chapters: 50
            },
            {
                key: 'Exodus',
                value: 'Exodo',
                chapters: 40
            },
            {
                key: 'Leviticus',
                value: 'Levitico',
                chapters: 27
            },
            {
                key: 'Numbers',
                value: 'Numeros',
                chapters: 36
            },
            {
                key: 'Deuteronomy',
                value: 'Deuteronomio',
                chapters: 34
            },
            {
                key: 'Joshua',
                value: 'Josue',
                chapters: 24
            },
            {
                key: 'Judges',
                value: 'Jueces',
                chapters: 21
            },
            {
                key: 'Ruth',
                value: 'Ruth',
                chapters: 4
            },
            {
                key: '1Samuel',
                value: '1ra Samuel',
                chapters: 31
            },
            {
                key: '2Samuel',
                value: '2da Samuel',
                chapters: 24
            },
            {
                key: '1Kings',
                value: '1ra Reyes',
                chapters: 22
            },
            {
                key: '2Kings',
                value: '2da Reyes',
                chapters: 25
            },
            {
                key: '1Chronicles',
                value: '1ra Cronicas',
                chapters: 29
            },
            {
                key: '2Chronicles',
                value: '2da Cronicas',
                chapters: 36
            },
            {
                key: 'Ezra',
                value: 'Esdras',
                chapters: 10
            },
            {
                key: 'Nehemiah',
                value: 'Nehemias',
                chapters: 13
            },
            {
                key: 'Esther',
                value: 'Esther',
                chapters: 10
            },
            {
                key: 'Job',
                value: 'Job',
                chapters: 42
            },
            {
                key: 'Psalms',
                value: 'Salmos',
                chapters: 150
            },
            {
                key: 'Proverbs',
                value: 'Proverbios',
                chapters: 31
            },
            {
                key: 'Ecclesiastes',
                value: 'Eclesiastés',
                chapters: 12
            },


            
            {
                key: 'Song of Solomon',
                value: 'Cantar de los Cantares',
                chapters: 8
            },


            {
                key: 'Isaiah',
                value: 'Isaias',
                chapters: 66
            },
            {
                key: 'Jeremiah',
                value: 'Jeremias',
                chapters: 52
            },
            {
                key: 'Lamentations',
                value: 'Lamentaciones',
                chapters: 5
            },
            {
                key: 'Ezekiel',
                value: 'Ezequiel',
                chapters: 48
            },
            {
                key: 'Daniel',
                value: 'Daniel',
                chapters: 12
            },
            {
                key: 'Hosea',
                value: 'Oseas',
                chapters: 14
            },
            {
                key: 'Joel',
                value: 'Joel',
                chapters: 3
            },
            {
                key: 'Amos',
                value: 'Amos',
                chapters: 9
            },
            {
                key: 'Obadiah',
                value: 'Abdias',
                chapters: 1
            },

            {
                key: 'Jonah',
                value: 'Jonas',
                chapters: 4
            },
            {
                key: 'Micah',
                value: 'Miqueas',
                chapters: 7
            },
            {
                key: 'Nahum',
                value: 'Nahum',
                chapters: 3
            },
            {
                key: 'Habakkuk',
                value: 'Habacuc',
                chapters: 3
            },
            {
                key: 'Zephaniah',
                value: 'Sofonías',
                chapters: 3
            },

            {
                key: 'Haggai',
                value: 'Hageo',
                chapters: 2
            },
            {
                key: 'Zechariah',
                value: 'Zacarías',
                chapters: 14
            },
            {
                key: 'Malachi',
                value: 'Malaquías',
                chapters: 4
            }
        ]

        const newTestament = [
            {
                key: 'Matthew',
                value: 'Mateo',
                chapters: 28
            },
            {
                key: 'Mark',
                value: 'Marcos',
                chapters: 16
            },
            {
                key: 'Luke',
                value: 'Lucas',
                chapters: 24
            },
            {
                key: 'John',
                value: 'Juán',
                chapters: 21
            },
            {
                key: 'Acts',
                value: 'Hechos',
                chapters: 28
            },

            {
                key: 'Romans',
                value: 'Romanos',
                chapters: 16
            },
            {
                key: '1Corinthians',
                value: '1ra Corintios',
                chapters: 16
            },
            {
                key: '2Corinthians',
                value: '2da Corintios',
                chapters: 13
            },
            {
                key: 'Galatians',
                value: 'Gálatas',
                chapters: 6
            },
            {
                key: 'Ephesians',
                value: 'Efesios',
                chapters: 6
            },

            {
                key: 'Philippians',
                value: 'Filipenses',
                chapters: 4
            },
            {
                key: 'Colossians',
                value: 'Colosenses',
                chapters: 4
            },
            {
                key: '1Thessalonians',
                value: '1ra Tesalonicenses',
                chapters: 5
            },
            {
                key: '2Thessalonians',
                value: '2da Tesalonicenses',
                chapters: 3
            },

            {
                key: '1Timothy',
                value: '1ra Timoteo',
                chapters: 6
            },
            {
                key: '2Timothy',
                value: '2da Timoteo',
                chapters: 4
            },
            {
                key: 'Titus',
                value: 'Tito',
                chapters: 3
            },
            {
                key: 'Philemon',
                value: 'Filemon',
                chapters: 1
            },
            {
                key: 'Hebrews',
                value: 'Hebreos',
                chapters: 13
            },

            {
                key: 'James',
                value: 'Santiago',
                chapters: 5
            },
            {
                key: '1Peter',
                value: '1ra Pedro',
                chapters: 5
            },
            {
                key: '2Peter',
                value: '2da Pedro',
                chapters: 3
            },
            {
                key: '1John',
                value: '1ra de Juan',
                chapters: 5
            },
            {
                key: '2John',
                value: '2da de Juan',
                chapters: 1
            },
            {
                key: '3John',
                value: '3ra de Juan',
                chapters: 1
            },
            {
                key: 'Jude',
                value: 'Judas',
                chapters: 1
            },
            {
                key: 'Revelation',
                value: 'Apocalipsis',
                chapters: 22
            }
        ]

        const books = oldTestament.concat(newTestament)
        return books
    }
}

export default BooksUtils
