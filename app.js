const data = {
    lang: {
        tr: {
            logoTitle: "Çiçeklerin Dili",
            logoSubtitle: "DUYGU, ÇİÇEK AÇAR.",
            heroTitle: "Duygularınızı Çiçeklerle İfade Edin",
            search: "Duygu, çiçek adı veya etiket ara...",
            subtitle: "Hangi duyguya hangi çiçek? Anlamlarını keşfederek en doğru çiçeği bulun.",
            menu: ["Anasayfa", "Duygu/Durumlar", "Tüm Çiçekler", "Hakkımızda", "İletişim"],
            btnRead: "Anlamını Oku", skip: "İçeriğe Atla", backBtn: "← Geri",
            noResult: "Aradığınız kelimeye uygun sonuç bulunamadı. 🥀",
            searchResults: "Arama Sonuçları", 
            countFlowers: "Çiçek", countResults: "sonuç bulundu", loading: "Yükleniyor...",
            noImage: "Görsel Yüklenemedi",
            ftDesc: "Zarafet, Duygu ve Doğanın Sessiz Şiiri. Çiçeklerin dünyasını bizimle keşfedin.",
            ftMenuTitle: "Hızlı Menü", ftContactTitle: "İletişim ve Sosyal",
            ftCopyright: "© 2026 Çiçeklerin Dili. Tüm Hakları Saklıdır.",
            
            modalTitle: "Bizimle İletişime Geçin", lblName: "Adınız", lblEmail: "E-posta Adresiniz", 
            lblMessage: "Mesajınız", btnSubmit: "Gönder", btnSending: "Gönderiliyor...", btnSent: "Gönderildi!", msgSent: "Gönderiniz başarıyla iletildi.",
            phName: "Adınız Soyadınız", phEmail: "ornek@mail.com", phMsg: "Sorunuzu veya mesajınızı buraya yazın...",
            
            categories: {
                all: { text: "Tüm Çiçekler", desc: "Tüm koleksiyonu keşfedin.", icon: "flower-2" }, 
                love: { text: "Aşk ve Sevgi", desc: "Romantik hislerinizi en zarif yolla anlatın.", icon: "heart" }, 
                apology: { text: "Özür ve Pişmanlık", desc: "İçten bir affedilme dileği sunun.", icon: "message-circle-warning" },
                congrats: { text: "Tebrik ve Başarı", desc: "Sevdiklerinizin mutluluğunu paylaşın.", icon: "sparkles" }, 
                hate: { text: "Veda ve Ayrılık", desc: "Zor anları nezaketle sonlandırın.", icon: "frown" }
            },
            about: { 
                title: "Hakkımızda",
                mainText: "Çiçeklerin Dili, duygularınızı ifade etmekte zorlandığınız anlarda doğanın zarif dilini size hatırlatan dijital bir rehberdir. Amacımız, çiçeklerin binlerce yıllık anlamlarını keşfetmenizi sağlayarak, her duygu için en doğru çiçeği bulmanıza yardımcı olmaktır.",
                t1: "Misyonumuz", 
                d1: "İnsanların sevdiklerine çiçek seçerken yaşadıkları kararsızlığı ortadan kaldırmaktır. Aşk, tebrik, özür veya veda gibi özel anlarda, hangi çiçeğin ne anlama geldiğini en açık ve anlaşılır şekilde öğrenmenizi sağlıyoruz.",
                t2: "Vizyonumuz", 
                d2: "Çiçeklerin kültürel mirasını dijital bir kütüphanede toplayarak, en sevilen ve en güvenilir çiçek sözlüğü olmaktır. Duyguların en zarif şekilde ifade edilmesine rehberlik eden bir dijital ekosistem oluşturmayı hedefliyoruz."
            }
        },
        en: {
            logoTitle: "Çiçeklerin Dili",
            logoSubtitle: "EMOTION, BLOOMS.",
            heroTitle: "Express Your Emotions with Flowers",
            search: "Search emotion, flower name, or tag...",
            subtitle: "Which flower for which emotion? Find the perfect flower by exploring their meanings.",
            menu: ["Home", "Emotions - Occasions", "All Flowers", "About Us", "Contact"],
            btnRead: "Read Meaning", skip: "Skip to Content", backBtn: "← Back",
            noResult: "No results found for your search term. 🥀",
            searchResults: "Search Results",
            countFlowers: "Flowers", countResults: "results found", loading: "Loading...",
            noImage: "Image Not Available",
            ftDesc: "Elegance, Emotion, and the Silent Poetry of Nature. Discover the world of flowers with us.",
            ftMenuTitle: "Quick Links", ftContactTitle: "Contact and Social",
            ftCopyright: "© 2026 Çiçeklerin Dili. All Rights Reserved.",
            
            modalTitle: "Get in Touch With Us", lblName: "Your Name", lblEmail: "Email Address", 
            lblMessage: "Your Message", btnSubmit: "Send", btnSending: "Sending...", btnSent: "Sent!", msgSent: "Your message has been sent successfully.",
            phName: "Full Name", phEmail: "example@mail.com", phMsg: "Write your question or message here...",
            
            categories: {
                all: { text: "All Flowers", desc: "Discover the entire collection.", icon: "flower-2" }, 
                love: { text: "Love and Affection", desc: "Express your romantic feelings elegantly.", icon: "heart" }, 
                apology: { text: "Apology and Regret", desc: "Offer a sincere plea for forgiveness.", icon: "message-circle-warning" },
                congrats: { text: "Congrats and Success", desc: "Share the joy of your loved ones' achievements.", icon: "sparkles" }, 
                hate: { text: "Farewell and Breakup", desc: "End difficult moments with grace.", icon: "frown" }
            },
            about: { 
                title: "About Us",
                mainText: "Flora Language is a digital guide that reminds you of the elegant language of nature in moments when you struggle to express your emotions. Our goal is to help you find the right flower for every feeling by allowing you to discover the millennia-old meanings of flowers.",
                t1: "Our Mission", 
                d1: "To eliminate the indecision people experience when choosing flowers for their loved ones. We ensure you learn what each flower means in the clearest and most understandable way during special moments like love, congratulations, apology, or farewell.",
                t2: "Our Vision", 
                d2: "To become the most beloved and reliable floral dictionary by gathering the cultural heritage of flowers in a digital library. We aim to create a digital ecosystem that guides the most elegant expression of emotions."
            }
        }
    },
    
    flowers: [
        { cat: "love", img: "https://www.berkefidancilik.com/img/products/brkfdnclk01194_td_1.jpg", tr: { name: "Kırmızı Gül", meaning: "Tutkulu Aşk", tags: ["Tutku", "Vazgeçilmez", "Klasik"], story: "Türkiye'de aşkın en tartışmasız sembolüdür. Mitolojide Afrodit'in kanıyla renklendiğine inanılan bu çiçek, 'seni ölene dek seveceğim' demenin en mutlak yoludur. Kalpteki derin yangını ve vazgeçilmez bir bağlılığı temsil eder." }, en: { name: "Red Rose", meaning: "Passionate Love", tags: ["Passion", "Indispensable", "Classic"], story: "The undisputed symbol of love in Turkey. Believed in mythology to be colored by Aphrodite's blood, this flower is the absolute way of saying 'I will love you until I die'. It represents the deep fire in the heart and an indispensable devotion." } },
        { cat: "love", img: "https://png.pngtree.com/thumb_back/fh260/background/20251227/pngtree-fresh-red-tulip-flowers-close-up-in-spring-light-image_20923193.webp", tr: { name: "Kırmızı Lale", meaning: "Kusursuz Aşk", tags: ["Sadakat", "Asalet", "Zarafet"], story: "Anadolu'da Ferhat ile Şirin efsanesinden doğduğu söylenen kırmızı lale, 'kusursuz aşkın' mührüdür. Birine bu çiçeği vermek, 'sana olan sevgim hem asil hem de sarsılmaz bir sadakatle dolu' mesajını taşır." }, en: { name: "Red Tulip", meaning: "Perfect Love", tags: ["Loyalty", "Dignity", "Elegance"], story: "Said to be born from the legend of Ferhat and Shirin in Anatolia, the red tulip is the seal of 'perfect love'. Giving this flower carries the message 'my love for you is both noble and full of unshakeable loyalty'." } },
        { cat: "love", img: "https://w0.peakpx.com/wallpaper/152/889/HD-wallpaper-camellia-macro-red-flower.jpg", tr: { name: "Kırmızı Kamelya", meaning: "Kalbimin Ateşi", tags: ["Arzu", "Mükemmellik", "Hayranlık"], story: "Kış soğuğunda bile açabilen yapısıyla, zorluklara göğüs geren bir tutkuyu simgeler. Kırmızı rengi kalpteki bitmeyen ateşin ve karşı tarafa duyulan yüksek hayranlığın en net ifadesidir." }, en: { name: "Red Camellia", meaning: "Fire of My Heart", tags: ["Desire", "Perfection", "Admiration"], story: "With its ability to bloom even in the winter cold, it symbolizes a passion that withstands difficulties. Its red color is the clearest expression of the endless fire in the heart and high admiration for the other person." } },
        { cat: "love", img: "https://cdn.karaca.com/cms/gardenya_cicegi_2_7af42230a9.webp", tr: { name: "Gardenya", meaning: "Gizli Hayranlık", tags: ["Gizem", "Hayranlık", "Zarafet"], story: "Kokusuyla büyüleyen ama narinliğiyle 'gizli kalmış duyguları' temsil eden bir çiçektir. Henüz itiraf edilememiş ama içten içe büyüyen bir sevdanın elçisidir; 'seni uzaktan hayranlıkla izliyorum' demektir." }, en: { name: "Gardenia", meaning: "Secret Admiration", tags: ["Mystery", "Admiration", "Elegance"], story: "It is a flower that fascinates with its scent but represents 'hidden feelings' with its delicacy. It is the messenger of an unconfessed but inwardly growing love; it means 'I am watching you with admiration from afar'." } },
        { cat: "love", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GG8swKcZHNqTaZEqKQy0IoA-GBznByzDng&s", tr: { name: "Mor Leylak", meaning: "İlk Aşkın Heyecanı", tags: ["İlkGörüşteAşk", "Masumiyet", "Heyecan"], story: "Baharın müjdecisi olan bu çiçek, hayatımızdaki o unutulmaz 'ilk kalp çarpıntısını' anlatır. Türkiye'de saflığı ve aşkın o tertemiz başlangıcını temsil eden en romantik çiçeklerden biridir." }, en: { name: "Purple Lilac", meaning: "Excitement of First Love", tags: ["LoveAtFirstSight", "Innocence", "Excitement"], story: "This flower, the herald of spring, tells of that unforgettable 'first heartbeat' in our lives. It is one of the most romantic flowers representing purity and that pristine beginning of love in Turkey." } },
        { cat: "love", img: "https://www.zengardentr.com/shop/ir/87/myassets/products/476/paeonia-lactiflora-pink-1.jpg?revision=1697143329", tr: { name: "Pembe Şakayık", meaning: "Mutlu Bir Ömür", tags: ["Evlilik", "Onur", "Bereket"], story: "Hem utangaçlığı hem de büyük bir asaleti simgeler. Özellikle mutlu evliliklerin çiçeğidir; 'seninle bir hayat paylaşmak benim için büyük bir onurdur' mesajını en estetik şekilde karşı tarafa iletir." }, en: { name: "Pink Peony", meaning: "A Happy Life", tags: ["Marriage", "Honor", "Prosperity"], story: "It symbolizes both shyness and great nobility. It is especially the flower of happy marriages; it conveys the message 'sharing a life with you is a great honor for me' in the most aesthetic way." } },
        { cat: "love", img: "https://images.pexels.com/photos/36643675/pexels-photo-36643675/free-photo-of-siyah-arka-plan-uzerinde-canli-kirmizi-gerbera-papatyasi.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", tr: { name: "Kırmızı Gerbera", meaning: "Masum Tutku", tags: ["Neşe", "Sıcaklık", "Bağlılık"], story: "Papatya ailesinin bu enerjik üyesi, neşeyi tutkuyla birleştirir. İlişkisindeki ilk günkü heyecanı ve sıcaklığı koruyanların tercihidir; 'seni severken hayatım neşeyle doluyor' anlamını taşır." }, en: { name: "Red Gerbera", meaning: "Innocent Passion", tags: ["Joy", "Warmth", "Loyalty"], story: "This energetic member of the daisy family combines joy with passion. It is the choice of those who preserve the excitement and warmth of the first day in their relationship; it means 'my life is filled with joy while loving you'." } },
        { cat: "love", img: "https://productimages.hepsiburada.net/s/50/375-375/11035848441906.jpg", tr: { name: "Yasemin", meaning: "Duygusal Bağ", tags: ["Güven", "Hoşgörü", "Huzur"], story: "Gece açan yaseminler, yoğun kokularıyla 'huzurlu ve güvenli bir limanı' temsil eder. Karşı tarafı her haliyle kabul etmeyi ve kurulan duygusal bağın derinliğini simgeler." }, en: { name: "Jasmine", meaning: "Emotional Bond", tags: ["Trust", "Tolerance", "Peace"], story: "Night-blooming jasmines represent a 'peaceful and safe haven' with their intense scents. It symbolizes accepting the other person in every way and the depth of the emotional bond established." } },
        { cat: "love", img: "https://p4.wallpaperbetter.com/wallpaper/738/159/776/dark-red-carnations-red-carnation-flower-wallpaper-wallpaper-preview.jpg", tr: { name: "Kırmızı Karanfil", meaning: "Yoğun İlgi ve Arzu", tags: ["Cesaret", "Samimiyet", "Kırmızı"], story: "Gülün asaletinden farklı olarak, daha sıcak ve 'kalbin yerinden çıkacakmış gibi çarpmasını' simgeleyen bir çiçektir. Cesur bir aşkın ve bitmek bilmeyen ilginin en samimi anlatıcısıdır." }, en: { name: "Red Carnation", meaning: "Intense Interest and Desire", tags: ["Courage", "Sincerity", "Red"], story: "Unlike the nobility of the rose, it is a flower that is warmer and symbolizes 'the heart beating as if it will pop out'. It is the most sincere narrator of a brave love and endless interest." } },
        { cat: "love", img: "https://avatars.mds.yandex.net/i?id=14e9327ba0d1efe0e83ec18b2fe448c6939a5a8b-6263806-images-thumbs&n=13", tr: { name: "Mavi Gül", meaning: "Ulaşılamaz Aşk", tags: ["Gizem", "Eşsizlik", "Mucize"], story: "Doğada kendiliğinden bulunmaması nedeniyle 'mucizeleri' ve 'ulaşılması güç olanı' temsil eder. Birine mavi gül vermek, 'sen benim için benzersizsin ve bu sevda bir mucize kadar gerçek' demektir." }, en: { name: "Blue Rose", meaning: "Unattainable Love", tags: ["Mystery", "Uniqueness", "Miracle"], story: "Due to its absence in nature spontaneously, it represents 'miracles' and 'what is hard to reach'. Giving someone a blue rose means 'you are unique to me and this love is as real as a miracle'." } },
        { cat: "love", img: "https://i.pinimg.com/736x/be/b3/78/beb378c9e1d66e7d4c6fdc3c69a30792.jpg", tr: { name: "Pembe Orkide", meaning: "Asil Bir Hayranlık", tags: ["Güzellik", "Zarafet", "Saygı"], story: "Orkideler asaletiyle bilinir; pembe olanları ise karşı tarafın zarafetine duyulan derin hayranlığın simgesidir. 'Seni hayranlıkla izliyorum' demenin en lüks ve prestijli yoludur." }, en: { name: "Pink Orchid", meaning: "Noble Admiration", tags: ["Beauty", "Elegance", "Respect"], story: "Orchids are known for their nobility; the pink ones are the symbol of deep admiration for the elegance of the other party. It is the most luxurious and prestigious way of saying 'I watch you with admiration'." } },
        { cat: "love", img: "https://cicektohumlari.com.tr/wp-content/uploads/2021/10/beyaz-kenarli-pembe-lale-1-Cicek-Tohumlari.jpg.webp", tr: { name: "Pembe Lale", meaning: "Şefkatli Sevgi", tags: ["Anlayış", "Zarafet", "Güven"], story: "Kırmızısı kadar yoğun değil, daha yumuşak ve şefkat dolu bir sevgiyi anlatır. Karşı tarafı olan bağlılığı anlayış ve huzur çerçevesinde ifade etmek isteyenlerin çiçeğidir." }, en: { name: "Pink Tulip", meaning: "Compassionate Love", tags: ["Understanding", "Elegance", "Trust"], story: "Not as intense as the red one, it tells of a softer and more compassionate love. It is the flower of those who want to express their loyalty to the other side within the framework of understanding and peace." } },
        { cat: "love", img: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Primula_vulgaris_%C3%B6rne%C4%9Fi_1.jpg", tr: { name: "Primula (Çuha)", meaning: "Bağlılık ve İhtiyaç", tags: ["Destek", "Bahar", "Bağlılık"], story: "Baharın ilk müjdecilerinden olan çuha, 'seninle her şey yeniden başlıyor' demektir. Karşı tarafa duyulan ihtiyacı ve ona olan sarsılmaz bağlılığı en naif dille ileten 'yaşam pınarı' gibi bir çiçektir." }, en: { name: "Primrose", meaning: "Loyalty and Need", tags: ["Support", "Spring", "Loyalty"], story: "The primrose, one of the first heralds of spring, means 'everything starts anew with you'. It is a flower like a 'spring of life' that conveys the need for the other party and the unshakeable loyalty to them in the most naive language." } },
        { cat: "love", img: "https://images.pexels.com/photos/36986484/pexels-photo-36986484/free-photo-of-canli-pembe-bir-gul-ciceginin-yakin-cekim-fotografi.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", tr: { name: "Pembe Gül", meaning: "Gönül Alma ve Sevgi", tags: ["Şefkat", "Yumuşaklık", "Zarafet"], story: "Pembe gül, aşkın en zarif ve yumuşak halidir. 'Seni çok önemsiyorum' demenin ve karşı tarafın kalbine nezaketle dokunmanın sembolüdür; şefkat dolu bir aşkın ifadesidir." }, en: { name: "Pink Rose", meaning: "Winning Over and Love", tags: ["Compassion", "Softness", "Elegance"], story: "The pink rose is the most elegant and soft form of love. It is the symbol of saying 'I care about you very much' and touching the other person's heart with kindness; it is the expression of a compassionate love." } },
        { cat: "love", img: "https://i.etsystatic.com/18336066/r/il/83701f/3332796515/il_1080xN.3332796515_l7q4.jpg", tr: { name: "Kırmızı Gelincik", meaning: "Hassas Bir Sevda", tags: ["Kırılganlık", "Tutku", "Doğallık"], story: "Narin yapısıyla gelincik, 'kalbim senin ellerinde, ona nazik davran' diyenlerin çiçeğidir. Tutkuyu en doğal ve en hassas haliyle simgeler; kırılgan ama bir o kadar da güçlü bir sevgiyi anlatır." }, en: { name: "Red Poppy", meaning: "A Sensitive Love", tags: ["Fragility", "Passion", "Naturalness"], story: "With its delicate structure, the poppy is the flower of those who say 'my heart is in your hands, treat it gently'. It symbolizes passion in its most natural and sensitive form; it tells of a fragile yet equally strong love." } },
        { cat: "love", img: "https://www.easytogrowbulbs.com/cdn/shop/products/Freesia_Single_Yellow_SHUT.jpg?v=1775084264&width=1946", tr: { name: "Sarı Frezya", meaning: "Sarsılmaz Güven", tags: ["Dürüstlük", "Samimiyet", "Dostluk"], story: "Bir aşkın en güçlü temeli olan 'güveni' ifade eder. İçinde hiçbir hile barındırmayan dürüst bir sevgiyi ve beraberinde gelen sarsılmaz dostluğu temsil etmek için verilir." }, en: { name: "Yellow Freesia", meaning: "Unshakeable Trust", tags: ["Honesty", "Sincerity", "Friendship"], story: "It expresses 'trust', the strongest foundation of a love. It is given to represent an honest love that contains no tricks and the unshakeable friendship that comes with it." } },
        { cat: "love", img: "https://cdn.karaca.com/cms/nergis_5919293f04.jpg", tr: { name: "Nergis", meaning: "Taze Bir Umut", tags: ["YenidenDoğuş", "Saygı", "Umut"], story: "Kışın ardından gelen uyanışın simgesidir. Eski bir aşkın canlanmasını veya yepyeni bir umuda duyulan saygıyı anlatır; 'seninle hayatım yeniden çiçek açıyor' demektir." }, en: { name: "Daffodil", meaning: "A Fresh Hope", tags: ["Rebirth", "Respect", "Hope"], story: "It is the symbol of awakening that comes after winter. It tells of the revival of an old love or the respect for a brand new hope; it means 'my life is blooming again with you'." } },
        { cat: "love", img: "https://p4.wallpaperbetter.com/wallpaper/432/862/455/blue-flower-close-up-anemone-wallpaper-preview11.jpg", tr: { name: "Anemon", meaning: "Hassasiyet ve Beklenti", tags: ["Umut", "Hassasiyet", "Rüzgar"], story: "Rüzgârla açan bu narin çiçek, ilişkideki hassas dengeleri simgeler. Karşı taraftan gelecek küçük bir sevgi sözcüğünün yarattığı büyük heyecanı ve o tatlı bekleyişi temsil eder." }, en: { name: "Anemone", meaning: "Sensitivity and Expectation", tags: ["Hope", "Sensitivity", "Wind"], story: "Blooming with the wind, this delicate flower symbolizes the delicate balances in the relationship. It represents the great excitement and that sweet wait created by a small word of love from the other side." } },
        { cat: "love", img: "https://tuncbotanik.com/uploads/p/p/KASIMPATI-KRIZANTEM-CICEGI-SAKSIDA-10-ADET_20.jpg", tr: { name: "Kırmızı Krizantem", meaning: "Sessiz Sevgi", tags: ["Bağlılık", "Huzur", "Kırmızı"], story: "Diğer çiçekler kadar haykırmaz ama 'seni her şeyden çok seviyorum' mesajını derinden verir. Sessiz, sakin ama bir o kadar da köklü ve sarsılmaz bir bağlılığın sembolüdür." }, en: { name: "Red Chrysanthemum", meaning: "Silent Love", tags: ["Loyalty", "Peace", "Red"], story: "It doesn't shout as much as other flowers, but it gives the message 'I love you more than anything' deeply. It is a symbol of a silent, calm, yet deeply rooted and unshakeable loyalty." } },
        { cat: "love", img: "https://99px.ru/sstorage/53/2020/03/tmb_295285_399394.jpg", tr: { name: "Mimoza", meaning: "Görkemli Sevda", tags: ["Işık", "Güç", "Dayanıklılık"], story: "Altın sarısı rengiyle mimoza, 'bu aşkın ışığı yolumu aydınlatıyor' demektir. Hem güçlü hem de çok estetik bir sevgiyi temsil eden, başarının ve dayanışmanın aşkla harmanlandığı bir çiçektir." }, en: { name: "Mimosa", meaning: "Magnificent Love", tags: ["Light", "Strength", "Endurance"], story: "With its golden yellow color, mimosa means 'the light of this love illuminates my path'. It is a flower that represents both a strong and very aesthetic love, where success and solidarity are blended with love." } },

        { cat: "apology", img: "https://i.pinimg.com/originals/15/4a/ba/154abaea80ac3ca0199082e6fddc2d3a.png", tr: { name: "Beyaz Lale", meaning: "Affedilme Dileği", tags: ["Özür", "SafDuygular", "Beyaz"], story: "Türkiye'de beyaz lale, bir özürden ziyade 'beyaz bir sayfa' açma isteğidir. Lalenin doğadaki dik ve vakur duruşunun, pişmanlık anında boyun bükmesine benzetilir. Karşı tarafa 'Seni kırdığım için pişmanım, tüm masumiyetimle beni affetmeni bekliyorum' mesajını en zarif yoldan iletir." }, en: { name: "White Tulip", meaning: "Wish for Forgiveness", tags: ["Apology", "PureFeelings", "White"], story: "In Turkey, the white tulip is more of a desire to turn over a 'new leaf' than an apology. The upright and dignified stance of the tulip in nature is likened to bowing one's head in a moment of regret. It conveys the message 'I regret breaking you, I expect you to forgive me with all my innocence' in the most elegant way." } },
        { cat: "apology", img: "https://www.flowerbulbsinc.co.uk/resize/hyachinth-blue-jacket-103-k-2500-visions-visi203139_13145015720757.jpg/0/1100/True/hyacinth-delft-blue-blue-jacket-hyacinthus.jpg", tr: { name: "Mor Sümbül", meaning: "Derin Pişmanlık", tags: ["Üzgünüm", "Bağlılık", "Mor"], story: "Anadolu kültüründe 'Lütfen beni affet, kalbim çok hüzünlü' anlamında kullanılır. Morun ağırlığı, yapılan hatanın farkında olunduğunu ve duyulan üzüntünün derinliğini simgeler. 'Sana olan bağlılığım hatamdan çok daha büyük' demenin sembolik yoludur." }, en: { name: "Purple Hyacinth", meaning: "Deep Regret", tags: ["ImSorry", "Loyalty", "Purple"], story: "In Anatolian culture, it is used to mean 'Please forgive me, my heart is very sad'. The weight of purple symbolizes the awareness of the mistake made and the depth of the sadness felt. It is the symbolic way of saying 'My loyalty to you is much greater than my mistake'." } },
        { cat: "apology", img: "https://w0.peakpx.com/wallpaper/1021/866/HD-wallpaper-azalea-flower-yellow-pretty-plant.jpg", tr: { name: "Sarı Açelya", meaning: "Farkındalık ve Pişmanlık", tags: ["Pişmanlık", "Farkındalık", "Sarı"], story: "Narin yapısıyla 'hassas bir kalbe dokunma' isteğini temsil eder. Özellikle 'Seni istemeden kırdım, bunun farkındayım ve telafi etmek istiyorum' mesajını taşır. İlişkideki samimiyeti yeniden canlandırmak için verilen en etkili farkındalık çiçeğidir." }, en: { name: "Yellow Azalea", meaning: "Awareness and Regret", tags: ["Regret", "Awareness", "Yellow"], story: "With its delicate structure, it represents the desire to 'touch a sensitive heart'. It carries the message 'I unintentionally broke you, I am aware of this and I want to make up for it'. It is the most effective awareness flower given to revive the sincerity in the relationship." } },
        { cat: "apology", img: "https://p4.wallpaperbetter.com/wallpaper/244/149/128/hydrangea-pink-close-up-leaves-wallpaper-preview.jpg", tr: { name: "Pembe Ortanca", meaning: "İçtenlik ve Barış", tags: ["İçtenlik", "Sabır", "Barış"], story: "Çok sayıda küçük çiçeğin bir araya gelmesiyle 'büyük bir sabrı' temsil eder. Bir tartışmanın ardından verilen pembe ortanca, 'Duygularım biraz karmaşıktı ama seni hala çok önemsiyorum, lütfen beni anla' demektir. Karşı tarafın hoşgörüsüne sığınmanın en samimi anlatımıdır." }, en: { name: "Pink Hydrangea", meaning: "Sincerity and Peace", tags: ["Sincerity", "Patience", "Peace"], story: "It represents a 'great patience' by bringing together many small flowers. The pink hydrangea given after an argument means 'My feelings were a bit complicated but I still care about you very much, please understand me'. It is the most sincere expression of taking refuge in the other person's tolerance." } },
        { cat: "apology", img: "https://foliagefriend.com/wp-content/uploads/2023/04/White-Carnation-Flowers.jpeg", tr: { name: "Beyaz Karanfil", meaning: "Telafi ve Helalleşme", tags: ["Helalleşme", "Dürüstlük", "Beyaz"], story: "'Geçmişin üzerine sünger çekelim' demektir. Aradaki gerginliği bitirip her şeye tertemiz ve dürüst bir niyetle yeniden başlamak, helalleşmek için verilen en samimi barış elçisidir." }, en: { name: "White Carnation", meaning: "Compensation and Reconciliation", tags: ["Reconciliation", "Honesty", "White"], story: "It means 'Let's wipe the slate clean of the past'. It is the most sincere ambassador of peace given to end the tension between and start everything anew with a clean and honest intention." } },
        { cat: "apology", img: "https://productimages.hepsiburada.net/s/6/375/9710490255410.jpg/format:webp", tr: { name: "Sarı Lale", meaning: "Gülüşünü Özledim", tags: ["Umut", "Barış", "Sarı"], story: "Sarı lale, kırgınlığın ardından gelen 'Güneşli günlere dönelim' mesajıdır. Tartışmaların yarattığı soğuk havayı dağıtıp, ilişkinin o sıcak ve neşeli günlerine geri dönme arzusunu temsil eder." }, en: { name: "Yellow Tulip", meaning: "I Miss Your Smile", tags: ["Hope", "Peace", "Yellow"], story: "The yellow tulip is the message 'Let's return to sunny days' coming after a resentment. It represents the desire to dispel the cold air created by arguments and return to those warm and joyful days of the relationship." } },
        { cat: "apology", img: "https://png.pngtree.com/background/20250206/original/pngtree-all-white-daisy-flower-picture-image_13310149.jpg", tr: { name: "Beyaz Papatya", meaning: "Samimi Bir Gülümseme", tags: ["Doğallık", "Barışalım", "Beyaz"], story: "Özrün en gösterişsiz ama en çocuksu ve sıcak halidir. 'Hadi gel, o eski mutlu ve doğal günlerimize dönelim' demenin en masum yoludur. Karmaşık cümlelere gerek kalmadan barışmak isteyenlerin çiçeğidir." }, en: { name: "White Daisy", meaning: "A Sincere Smile", tags: ["Naturalness", "LetsMakePeace", "White"], story: "It is the most unpretentious but the most childish and warm form of apology. It is the most innocent way of saying 'Come on, let's go back to our old happy and natural days'. It is the flower of those who want to make peace without needing complex sentences." } },
        { cat: "apology", img: "https://avatars.mds.yandex.net/i?id=028109e7bff85e218b8bacf8bcf68c5506935d97-8974491-images-thumbs&n=13", tr: { name: "Çiğdem", meaning: "Kırgınlığın Sonu", tags: ["Bahar", "Uyanış", "Canlanma"], story: "Kış uykusundan uyanan toprak gibi, küskünlüğün bitip duyguların yeniden canlanmasını temsil eder. 'Aramızdaki buzları eritelim ve yeniden çiçek açalım' demenin en doğal yoludur." }, en: { name: "Crocus", meaning: "End of Resentment", tags: ["Spring", "Awakening", "Revival"], story: "Like the earth waking from winter sleep, it represents the end of resentment and the revival of feelings. It is the most natural way of saying 'Let's melt the ice between us and bloom again'." } },
        { cat: "apology", img: "https://avatars.mds.yandex.net/i?id=3a4358ab3c90596d86f9625c393036cca8da9844-8311400-images-thumbs&n=13", tr: { name: "Beyaz Nergis", meaning: "Saygıyla Özür Dilerim", tags: ["Saygı", "YenidenDoğuş", "Beyaz"], story: "Yeniden doğuşun simgesi olan nergis, beyaz rengiyle 'Hatalarımdan ders çıkardım ve sana olan saygımla buradayım' demektir. İlişkiyi daha olgun bir temelde yeniden başlatma isteğini simgeler." }, en: { name: "White Daffodil", meaning: "I Apologize with Respect", tags: ["Respect", "Rebirth", "White"], story: "The daffodil, the symbol of rebirth, with its white color means 'I have learned from my mistakes and I am here with my respect for you'. It symbolizes the desire to restart the relationship on a more mature foundation." } },
        { cat: "apology", img: "https://cdn.karaca.com/cms/menekse_4_9b2747778f.webp", tr: { name: "Mor Menekşe", meaning: "Sana Sadığım", tags: ["Sadakat", "Alçakgönüllülük", "Mor"], story: "Alçakgönüllülüğün sembolü olan menekşe, özür dilerken gururu bir kenara bırakmayı temsil eder. 'Hatalıyım ve buna rağmen hala sana sadığım' mesajını karşı tarafa en mütevazı şekilde iletir." }, en: { name: "Purple Violet", meaning: "I am Loyal to You", tags: ["Loyalty", "Humility", "Purple"], story: "The violet, the symbol of humility, represents putting pride aside when apologizing. It conveys the message 'I am wrong and yet I am still loyal to you' to the other party in the most modest way." } },
        { cat: "apology", img: "https://e0.pxfuel.com/wallpapers/638/126/desktop-wallpaper-lily-flower-background-white-lily-flower.jpg", tr: { name: "Beyaz Lilyum", meaning: "Huzurlu Bir Başlangıç", tags: ["Onur", "Huzur", "Zarafet"], story: "'Ruhum seninle huzur buluyor ve yaşananları temiz bir sayfa açarak geride bırakmak istiyorum' demenin en asil yoludur. Kişinin onurunu koruyarak dile getirdiği samimi bir özürdür." }, en: { name: "White Lily", meaning: "A Peaceful Beginning", tags: ["Honor", "Peace", "Elegance"], story: "It is the most noble way of saying 'My soul finds peace with you and I want to leave what happened behind by turning a clean page'. It is a sincere apology expressed by protecting one's honor." } },
        { cat: "apology", img: "https://p4.wallpaperbetter.com/wallpaper/848/400/862/flowers-hydrangea-blue-flower-flower-heart-hd-wallpaper-preview.jpg", tr: { name: "Mavi Ortanca", meaning: "Sessiz Anlayış", tags: ["Anlayış", "Mesafe", "Mavi"], story: "Aradaki mesafeyi dürüstçe kabul eden ama 'Seni hala önemsiyorum' diyen bir çiçektir. Karşı tarafın anlayışına sığınmak ve buzları eritmek için soğuk ama nazik bir adımdır." }, en: { name: "Blue Hydrangea", meaning: "Silent Understanding", tags: ["Understanding", "Distance", "Blue"], story: "It is a flower that honestly accepts the distance but says 'I still care about you'. It is a cold but gentle step to take refuge in the other party's understanding and melt the ice." } },
        { cat: "apology", img: "https://images.pexels.com/photos/33223489/pexels-photo-33223489/free-photo-of-yemyesil-bir-ortamda-canli-sari-papatyalar.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", tr: { name: "Sarı Papatya", meaning: "Neşemizi Geri Ver", tags: ["Sıcaklık", "Barış", "Sarı"], story: "'Seni üzdüğüm için dünyam karardı, affınla yeniden aydınlanmak istiyorum' demektir. İlişkinin kaybolan neşesini geri kazanma niyetini temsil eder." }, en: { name: "Yellow Daisy", meaning: "Give Back Our Joy", tags: ["Warmth", "Peace", "Yellow"], story: "It means 'My world went dark because I upset you, I want to be enlightened again with your forgiveness'. It represents the intention to regain the lost joy of the relationship." } },
        { cat: "apology", img: "https://johnsons-seeds.com/cdn/shop/files/gladiolus-white-prosperity-50891289624850.jpg?v=1776286194", tr: { name: "Beyaz Glayöl", meaning: "Güçlü Bir Özür", tags: ["Karakter", "Dürüstlük", "Beyaz"], story: "'Hatalı olduğumu kabul edecek kadar güçlüyüm' mesajını verir. Karakterli bir duruşla, dürüstlükten ödün vermeden dilenen bir özrün simgesidir." }, en: { name: "White Gladiolus", meaning: "A Strong Apology", tags: ["Character", "Honesty", "White"], story: "It gives the message 'I am strong enough to admit that I am wrong'. It is the symbol of an apology requested with a characterful stance and without compromising honesty." } },
        { cat: "apology", img: "https://images.pexels.com/photos/24821967/pexels-photo-24821967/free-photo-of-closeup-of-a-blooming-iris-flower.jpeg", tr: { name: "Mor İris", meaning: "Bilgelik ve Pişmanlık", tags: ["Haber", "İnanç", "Mor"], story: "'Yaşadıklarımızdan ders çıkardım' demektir. Bilgeliği temsil eden iris, yapılan hatanın farkında olunduğunu ve ilişkinin geleceğine inanıldığını anlatır." }, en: { name: "Purple Iris", meaning: "Wisdom and Regret", tags: ["News", "Faith", "Purple"], story: "It means 'I have learned a lesson from what we went through'. The iris, which represents wisdom, explains that the mistake made is recognized and that there is a belief in the future of the relationship." } },
        { cat: "apology", img: "https://img.magnific.com/premium-photo/closeup-yellow-carnations-delicate-petals_947794-145511.jpg?w=360", tr: { name: "Sarı Karanfil", meaning: "Hatamdan Ders Aldım", tags: ["Olgunluk", "Saygı", "Sarı"], story: "Pişmanlığın getirdiği olgunluğu simgeler. 'Yaşananlar bana çok şey öğretti, artık duygularına daha fazla saygı duyacağım' mesajını taşır." }, en: { name: "Yellow Carnation", meaning: "I Learned from My Mistake", tags: ["Maturity", "Respect", "Yellow"], story: "It symbolizes the maturity brought by regret. It carries the message 'What happened taught me a lot, I will respect your feelings more now'." } },
        { cat: "apology", img: "https://ludaflower.com/wp-content/uploads/2018/06/GDW1.jpg", tr: { name: "Beyaz Gerbera", meaning: "Sana Olan Güvenim", tags: ["Saflık", "Sıcaklık", "Bağlılık"], story: "İçinde hiçbir gizli niyet barındırmayan, tertemiz bir özürdür. 'Seni her şeyden çok önemsiyorum ve kalbim seninle' demenin en enerjik ve samimi yoludur." }, en: { name: "White Gerbera", meaning: "My Trust in You", tags: ["Purity", "Warmth", "Loyalty"], story: "It is a pristine apology that contains no hidden intentions. It is the most energetic and sincere way of saying 'I care about you more than anything and my heart is with you'." } },
        { cat: "apology", img: "https://diyanethabercomtr.teimg.com/crop/860x504/diyanethaber-com-tr/uploads/2025/04/mehmet/20250406-kadiralak-yaylasinin-unlu-mavi-yildiz-cicekleri-2.jpg", tr: { name: "Mavi Yıldız Çiçeği", meaning: "Sadakat Sözü", tags: ["Vefa", "Güven", "Mavi"], story: "'Seni asla bırakmayacağım' mesajını pişmanlıkla birleştirir. Yapılan hataya rağmen aradaki vefanın ve sadakatin ne kadar güçlü olduğunu vurgular." }, en: { name: "Blue Star Flower", meaning: "Promise of Loyalty", tags: ["Fidelity", "Trust", "Blue"], story: "It combines the message 'I will never leave you' with regret. It emphasizes how strong the fidelity and loyalty are despite the mistake made." } },
        { cat: "apology", img: "https://justpleachy.co.uk/cdn/shop/files/white-camellia-camellia-japonica-for-privacy-screening-freshly-pleached-trees-pleached-tree-evergreen-camellia-snow-ball-pleachy-trees-891041.jpg?v=1751067905&width=1946", tr: { name: "Beyaz Kamelya", meaning: "Sen Çok Değerlisin", tags: ["Mükemmellik", "Saygı", "Beyaz"], story: "'Senin kusursuzluğunu incittiğim için üzgünüm' anlamını taşır. Karşı tarafa olan takdirin ve duyulan saygının altını çizer." }, en: { name: "White Camellia", meaning: "You Are Very Valuable", tags: ["Perfection", "Respect", "White"], story: "It means 'I am sorry for hurting your perfection'. It underlines the appreciation and respect for the other party." } },
        { cat: "apology", img: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Narcissus_jonquilla_2.jpg", tr: { name: "Sarı Fulya", meaning: "Yeniden Gülümse", tags: ["Umut", "Beklenti", "Sarı"], story: "'Kırgınlık bitsin, yerini umut alsın' demektir. Karşı tarafın yüzünde yeniden bir tebessüm görme isteğinin en zarif sembolüdür." }, en: { name: "Yellow Jonquil", meaning: "Smile Again", tags: ["Hope", "Expectation", "Yellow"], story: "It means 'Let the resentment end, let hope take its place'. It is the most elegant symbol of the desire to see a smile on the other person's face again." } },

        { cat: "congrats", img: "https://png.pngtree.com/thumb_back/fw800/background/20251226/pngtree-beautiful-orange-daylily-flower-in-full-bloom-image_20935712.webp", tr: { name: "Turuncu Zambak", meaning: "Gurur ve Zafer", tags: ["Gurur", "Zafer", "Turuncu"], story: "Türkiye'de turuncu zambak, 'Seninle gurur duyuyorum' demenin en asil yoludur. Büyük emekler sonucu elde edilen zaferleri ve kişinin karakterindeki parıltıyı temsil eden güçlü bir başarı sembolüdür." }, en: { name: "Orange Lily", meaning: "Pride and Victory", tags: ["Pride", "Victory", "Orange"], story: "In Turkey, the orange lily is the most noble way of saying 'I am proud of you'. It is a powerful symbol of success representing victories achieved through great effort and the sparkle in a person's character." } },
        { cat: "congrats", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc8uTgwQ74-Btlc9n3dP_PT57FfJUAVAtBtQ&s", tr: { name: "Ayçiçeği", meaning: "Parlak Gelecek", tags: ["Neşe", "Hayranlık", "Sarı"], story: "Güneşe dönen yüzüyle ayçiçeği, başarının getirdiği aydınlığı simgeler. Yeni bir işe başlayanlara 'Yolun her zaman güneşli ve açık olsun' mesajını iletmek için verilir." }, en: { name: "Sunflower", meaning: "Bright Future", tags: ["Joy", "Admiration", "Yellow"], story: "With its face turning to the sun, the sunflower symbolizes the brightness brought by success. It is given to convey the message 'May your path always be sunny and open' to those starting a new job." } },
        { cat: "congrats", img: "https://cdn03.ciceksepeti.com/cicek/at5171-1/L/at5171-1-8dd393801156956-789af3af.jpg", tr: { name: "Mor Orkide", meaning: "Saygınlık ve Liderlik", tags: ["Asalet", "Saygı", "Liderlik"], story: "Mor orkide, sadece bir başarıyı değil, o başarının getirdiği otorite ve saygınlığı temsil eder. Genellikle terfi alan yöneticilere veya büyük projelere imza atanlara duyulan yüksek takdiri simgeler." }, en: { name: "Purple Orchid", meaning: "Prestige and Leadership", tags: ["Nobility", "Respect", "Leadership"], story: "The purple orchid represents not just a success, but the authority and prestige that success brings. It generally symbolizes the high appreciation felt for promoted managers or those who have signed major projects." } },
        { cat: "congrats", img: "https://p4.wallpaperbetter.com/wallpaper/998/356/18/yellow-gerbera-wallpaper-preview.jpg", tr: { name: "Sarı Gerbera", meaning: "Kutlama Heyecanı", tags: ["Enerji", "Tebrik", "Mutluluk"], story: "Canlı sarı rengiyle gerbera, kutlamaların vazgeçilmez enerjisidir. 'Bu başarının getirdiği mutluluk yüzünden hiç eksik olmasın' anlamını taşır ve neşeli bir atmosfer yaratır." }, en: { name: "Yellow Gerbera", meaning: "Celebration Excitement", tags: ["Energy", "Congratulations", "Happiness"], story: "With its vibrant yellow color, gerbera is the indispensable energy of celebrations. It means 'May the happiness brought by this success never be missing from your face' and creates a joyful atmosphere." } },
        { cat: "congrats", img: "https://www.ciceksel.com.tr/imaj/2024/starlice-cennet-kusu-cicegi-bakimi-2.jpg", tr: { name: "Cennet Kuşu (Starliçe)", meaning: "Görkemli Yükseliş", tags: ["Egzotik", "Mükemmellik", "Güç"], story: "Gökyüzüne doğru açılan formuyla starliçe, kariyerdeki büyük sıçramaları ve benzersizliği simgeler. 'Sıradan olanı aştın ve kendi zirvene ulaştın' demenin en görkemli yoludur." }, en: { name: "Bird of Paradise", meaning: "Magnificent Rise", tags: ["Exotic", "Perfection", "Power"], story: "With its form opening towards the sky, the bird of paradise symbolizes huge leaps in career and uniqueness. It is the most magnificent way to say 'You surpassed the ordinary and reached your own peak'." } },
        { cat: "congrats", img: "https://images.pexels.com/photos/5595721/pexels-photo-5595721.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", tr: { name: "Glayöl (Turuncu)", meaning: "Azim ve Kararlılık", tags: ["Karakter", "Kararlılık", "Zafer"], story: "İsmini Romalı gladyatörlerden alan bu çiçek, 'Keskin bir zekâ ve azimle başardın' anlamını taşır. Zorlu yollardan geçilerek kazanılan başarıların onurlandırılmasıdır." }, en: { name: "Orange Gladiolus", meaning: "Perseverance and Determination", tags: ["Character", "Determination", "Victory"], story: "Taking its name from Roman gladiators, this flower means 'You succeeded with a sharp mind and perseverance'. It is the honoring of successes gained by going through difficult paths." } },
        { cat: "congrats", img: "https://botaniquess.home.blog/wp-content/uploads/2019/10/poinsettia-poisoning.jpg?w=1338", tr: { name: "Atatürk Çiçeği", meaning: "Önderlik ve Başarı", tags: ["Liderlik", "Güç", "Kırmızı"], story: "Türkiye'de ismiyle özdeşleşen bu çiçek, 'Öncü oldun ve kazandın' demektir. Topluma fayda sağlayan veya liderlik gerektiren başarıların kutlanması için en anlamlı tercihtir." }, en: { name: "Poinsettia", meaning: "Leadership and Success", tags: ["Leadership", "Power", "Red"], story: "Identified with its name in Turkey, this flower means 'You were a pioneer and you won'. It is the most meaningful choice for celebrating successes that benefit society or require leadership." } },
        { cat: "congrats", img: "https://cdn.ikost.com/3065/urunler/2259.jpg", tr: { name: "Bambu", meaning: "Hızlı Gelişim", tags: ["Şans", "Gelişim", "Yeşil"], story: "Kariyer basamaklarını hızla tırmananlara 'Şansın daim, büyümen sonsuz olsun' demek için verilir. Dayanıklılığı ve sürekli gelişimi simgeleyen 'Metodolojik' bir başarı sembolüdür." }, en: { name: "Bamboo", meaning: "Rapid Development", tags: ["Luck", "Development", "Green"], story: "Given to those rapidly climbing the career ladder to say 'May your luck be constant, your growth infinite'. It is a 'Methodological' success symbol representing resilience and continuous development." } },
        { cat: "congrats", img: "https://png.pngtree.com/thumb_back/fh260/background/20230730/pngtree-white-magnolia-flower-with-flowers-in-front-of-it-image_10208949.jpg", tr: { name: "Manolya", meaning: "Yücelik ve Onur", tags: ["Asalet", "Doğa", "Mükemmellik"], story: "Yüksek mevkilerdeki başarıları ve karakterdeki sağlamlığı temsil eder. 'Zirveye yakışıyorsun' demenin ve kişinin onurunu yüceltmenin en eski ve prestijli yoludur." }, en: { name: "Magnolia", meaning: "Majesty and Honor", tags: ["Nobility", "Nature", "Perfection"], story: "Represents successes in high positions and solidity in character. It is the oldest and most prestigious way of saying 'You belong at the top' and elevating a person's honor." } },
        { cat: "congrats", img: "https://preview.redd.it/bonsai-tree-exclusive-3240x7184-v0-ltz7we1bctee1.jpeg?width=640&crop=smart&auto=webp&s=043584c6f4750feb8b844e081c4c82fd582ecfd5", tr: { name: "Bonsai", meaning: "Sabırlı Emek", tags: ["Bilgelik", "Emek", "Denge"], story: "Bonsai bir sanat eseridir; bu yüzden 'Yıllardır verdiğin emeğin meyvesini alıyorsun' anlamını taşır. Sabırla ve özenle inşa edilen kariyerlerin en bilgece hediyesidir." }, en: { name: "Bonsai", meaning: "Patient Effort", tags: ["Wisdom", "Effort", "Balance"], story: "A bonsai is a work of art; therefore it means 'You are reaping the fruits of the effort you have put in for years'. It is the wisest gift for careers built with patience and care." } },
        { cat: "congrats", img: "https://images.pexels.com/photos/31762093/pexels-photo-31762093/free-photo-of-cicek-acmis-parlak-sari-zambak-yakin-cekim.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", tr: { name: "Sarı Zambak", meaning: "Neşeli Tebrik", tags: ["Işık", "Enerji", "Sarı"], story: "Sarı zambak, başarının getirdiği o taze enerjiyi simgeler. 'Başarın çevremizi aydınlattı, yolun her zaman böyle parlak olsun' mesajı için en ideal tercihtir." }, en: { name: "Yellow Lily", meaning: "Cheerful Congratulation", tags: ["Light", "Energy", "Yellow"], story: "The yellow lily symbolizes that fresh energy brought by success. It is the ideal choice for the message 'Your success illuminated our surroundings, may your path always be this bright'." } },
        { cat: "congrats", img: "https://w0.peakpx.com/wallpaper/934/770/HD-wallpaper-protea-flower-red-king.jpg", tr: { name: "Protea", meaning: "Cesur Farklılık", tags: ["Farklılık", "Güç", "Dayanıklılık"], story: "Alışılmışın dışındaki formuyla protea, 'Fark yarattın ve cesaretinle kazandın' anlamını taşır. Yenilikçi fikirlerle gelen başarıların en güçlü temsilcisidir." }, en: { name: "Protea", meaning: "Courageous Difference", tags: ["Difference", "Power", "Endurance"], story: "With its unconventional form, the protea means 'You made a difference and won with your courage'. It is the strongest representative of successes coming with innovative ideas." } },
        { cat: "congrats", img: "https://www.mutlupaket.com/idea/eo/89/myassets/products/679/iris-blue-dutch-flowers-garden-nature.jpg?revision=1697143329", tr: { name: "Mavi İris", meaning: "Bilgelik Müjdesi", tags: ["Müjde", "İnanç", "Mavi"], story: "İyi haberlerin müjdecisidir. 'Başarı haberinle bizleri gururlandırdın, bilgeliğin ve başarın daim olsun' mesajını karşı tarafa zarifçe iletir." }, en: { name: "Blue Iris", meaning: "Herald of Wisdom", tags: ["GoodNews", "Faith", "Blue"], story: "It is the herald of good news. It elegantly conveys the message 'You made us proud with the news of your success, may your wisdom and success be eternal' to the other party." } },
        { cat: "congrats", img: "https://www.zengardentr.com/shop/ir/87/myassets/products/769/frezya-sogani-katli-sari-1.jpg?revision=1697143329", tr: { name: "Sarı Frezya", meaning: "Samimi Başarı", tags: ["Güven", "Samimiyet", "Sarı"], story: "Yakın dostların başarılarını kutlarken 'Seninle gurur duyuyorum' demenin en mis kokulu yoludur. Samimi bir sevgiyle harmanlanmış tebrikleri temsil eder." }, en: { name: "Yellow Freesia", meaning: "Sincere Success", tags: ["Trust", "Sincerity", "Yellow"], story: "It is the most fragrant way of saying 'I am proud of you' when celebrating the successes of close friends. It represents congratulations blended with sincere love." } },
        { cat: "congrats", img: "https://p4.wallpaperbetter.com/wallpaper/429/796/42/flowers-rose-roses-orange-flowers-wallpaper-preview.jpg", tr: { name: "Turuncu Gül", meaning: "Heves ve Enerji", tags: ["Heyecan", "Arzu", "Turuncu"], story: "Kırmızı gülün tutkusu ile sarı gülün dostluğunu birleştirir. Yeni bir girişime başlayanlara 'Bu heyecanın seni en büyük başarılara taşısın' demek için verilir." }, en: { name: "Orange Rose", meaning: "Enthusiasm and Energy", tags: ["Excitement", "Desire", "Orange"], story: "It combines the passion of the red rose with the friendship of the yellow rose. It is given to those starting a new venture to say 'May this excitement carry you to the greatest successes'." } },
        { cat: "congrats", img: "https://m.media-amazon.com/images/I/81oVrMLGL4L._AC_UF350,350_QL80_.jpg", tr: { name: "Mor Antoryum", meaning: "Sıradışı Başarı", tags: ["Eşsizlik", "İlham", "Mor"], story: "Kalp şeklindeki yapısıyla 'İşini kalbinle yaptın ve başardın' mesajını taşır. İlham veren ve fark yaratan liderlerin çiçeğidir." }, en: { name: "Purple Anthurium", meaning: "Extraordinary Success", tags: ["Uniqueness", "Inspiration", "Purple"], story: "With its heart-shaped structure, it carries the message 'You did your job with your heart and succeeded'. It is the flower of inspiring and difference-making leaders." } },
        { cat: "congrats", img: "https://images.pexels.com/photos/30431130/pexels-photo-30431130/free-photo-of-vibrant-yellow-chrysanthemum-in-bloom.jpeg", tr: { name: "Sarı Kasımpatı", meaning: "Bolluk ve Bereket", tags: ["Bereket", "Sadakat", "Sarı"], story: "Başarının getirdiği maddi ve manevi zenginliği simgeler. 'Kazandığın bu başarı hayatına bereket ve huzur getirsin' dileğini temsil eder." }, en: { name: "Yellow Chrysanthemum", meaning: "Abundance and Prosperity", tags: ["Prosperity", "Loyalty", "Yellow"], story: "It symbolizes the material and spiritual wealth brought by success. It represents the wish 'May this success you earned bring prosperity and peace to your life'." } },
        { cat: "congrats", img: "https://p4.wallpaperbetter.com/wallpaper/619/810/421/purple-hyacinth-wallpaper-preview.jpg", tr: { name: "Mavi Sümbül", meaning: "İstikrarlı Başarı", tags: ["Bağlılık", "Huzur", "Mavi"], story: "Adım adım, istikrarla gelen başarıların çiçeğidir. 'Disiplinin ve azmin sonunda meyvesini verdi' demenin en huzurlu yoludur." }, en: { name: "Blue Hyacinth", meaning: "Consistent Success", tags: ["Loyalty", "Peace", "Blue"], story: "It is the flower of successes that come step by step with consistency. It is the most peaceful way of saying 'Your discipline and perseverance finally paid off'." } },
        { cat: "congrats", img: "https://www.e-fidancim.com/shop/hr/14/myassets/products/737/berini-lale-sogani.jpg?revision=1734613693", tr: { name: "Turuncu Lale", meaning: "Güneşli Başlangıç", tags: ["Umut", "Yenilik", "Turuncu"], story: "Yeni bir dönemin, yeni bir kariyerin kapısını açanlara verilir. 'Bu yeni sayfa sana başarı ve mutluluk getirsin' anlamını taşır." }, en: { name: "Orange Tulip", meaning: "Sunny Beginning", tags: ["Hope", "Novelty", "Orange"], story: "It is given to those opening the door to a new era, a new career. It means 'May this new chapter bring you success and happiness'." } },
        { cat: "congrats", img: "https://cdn.myikas.com/images/78cd0ab1-c3e8-4c54-87a0-d4a5a2f23dd5/b11ad7f0-e7ae-4278-8879-3b5006cd61c9/1296/img-1602.webp", tr: { name: "Sarı Orkide", meaning: "Yeni Fırsatlar", tags: ["Fırsat", "Lüks", "Sarı"], story: "Nadir bulunan fırsatların başarıyla sonuçlanmasını kutlar. 'Eline geçen bu fırsatı mükemmelliğe dönüştürdün' demenin prestijli bir yoludur." }, en: { name: "Yellow Orchid", meaning: "New Opportunities", tags: ["Opportunity", "Luxury", "Yellow"], story: "It celebrates the successful conclusion of rare opportunities. It is a prestigious way of saying 'You turned this opportunity you got into perfection'." } },

        { cat: "hate", img: "https://static.bianet.org/system/uploads/1/articles/spot_image/000/155/344/original/ters_lale_m.jpg", tr: { name: "Ters Lale", meaning: "Zorlu Ayrılık", tags: ["Hüzün", "Hasret", "Veda"], story: "Anadolu'da 'Ağlayan Gelin' olarak bilinen Ters Lale, boynu bükük duruşuyla dindirilemeyen bir kederin sembolüdür. Birine bu çiçeği vermek, yaşanan ayrılığın kalpte bıraktığı derin sızıyı ve sessiz bir hüznü ifade eder. Kelimelerin bittiği yerde, vakur ve asil bir vedanın en güçlü anlatıcısıdır." }, en: { name: "Fritillaria (Inverted Tulip)", meaning: "Difficult Parting", tags: ["Sadness", "Longing", "Farewell"], story: "Known as the 'Weeping Bride' in Anatolia, the Inverted Tulip is the symbol of unquenchable grief with its bowed stance. Giving this flower to someone expresses the deep ache and silent sadness left in the heart by the separation experienced. Where words end, it is the strongest narrator of a dignified and noble farewell." } },
        { cat: "hate", img: "https://e0.pxfuel.com/wallpapers/621/146/desktop-wallpaper-maroon-rose-burgundy-roses.jpg", tr: { name: "Koyu Kırmızı Gül", meaning: "Hüzünlü Elveda", tags: ["BitenAşk", "Zarafet", "Veda"], story: "Rengi siyaha yaklaşan bu güller, yaşanan büyük bir sevdanın ardından gelen o vakur vedanın sembolüdür. 'Seni her zaman bu derinlikle hatırlayacağım ama artık gitme vakti' mesajını en asil şekilde iletir." }, en: { name: "Dark Red Rose", meaning: "Sorrowful Goodbye", tags: ["EndedLove", "Elegance", "Farewell"], story: "These roses, whose color approaches black, are the symbol of that dignified farewell that comes after a great love experienced. It conveys the message 'I will always remember you with this depth, but it is time to go now' in the most noble way." } },
        { cat: "hate", img: "https://img.wallpapic.com/i4190-119-93/thumb/cicekler-cicek-mozaigi-vahsi-pansy-hercai-menekse-duvar-kagidi.jpg", tr: { name: "Hercai Menekşe", meaning: "Anılar ve Veda", tags: ["Hüzün", "Hatıra", "BeniUnutma"], story: "Adını sevgilisini kışın ortasında bırakan 'hercai' aşığın hikâyesinden alır. 'Beni unutma, her ne kadar ayrılmış olsak da zihnim her zaman seninle' diyen, vefalı bir veda çiçeğidir." }, en: { name: "Pansy", meaning: "Memories and Farewell", tags: ["Sadness", "Memory", "ForgetMeNot"], story: "It takes its name from the story of the 'fickle' lover who left his beloved in the middle of winter. It is a loyal farewell flower that says 'Do not forget me, even though we have parted, my mind is always with you'." } },
        { cat: "hate", img: "https://p4.wallpaperbetter.com/wallpaper/534/478/452/flower-photo-chrysanthemum-wallpaper-preview.jpg", tr: { name: "Kasımpatı (Beyaz)", meaning: "Sonsuz Huzur", tags: ["Hüzün", "Kasım", "Saygı"], story: "Doğanın kış uykusuna yatmadan önceki 'son vedası' olarak kabul edilir. Ayrılığın en kesin ve hüzünlü hali olan 'ebedi vedayı' temsil eder; karşı tarafa olan sonsuz saygıyı simgeler." }, en: { name: "White Chrysanthemum", meaning: "Eternal Peace", tags: ["Sadness", "November", "Respect"], story: "It is considered nature's 'last farewell' before hibernating for winter. It represents the 'eternal farewell', the most definitive and sorrowful state of separation; it symbolizes infinite respect for the other party." } },
        { cat: "hate", img: "https://www.hammaddeler.com/shop/cr/25/myassets/products/370/lavanta.png?revision=1740999165", tr: { name: "Lavanta", meaning: "Huzurlu Ayrılık", tags: ["Sessizlik", "Mesafe", "Anlayış"], story: "Yatıştırıcı etkisiyle bilinen lavanta, 'Aramızdaki fırtınalar dinsin, birbirimizi güzel hatırlayarak sessizce ayrılalım' demektir. Tartışmasız ve huzurlu bir vedanın elçisidir." }, en: { name: "Lavender", meaning: "Peaceful Parting", tags: ["Silence", "Distance", "Understanding"], story: "Known for its soothing effect, lavender means 'Let the storms between us calm down, let's part quietly remembering each other beautifully'. It is the ambassador of an undisputed and peaceful farewell." } },
        { cat: "hate", img: "https://i.etsystatic.com/16270662/r/il/5f933e/5052845130/il_fullxfull.5052845130_35ck.jpg", tr: { name: "Kurutulmuş Papatya", meaning: "Solan Umutlar", tags: ["BitenNeşe", "Gerçeklik", "Veda"], story: "Taze papatyanın neşesini yitirdiği, gerçeklerle yüzleşme vaktinin geldiğini anlatır. 'Artık seviyor-sevmiyor heyecanı bitti' diyen, saf bir sevginin veda belgesidir." }, en: { name: "Dried Daisy", meaning: "Fading Hopes", tags: ["EndedJoy", "Reality", "Farewell"], story: "It tells that the fresh daisy has lost its joy, and the time to face reality has come. It is the farewell document of a pure love that says 'The he-loves-me-he-loves-me-not excitement is over'." } },
        { cat: "hate", img: "https://i.ebayimg.com/images/g/FeYAAOSwOmZe5kkK/s-l1200.jpg", tr: { name: "Siyah Gül", meaning: "Kesin Veda", tags: ["Son", "Siyah", "Kesinlik"], story: "Siyah gül, geri dönüşü olmayan yolların çiçeğidir. Bir sonu temsil ederken aynı zamanda bu sonun getirdiği ağırlığı ve kabullenişi simgeler. Karşı tarafa 'Bu bir sondur' mesajını verir." }, en: { name: "Black Rose", meaning: "Absolute Farewell", tags: ["End", "Black", "Certainty"], story: "The black rose is the flower of roads of no return. While representing an end, it also symbolizes the weight and acceptance brought by this end. It gives the other party the message 'This is an end'." } },
        { cat: "hate", img: "https://i.pinimg.com/736x/67/bd/0a/67bd0a7bba1c2a74bc9c4f06680e6809.jpg", tr: { name: "Sarı Gül", meaning: "Biten Duygular", tags: ["Arkadaşlık", "Mesafe", "Sarı"], story: "Romantik ilişkinin bitip yerini sade bir dostluğa bırakmasını simgeler. 'Aşkımız bitti ama sana olan saygım ve arkadaşlığım baki' demenin nazik ve dürüst yoludur." }, en: { name: "Yellow Rose", meaning: "Ended Feelings", tags: ["Friendship", "Distance", "Yellow"], story: "It symbolizes the end of the romantic relationship and its replacement by a simple friendship. It is the polite and honest way of saying 'Our love is over but my respect and friendship for you are eternal'." } },
        { cat: "hate", img: "https://tuncbotanik.com/uploads/p/p/KIRMIZI-SIKLAMEN-CICEGI-3-ADET_5.jpg", tr: { name: "Siklamen", meaning: "Elveda Deme Vakti", tags: ["Son", "Ayrılık", "İstifa"], story: "Doğada yapraklarını dökmeden önce en canlı halini alır. Bu yüzden 'her güzel şeyin bir sonu olduğunu' ve artık ayrılık vaktinin geldiğini temsil eden metodolojik bir çiçektir." }, en: { name: "Cyclamen", meaning: "Time to Say Goodbye", tags: ["End", "Separation", "Resignation"], story: "It takes its most vivid form in nature before shedding its leaves. Therefore, it is a methodological flower that represents 'everything beautiful has an end' and that the time for parting has now come." } },
        { cat: "hate", img: "https://static8.depositphotos.com/1177973/811/i/450/depositphotos_8118898-stock-photo-yellow-autumn-chrysanthemum-in-the.jpg", tr: { name: "Sarı Kasımpatı", meaning: "Hüzünlü Bakış", tags: ["Hasret", "Gözyaşı", "Sarı"], story: "Sarı krizantem, Türkiye'de 'karşılıksız kalan duyguların veya biten bir umudun' ardından dökülen sessiz gözyaşlarını ve yaşanan hayal kırıklığını temsil eder." }, en: { name: "Yellow Chrysanthemum", meaning: "Sorrowful Look", tags: ["Longing", "Tears", "Yellow"], story: "The yellow chrysanthemum represents the silent tears shed after 'unrequited feelings or an ended hope' and the disappointment experienced in Turkey." } },
        { cat: "hate", img: "https://productimages.hepsiburada.net/s/59/375-375/110000000565175.jpg/format:webp", tr: { name: "Sümbülteber", meaning: "Tehlikeli Veda", tags: ["Hassasiyet", "ZorAyrılık", "Zarafet"], story: "Kokusuyla büyüleyen ama narin yapısıyla 'kopma noktasını' temsil eder. 'Bu ayrılık beni çok yaralıyor' mesajını taşıyan, duygusal yoğunluğu çok yüksek bir vedadır." }, en: { name: "Tuberose", meaning: "Dangerous Farewell", tags: ["Sensitivity", "DifficultParting", "Elegance"], story: "It fascinates with its scent but represents the 'breaking point' with its delicate structure. It is a farewell with a very high emotional intensity, carrying the message 'This separation hurts me a lot'." } },
        { cat: "hate", img: "https://cdn.create.vista.com/api/media/small/595155778/stock-photo-macro-view-water-drops-purple-gladiolus-petals-rain-summer-day", tr: { name: "Mor Glayöl", meaning: "Sessiz Gurur", tags: ["Vazgeçiş", "Gurur", "Mor"], story: "Glayölün dik duruşu, ayrılık anında gururu korumayı simgeler. 'Bu ayrılıktan karakterimle ve dik durarak çıkıyorum' diyen, saygın bir veda biçimidir." }, en: { name: "Purple Gladiolus", meaning: "Silent Pride", tags: ["GivingUp", "Pride", "Purple"], story: "The upright stance of the gladiolus symbolizes protecting pride at the moment of separation. It is a respectable form of farewell that says 'I am coming out of this separation with my character and standing tall'." } },
        { cat: "hate", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgrN_H_Jp2Tqa5Jom70N3uZpuIfLScWxPCRA&s", tr: { name: "Kırmızı Haşhaş", meaning: "Sonsuz Uyku", tags: ["Unutuş", "Huzur", "Kırmızı"], story: "Biten bir ilişkinin ardından gelen o derin sessizliği ve 'artık unutma vaktinin' geldiğini anlatır. Mitolojik kökeniyle, yaşananları derin bir uykuya daldırmayı simgeler." }, en: { name: "Red Poppy", meaning: "Eternal Sleep", tags: ["Forgetting", "Peace", "Red"], story: "It tells of that deep silence that comes after an ended relationship and that 'it is time to forget now'. With its mythological roots, it symbolizes putting what happened into a deep sleep." } },
        { cat: "hate", img: "https://p4.wallpaperbetter.com/wallpaper/81/950/342/lily-flower-drops-stamens-wallpaper-preview.jpg", tr: { name: "Beyaz Zambak", meaning: "Asil Bir Kopuş", tags: ["Saflık", "Zarafet", "Veda"], story: "Bir birlikteliğin ardından 'Sana olan saygımı yitirmeden hayatından çekiliyorum' demektir. Geçmişin temizliğini onurlandırarak yolu ayırmanın en duru yoludur." }, en: { name: "White Lily", meaning: "A Noble Breakup", tags: ["Purity", "Elegance", "Farewell"], story: "After a relationship, it means 'I am withdrawing from your life without losing my respect for you'. It is the clearest way of parting ways by honoring the purity of the past." } },
        { cat: "hate", img: "https://cdn.pixabay.com/photo/2015/05/21/17/31/yellow-flowered-acacia-gold-777534_1280.jpg", tr: { name: "Sarı Akasya", meaning: "Gizli Veda", tags: ["Platonik", "Hüzün", "Sarı"], story: "Söyleyemediği duygularla yaşayanların sessizce vedalaşma biçimidir. 'Seni hep uzaktan sevdim ama artık bu gizli sevdaya veda ediyorum' mesajını iletir." }, en: { name: "Yellow Acacia", meaning: "Secret Farewell", tags: ["Platonic", "Sadness", "Yellow"], story: "It is the silent way of saying goodbye for those living with unspoken feelings. It conveys the message 'I always loved you from afar but now I am saying goodbye to this secret love'." } },
        { cat: "hate", img: "https://st2.depositphotos.com/18917054/86669/i/450/depositphotos_866697236-stock-photo-robinia-hispida-false-acacia-pink.jpg", tr: { name: "Mor Akasya", meaning: "Büyülü Veda", tags: ["Zarafet", "Mesafe", "Mor"], story: "Yaşanan güzel günlerin büyüsünü bozmadan, asaletle yolları ayırmayı simgeler. 'Hayatımda bıraktığın izler için teşekkürler ama artık gitmeliyim' demektir." }, en: { name: "Purple Acacia", meaning: "Magical Farewell", tags: ["Elegance", "Distance", "Purple"], story: "It symbolizes parting ways with nobility, without breaking the magic of the beautiful days experienced. It means 'Thank you for the traces you left in my life but I must go now'." } },
        { cat: "hate", img: "https://www.tohumevi.com.tr/idea/kr/53/myassets/products/700/2.jpg?revision=1697143329", tr: { name: "Mavi Anemon", meaning: "Kırılgan Umut", tags: ["Beklenti", "Hasret", "Mavi"], story: "Ayrılığın ardından duyulan hasreti ve ufacık bir 'nasılsın' mesajına olan gizli ihtiyacı temsil eder. Kırılgan ama bir o kadar da beklenti dolu bir veda çiçeğidir." }, en: { name: "Blue Anemone", meaning: "Fragile Hope", tags: ["Expectation", "Longing", "Blue"], story: "It represents the longing felt after separation and the secret need for a tiny 'how are you' message. It is a fragile yet equally expectant farewell flower." } },
        { cat: "hate", img: "https://cdn.create.vista.com/api/media/small/123992386/stock-photo-blooming-lilac-flowers", tr: { name: "Koyu Mor Leylak", meaning: "Elveda Geçmişim", tags: ["Anılar", "Hüzün", "Mor"], story: "'Geçip giden güzel günlere veda ediyorum ama anıları hep kalbimde' mesajını taşır. Hayatın bir dönemini kapatırken yaşanan o tatlı-sert hüznün sembolüdür." }, en: { name: "Dark Purple Lilac", meaning: "Goodbye My Past", tags: ["Memories", "Sadness", "Purple"], story: "It carries the message 'I am saying goodbye to the passing beautiful days but their memories are always in my heart'. It is the symbol of that bittersweet sadness experienced while closing a period of life." } },
        { cat: "hate", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYDdhtZZisxwajdIhJWVvRcw169EYGiukwuw&s", tr: { name: "Solgun Yasemin", meaning: "Yitip Giden Güven", tags: ["Güven", "Yorgunluk", "Beyaz"], story: "İlişkideki güvenin zedelendiği ve artık devam edecek gücün kalmadığı vedalarda verilir. 'Duygularım soldu, artık veda vaktidir' anlamını taşır." }, en: { name: "Faded Jasmine", meaning: "Fading Trust", tags: ["Trust", "Exhaustion", "White"], story: "It is given in farewells where the trust in the relationship is damaged and there is no strength left to continue. It means 'My feelings have faded, it is now time to say goodbye'." } },
        { cat: "hate", img: "https://sc04.alicdn.com/kf/H755dc60b99e945d0b6534850982e5cb3e.jpg", tr: { name: "Kuru Karanfil", meaning: "Acı Bir Hatıra", tags: ["Hüzün", "Hatıra", "Bitti"], story: "Yaşananların sadece bir 'hatıra' olarak kaldığını simgeler. 'Her şey bitti, geriye sadece bu kuru çiçekler ve anılar kaldı' demenin en dürüst yoludur." }, en: { name: "Dried Carnation", meaning: "A Bitter Memory", tags: ["Sadness", "Memory", "Over"], story: "It symbolizes that what happened remains only as a 'memory'. It is the most honest way of saying 'Everything is over, only these dried flowers and memories remain'." } }
    ]
};

let currentLang = "tr";

const els = {
    sidebar: document.getElementById('sidebar'),
    overlay: document.getElementById('sidebarOverlay'),
    openBtn: document.getElementById('openMenuBtn'),
    closeBtn: document.getElementById('closeMenuBtn'),
    themeBtn: document.getElementById('themeBtn'),
    langBtn: document.getElementById('langBtn'),
    catContainer: document.getElementById('categoryButtons'),
    flowerList: document.getElementById('flowerList'),
    sections: document.querySelectorAll('.view-section'),
    homeSearch: document.getElementById('homeSearchInput'),
    catSearch: document.getElementById('catSearchInput'),
    searchMsg: document.getElementById('searchMsg'),
    contactModal: document.getElementById('contactModal'),
    closeContactBtn: document.getElementById('closeContactBtn'),
    contactForm: document.getElementById('contactForm'),
    btnSubmit: document.getElementById('btn-submit'),
    toastBox: document.getElementById('toastBox'),
    toastMsg: document.getElementById('toastMsg'),
    pageLoader: document.getElementById('page-loader'),
    loaderText: document.getElementById('loaderText')
};

function showLoader(callback) {
    els.loaderText.innerText = data.lang[currentLang].loading;
    els.pageLoader.classList.add('active');
    
    setTimeout(() => {
        if (callback) callback();
        els.pageLoader.classList.remove('active');
    }, 500);
}

let toastTimeout;
function showToast(message, iconName = 'check-circle') {
    els.toastMsg.innerText = message;
    els.toastBox.querySelector('span').setAttribute('data-lucide', iconName);
    lucide.createIcons();
    
    els.toastBox.classList.add('show');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => els.toastBox.classList.remove('show'), 3500);
}

function openContactModal() {
    closeMenu();
    els.contactModal.classList.add('active');
}

function closeContactModal() {
    els.contactModal.classList.remove('active');
    setTimeout(() => {
        els.contactForm.reset();
        els.btnSubmit.disabled = false;
        els.btnSubmit.style.backgroundColor = ''; 
        els.btnSubmit.innerHTML = `<span id="btn-text">${data.lang[currentLang].btnSubmit}</span> <span data-lucide="send" id="btn-icon" aria-hidden="true"></span>`;
        lucide.createIcons();
    }, 400); 
}

els.contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); 
    const langData = data.lang[currentLang];
    
    els.btnSubmit.disabled = true;
    els.btnSubmit.innerHTML = `<span class="fa-solid fa-spinner fa-spin" aria-hidden="true"></span> <span id="btn-text">${langData.btnSending}</span>`;

    setTimeout(() => {
        els.btnSubmit.style.backgroundColor = 'var(--accent)';
        els.btnSubmit.innerHTML = `<span data-lucide="check-circle" aria-hidden="true"></span> <span id="btn-text">${langData.btnSent}</span>`;
        lucide.createIcons();
        
        showToast(langData.msgSent, 'send-check');
        
        setTimeout(() => { closeContactModal(); }, 1000); 
    }, 1500); 
});

els.closeContactBtn.addEventListener('click', closeContactModal);
els.contactModal.addEventListener('click', (e) => {
    if(e.target === els.contactModal) closeContactModal();
});

function navigateTo(targetId, catId = null) {
    closeMenu();
    
    showLoader(() => {
        els.sections.forEach(sec => sec.classList.remove('active'));
        document.getElementById(targetId).classList.add('active');
        document.getElementById('globalSearchContainer').style.display = 'none';

        if (targetId === 'category-view') renderFlowers(catId || "all", els.catSearch.value.trim().toLowerCase());
        window.scrollTo({ top: 0, behavior: 'auto' }); 
    });
}

els.openBtn.addEventListener('click', openMenu);
els.closeBtn.addEventListener('click', closeMenu);
els.overlay.addEventListener('click', closeMenu);
els.themeBtn.addEventListener('click', toggleTheme);
els.langBtn.addEventListener('click', toggleLang);

document.getElementById('backToHomeBtn').addEventListener('click', () => {
    els.homeSearch.value = ""; els.catSearch.value = ""; 
    navigateTo('home-view');
});

document.getElementById('btn-list').addEventListener('click', () => setGridMode('list'));
document.getElementById('btn-grid').addEventListener('click', () => setGridMode('grid'));

document.getElementById('menu-emotions').addEventListener('click', function(e) {
    e.preventDefault();
    this.parentElement.classList.toggle('open');
});

document.querySelectorAll('.sidebar-menu a, .footer-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        if(link.getAttribute('href') === '#') {
            e.preventDefault();
            if(link.id === 'menu-emotions') return; 

            const target = e.target.closest('a').getAttribute('data-target');
            const cat = e.target.closest('a').getAttribute('data-cat');
            const scrollTarget = e.target.closest('a').getAttribute('data-scroll');
            const modalTarget = e.target.closest('a').getAttribute('data-modal');
            
            if (modalTarget === 'contact') {
                openContactModal();
            } else if (scrollTarget === 'cats') {
                closeMenu();
                showLoader(() => {
                    navigateTo('home-view');
                    setTimeout(() => document.getElementById('categoryButtons').scrollIntoView({behavior: 'smooth'}), 100);
                });
            } else if (target) {
                els.homeSearch.value = ""; els.catSearch.value = ""; 
                navigateTo(target, cat);
            }
        }
    });
});

els.homeSearch.addEventListener('input', (e) => {
    const term = e.target.value;
    if (term.trim().length > 0) {
        els.catSearch.value = term; 
        
        showLoader(() => {
            els.sections.forEach(sec => sec.classList.remove('active'));
            document.getElementById('category-view').classList.add('active');
            document.getElementById('globalSearchContainer').style.display = 'none';
            
            document.getElementById('catTitle').innerText = data.lang[currentLang].searchResults;
            renderFlowers('all', term.trim().toLowerCase());
            els.catSearch.focus(); 
        });
    }
});

els.catSearch.addEventListener('input', (e) => {
    const term = e.target.value.trim().toLowerCase();
    const currentCat = document.getElementById('category-view').getAttribute('data-current-cat') || 'all';
    
    if (term.length === 0) {
        document.getElementById('catTitle').innerText = data.lang[currentLang].categories[currentCat].text;
        els.homeSearch.value = "";
    } else {
        document.getElementById('catTitle').innerText = data.lang[currentLang].searchResults;
    }
    renderFlowers(currentCat, term);
});

function openMenu() {
    els.sidebar.classList.add('active');
    els.overlay.classList.add('active');
}

function closeMenu() {
    els.sidebar.classList.remove('active');
    els.overlay.classList.remove('active');
}

function toggleTheme() {
    const body = document.body;
    if (body.getAttribute("data-theme") === "dark") {
        body.removeAttribute("data-theme");
        els.themeBtn.innerHTML = '<span data-lucide="moon" aria-hidden="true"></span>';
    } else {
        body.setAttribute("data-theme", "dark");
        els.themeBtn.innerHTML = '<span data-lucide="sun" aria-hidden="true"></span>';
    }
    lucide.createIcons();
}

function toggleLang() {
    currentLang = currentLang === "tr" ? "en" : "tr";
    els.langBtn.innerText = currentLang === "tr" ? "EN" : "TR";
    showLoader(() => { updateLanguageUI(); });
}

function updateValidationMessages() {
    const isTr = currentLang === 'tr';
    const requiredMsg = isTr ? 'Lütfen bu alanı doldurun.' : 'Please fill out this field.';
    const emailMsg = isTr ? 'Lütfen geçerli bir e-posta adresi girin.' : 'Please enter a valid email address.';
    
    const nameInput = document.getElementById('contactName');
    const emailInput = document.getElementById('contactEmail');
    const msgInput = document.getElementById('contactMessage');
    
    [nameInput, msgInput].forEach(input => {
        input.oninvalid = function(e) {
            e.target.setCustomValidity("");
            if (!e.target.validity.valid) {
                e.target.setCustomValidity(requiredMsg);
            }
        };
        input.oninput = function(e) {
            e.target.setCustomValidity("");
        };
    });

    emailInput.oninvalid = function(e) {
        e.target.setCustomValidity("");
        if (e.target.validity.valueMissing) {
            e.target.setCustomValidity(requiredMsg);
        } else if (e.target.validity.typeMismatch) {
            e.target.setCustomValidity(emailMsg);
        }
    };
    emailInput.oninput = function(e) {
        e.target.setCustomValidity("");
    };
}

function updateLanguageUI() {
    const l = data.lang[currentLang];
    
    document.getElementById("logoTitleText").innerText = l.logoTitle;
    document.getElementById("logoSubtitleText").innerText = l.logoSubtitle;
    document.getElementById("home-title").innerText = l.heroTitle;
    
    const headerImg = document.querySelector("#headerLogo img");
    if(headerImg) headerImg.alt = l.logoTitle + " Logo";
    
    els.homeSearch.placeholder = l.search;
    els.catSearch.placeholder = l.search;
    document.getElementById("home-subtitle").innerText = l.subtitle;
    document.getElementById("searchMsg").innerText = l.noResult;
    document.getElementById("backToHomeBtn").innerText = l.backBtn;
    
    document.getElementById("menu-home").innerHTML = '<span data-lucide="home" aria-hidden="true"></span> ' + l.menu[0];
    
    document.getElementById("menu-emotions").innerHTML = '<div style="display:flex; align-items:center; gap:15px;"><span data-lucide="heart" aria-hidden="true"></span> ' + l.menu[1] + '</div> <span data-lucide="chevron-down" class="menu-arrow" aria-hidden="true"></span>';
    
    document.getElementById("menu-all").innerHTML = '<span data-lucide="layout-grid" aria-hidden="true"></span> ' + l.menu[2];
    document.getElementById("menu-about").innerHTML = '<span data-lucide="info" aria-hidden="true"></span> ' + l.menu[3];
    document.getElementById("menu-contact").innerHTML = '<span data-lucide="mail-plus" aria-hidden="true"></span> ' + l.menu[4];
    
    document.getElementById("sub-love").innerText = l.categories.love.text;
    document.getElementById("sub-apology").innerText = l.categories.apology.text;
    document.getElementById("sub-congrats").innerText = l.categories.congrats.text;
    document.getElementById("sub-hate").innerText = l.categories.hate.text;

    document.getElementById("about-title").innerText = l.about.title;
    document.getElementById("ab-main-text").innerText = l.about.mainText;
    document.getElementById("ab-mission-title").innerText = l.about.t1;
    document.getElementById("ab-mission-text").innerText = l.about.d1;
    document.getElementById("ab-vision-title").innerText = l.about.t2;
    document.getElementById("ab-vision-text").innerText = l.about.d2;

    document.getElementById("ft-desc").innerText = l.ftDesc;
    document.getElementById("ft-menu-title").innerText = l.ftMenuTitle;
    document.getElementById("ft-link-home").innerText = l.menu[0];
    document.getElementById("ft-link-all").innerText = l.menu[2];
    document.getElementById("ft-link-about").innerText = l.menu[3];
    document.getElementById("ft-link-contact").innerText = l.menu[4]; 
    document.getElementById("ft-contact-title").innerText = l.ftContactTitle;
    document.getElementById("ft-copyright").innerText = l.ftCopyright;

    document.getElementById("modal-title").innerText = l.modalTitle;
    document.getElementById("lbl-name").innerText = l.lblName;
    document.getElementById("contactName").placeholder = l.phName;
    document.getElementById("lbl-email").innerText = l.lblEmail;
    document.getElementById("contactEmail").placeholder = l.phEmail;
    document.getElementById("lbl-message").innerText = l.lblMessage;
    document.getElementById("contactMessage").placeholder = l.phMsg;
    
    if(!els.btnSubmit.disabled) {
        els.btnSubmit.innerHTML = `<span id="btn-text">${l.btnSubmit}</span> <span data-lucide="send" id="btn-icon" aria-hidden="true"></span>`;
    }
    
    updateValidationMessages();

    renderHomeCategories();
    
    const activeCat = document.getElementById("category-view").getAttribute("data-current-cat");
    if(document.getElementById("category-view").classList.contains("active")){
        renderFlowers(activeCat || 'all', els.catSearch.value.trim().toLowerCase());
    }
    
    lucide.createIcons(); 
}

function renderHomeCategories() {
    els.catContainer.innerHTML = "";
    const cats = Object.keys(data.lang[currentLang].categories).filter(c => c !== 'all');
    
    cats.forEach(cat => {
        const btnData = data.lang[currentLang].categories[cat];
        const btn = document.createElement('button');
        btn.className = 'category-btn';
        
        btn.innerHTML = `
            <span class="icon"><span data-lucide="${btnData.icon}" aria-hidden="true"></span></span> 
            <span class="cat-title">${btnData.text}</span>
            <span class="cat-desc">${btnData.desc}</span>
        `;
        
        btn.onclick = () => {
            els.homeSearch.value = ""; els.catSearch.value = ""; 
            navigateTo('category-view', cat);
        };
        els.catContainer.appendChild(btn);
    });
    lucide.createIcons();
}

function toggleAccordion(btn) {
    const container = btn.parentElement;
    const isOpen = container.classList.contains('open');

    document.querySelectorAll('.flower-accordion').forEach(acc => acc.classList.remove('open'));

    if (!isOpen) {
        container.classList.add('open');
    }
}

function renderFlowers(catId, searchTerm = "") {
    document.getElementById("category-view").setAttribute("data-current-cat", catId);
    
    if (searchTerm.length > 0) {
        document.getElementById("catTitle").innerText = data.lang[currentLang].searchResults;
    } else {
        document.getElementById("catTitle").innerText = data.lang[currentLang].categories[catId].text;
    }
    
    els.flowerList.innerHTML = "";
    let matchCount = 0;
    
    data.flowers.forEach(flower => {
        const info = flower[currentLang];
        const isCatMatch = (catId === 'all' || flower.cat === catId);
        const isSearchMatch = (searchTerm === "") || 
                              (info.name.toLowerCase().includes(searchTerm)) || 
                              (info.meaning.toLowerCase().includes(searchTerm)) ||
                              (info.tags.some(tag => tag.toLowerCase().includes(searchTerm)));

        if (isCatMatch && isSearchMatch) {
            matchCount++;
            const tagsHTML = info.tags.map(t => `<span class="tag">#${t}</span>`).join("");
            
            let imageElement = '';
            if (flower.img && flower.img.trim() !== "") {
                imageElement = `
                    <img src="${flower.img}" alt="${info.name} - ${info.meaning}" class="flower-img" loading="lazy" onload="this.classList.add('loaded')" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'; lucide.createIcons();">
                    <div class="fallback-img" style="display: none;">
                        <span data-lucide="camera-off" aria-hidden="true"></span>
                        <span class="f-name">${info.name}</span>
                        <span class="f-desc">${data.lang[currentLang].noImage}</span>
                    </div>
                `;
            } else {
                imageElement = `
                    <div class="fallback-img">
                        <span data-lucide="flower-2" aria-hidden="true"></span>
                        <span class="f-name">${info.name}</span>
                        <span class="f-desc">${data.lang[currentLang].noImage}</span>
                    </div>
                `;
            }

            // Erişilebilirlik: Butona aria-label eklenerek screen reader uyumu sağlandı.
            els.flowerList.innerHTML += `
                <article class="flower-card" tabindex="0">
                    <div class="flower-img-wrapper">
                        ${imageElement}
                    </div>
                    <div class="flower-info">
                        <h3 class="flower-name">${info.name}</h3>
                        <div class="flower-meaning">${info.meaning}</div>
                        <div class="tags">${tagsHTML}</div>
                        <div class="flower-accordion">
                            <button class="accordion-btn" onclick="toggleAccordion(this)" aria-label="${info.name} anlamını detaylı oku">
                                <span>${data.lang[currentLang].btnRead}</span>
                                <span class="arrow" aria-hidden="true">▼</span>
                            </button>
                            <div class="accordion-content">
                                <p>${info.story}</p>
                            </div>
                        </div>
                    </div>
                </article>
            `;
        }
    });

    els.searchMsg.style.display = matchCount === 0 ? "block" : "none";
    
    const countElem = document.getElementById("catCount");
    if (searchTerm.length > 0) {
        countElem.innerText = `${matchCount} ${data.lang[currentLang].countResults}`;
    } else {
        countElem.innerText = `${matchCount} ${data.lang[currentLang].countFlowers}`;
    }

    lucide.createIcons(); 
}

function setGridMode(mode) {
    const btnList = document.getElementById("btn-list");
    const btnGrid = document.getElementById("btn-grid");

    if(mode === 'grid') {
        els.flowerList.classList.remove("list");
        els.flowerList.classList.add("grid");
        btnGrid.classList.add("active");
        btnGrid.setAttribute('aria-pressed', 'true');
        btnList.classList.remove("active");
        btnList.setAttribute('aria-pressed', 'false');
    } else {
        els.flowerList.classList.remove("grid");
        els.flowerList.classList.add("list");
        btnList.classList.add("active");
        btnList.setAttribute('aria-pressed', 'true');
        btnGrid.classList.remove("active");
        btnGrid.setAttribute('aria-pressed', 'false');
    }
}

window.onload = () => {
    updateLanguageUI();
    document.getElementById('globalSearchContainer').style.display = 'none'; 
    lucide.createIcons(); 
};