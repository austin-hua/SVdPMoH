export type Locale = "en" | "zh"

export const translations = {
  en: {
    nav: {
      home: "Home",
      requestHelp: "Request Help",
      donate: "Donate",
      volunteer: "Volunteer",
      about: "About SVdP",
      spiritualGrowth: "Spiritual Growth",
      openMenu: "Open navigation menu",
      closeMenu: "Close navigation menu",
    },
    footer: {
      ourParishes: "Our Parishes",
      quickLinks: "Quick Links",
      requestAssistance: "Request Assistance",
      donate: "Donate",
      volunteer: "Volunteer",
      about: "About SVdP",
      spiritualGrowth: "Spiritual Growth",
      rights: (year: number) =>
        `© ${year} Society of St. Vincent de Paul, Mother of Hope Conference of Falls Church, Inc. All rights reserved.`,
      developedBy: "Developed by:",
    },
    home: {
      heroLocation: "Falls Church, Virginia",
      heroTitle: "Mother of Hope Conference",
      heroOrg: "Society of St. Vincent de Paul",
      heroDesc:
        "Inspired by Gospel values, we serve Christ in the poor with love, respect, justice, and joy — uniting the faithful of three Falls Church parishes in service to our neighbors.",
      requestAssistance: "Request Assistance",
      volunteer: "Volunteer",
      donate: "Donate",
      callUs: "Call us:",
      missionTitle: "Our Mission",
      missionQuote:
        "“To live the Gospel message by serving Christ in the poor with love, respect, justice, and joy, and by growing in holiness through prayer, reflection, and action.”",
      missionDesc: (diocese: string) =>
        `The Mother of Hope Conference is a newly established conference of the Society of St. Vincent de Paul, linking the communities of three Falls Church parishes under the ${diocese}.`,
      parishTitle: "Our Parish Partnership",
      parishDesc: "Three Falls Church parishes united in service to our neighbors in need.",
      visitWebsite: "Visit website",
      inPartnershipWith: (diocese: string) => `In partnership with the ${diocese}`,
      mapTitle: "Where We Serve",
      mapDesc: "Our conference primarily serves the Falls Church, Virginia community.",
      howWeServeTitle: "How We Serve",
      howWeServeDesc: "Find the resources and opportunities that are right for you.",
      qlRequestHelp: "Request Help",
      qlRequestHelpDesc: "Need assistance? We're here to help those in our parish boundaries.",
      qlDonate: "Donate",
      qlDonateDesc: "Support our work through financial gifts or material donations.",
      qlVolunteer: "Volunteer",
      qlVolunteerDesc: "Join the Society and serve alongside fellow Vincentians.",
      qlAbout: "About SVdP",
      qlAboutDesc: "Learn about the history and mission of our Society.",
      qlSpiritualGrowth: "Spiritual Growth",
      qlSpiritualGrowthDesc: "Reflections and prayers for Vincentian members.",
      newsTitle: "Latest News",
      newsSubtitle: "Updates from our conference.",
      newsDate: "April 2026",
      newsHeadline: "Mother of Hope Conference Officially Established",
      newsBody:
        "We are pleased to announce that the Society of St. Vincent de Paul Mother of Hope Conference is now officially established in the Commonwealth of Virginia and registered as a nonprofit organization under Section 501(c)(3) of the Internal Revenue Code, effective April 2026. We are also pleased to share that our Conference President and Treasurer have both been elected, marking an important milestone as we begin our work in earnest. We look forward to serving our neighbors in the Falls Church area and growing in the Vincentian spirit of charity.",
      ctaTitle: "Join Us in Serving Our Neighbors",
      ctaDesc:
        "Whether you need assistance, want to donate, or feel called to volunteer,\nthe Mother of Hope Conference welcomes you.",
      becomeVincentian: "Become a Vincentian",
      contactUs: "Contact Us",
    },
    about: {
      title: "About St. Vincent de Paul",
      subtitle:
        "A lay Catholic organization with nearly 200 years of service to the poor, and our local conference in Falls Church, Virginia.",
      historyTitle: "History of the Society",
      history1:
        "Blessed Frédéric Ozanam (1813–1853) was a young student in Paris who, challenged by a classmate to prove that the Church still cared for the poor, gathered a small group of university students in 1833 to begin visiting and serving the destitute of Paris. They named their fledgling Society after St. Vincent de Paul, whose spirit of humble, direct service inspired them.",
      history2:
        "From those humble beginnings, the Society of St. Vincent de Paul has grown into one of the largest lay Catholic charitable organizations in the world, operating in more than 150 countries and serving millions of people each year through direct, person-to-person service — always neighbor to neighbor.",
      history3:
        "In the United States, the Society was established in 1845 in St. Louis, Missouri. Today the Society of St. Vincent de Paul USA encompasses thousands of local conferences and councils, operating food pantries, thrift stores, homeless shelters, and emergency assistance programs across the country.",
      vincentianMissionTitle: "The Vincentian Mission",
      vincentianQuote:
        "“Inspired by Gospel values, the Society of Saint Vincent de Paul, a Catholic lay organization, leads women and men to join together to grow spiritually by offering person-to-person service to those who are needy and suffering.”",
      vincentianQuoteAttrib: "— Mission Statement of the Society of St. Vincent de Paul USA",
      localConferenceTitle: "Our Local Conference",
      localConference1: (diocese: string) =>
        `The Mother of Hope Conference is a newly established conference of the Society of St. Vincent de Paul, serving the Falls Church, Virginia area under the ${diocese}.`,
      localConference2:
        "Our conference is unique in that it unites the faithful of three Falls Church-area parishes in a shared work of charity:",
      localConference3:
        "By linking these three parishes together, we are able to pool our resources and extend our reach to serve more neighbors in need throughout the Falls Church area.",
      learnMoreTitle: "Learn More",
      svdpUsaTitle: "SVdP USA National",
      svdpUsaDesc: "svdpusa.org — national organization, news, and resources",
      svdpCouncilTitle: "SVdP Arlington Council",
      svdpCouncilDesc: "Our regional council serving the Diocese of Arlington",
    },
    requestHelp: {
      title: "Request Assistance",
      subtitle: "We are here to help. Please fill out the form below and we will follow up with you.",
      urgentNote: "For urgent needs or questions, please call us directly at",
    },
    donate: {
      title: "Donate",
      quote:
        "Give, and it will be given to you. A good measure, pressed down, shaken together and running over, will be poured into your lap.",
      quoteRef: "— Luke 6:38",
      financialTitle: "Financial Giving",
      onlineTitle: "Donate Online",
      onlineDesc:
        "Online giving is coming soon. In the meantime, please consider mailing a check or giving in person through your parish. We appreciate your patience as we get set up.",
      checkTitle: "Donate by Check",
      checkDesc: "Please make checks payable to SVDP Mother of Hope Conference and mail to:",
      checkAttn: "ATTN: Treasurer, SVDP Mother of Hope Conference",
      stockTitle: "Donate Stock",
      stockDesc: "To donate stock, please contact your advisor/brokerage firm to initiate the transfer of stock. The delivery instructions are as follows:",
      stockAddressNote: "If an address is requested, please use the following:",
      dafTitle: "Donate from a Donor Advised Fund (DAF)",
      dafDesc: "To donate from a DAF, the following information will be requested:",
      dafNote: "Since we are a new organization, our information may not initially populate at your DAF. You may need to enter all the necessary information.",
      qcdTitle: "IRA Qualified Charitable Distribution (QCD)",
      qcdDesc: "To make a QCD, reach out to your brokerage firm/financial advisor to initiate the transfer. They will generally request the following information and give you the option of either mailing the check to you or directly to us.",
      qcdAttn: "ATTN: Treasurer, SVDP Mother of Hope Conference",
      qcdNote: "A qualified charitable distribution (QCD) allows those 70½ years old or older to donate up to $111,000 from a traditional IRA instead of taking their required minimum distributions.",
      furnitureTitle: "Furniture & Clothing Donations",
      furnitureDesc:
        "We gratefully accept gently used furniture and clothing to help families in need. Please review our guidelines before donating:",
      weAccept: "We Accept",
      acceptList: [
        "Gently used clothing in good condition",
        "Small and medium furniture (chairs, tables, dressers)",
        "Household items and kitchenware",
        "Bedding and linens",
      ],
      weCannotAccept: "We Cannot Accept",
      cannotAcceptList: [
        "Torn, stained, or heavily worn clothing",
        "Mattresses or box springs",
        "Large appliances",
        "Broken or damaged items",
      ],
      coordNote:
        "Please contact us before dropping off large items so we can coordinate pickup or drop-off logistics.",
      whyTitle: "Why Your Gift Matters",
      whyDesc1:
        "One hundred percent of your donation to the Mother of Hope Conference goes directly to serving families in need in the Falls Church area. Your generosity allows us to provide emergency financial assistance, connect neighbors with essential resources, and carry out the Vincentian mission of charity.",
      whyDesc2:
        "The Society of St. Vincent de Paul is a 501(c)(3) nonprofit organization (pending). Your donation may be tax-deductible.",
      questionsAbout: "Questions about donating?",
      contactBtn: "Contact Us",
    },
    volunteer: {
      title: "Volunteer & Join",
      subtitle:
        "Answer the call to serve. The Society of St. Vincent de Paul welcomes all who wish to live the Gospel through direct, person-to-person service.",
      howToJoinTitle: "How to Join the Society",
      step1Title: "Attend a Meeting",
      step1Desc:
        "Come to one of our conference meetings to meet our members and learn about our work. Meetings are open to anyone interested in joining.",
      step2Title: "Become an Associate Member",
      step2Desc:
        "New members begin a 6-week period of formation to learn the Vincentian charism and way of service.",
      step3Title: "Take Your Active Membership",
      step3Desc:
        "After your formation period, you are formally welcomed as an active member of the Society of St. Vincent de Paul.",
      membershipLabel: "Membership requirements:",
      membershipNote:
        "Members of the Society are expected to be practicing Catholics in good standing. We ask members to attend regular conference meetings, participate in home visits or other works of charity, and commit to ongoing spiritual formation.",
      opportunitiesTitle: "Current Opportunities",
      opp1Title: "Home Visits",
      opp1Desc:
        "Our primary work: visit families in need in their homes to assess their situation and provide assistance with compassion and respect.",
      opp2Title: "Food Drives",
      opp2Desc:
        "Help organize and run food collection drives at our partner parishes to stock local food pantries.",
      opp3Title: "Fundraising Events",
      opp3Desc:
        "Assist with planning and executing fundraising events that support our charitable works throughout the year.",
      opp4Title: "Conference Administration",
      opp4Desc:
        "Lend your skills to the administrative needs of our growing conference — communications, record-keeping, and coordination.",
      spiritTitle: "The Vincentian Spirit",
      spiritDesc1:
        "St. Vincent de Paul (1581–1660) devoted his life to serving the poor of France, founding the Congregation of the Mission and the Daughters of Charity. In 1833, Blessed Frédéric Ozanam and a small group of students in Paris founded the Society bearing his name, inspired by his example.",
      spiritDesc2:
        "Today, the Society operates in more than 150 countries. As Vincentians, we are called not merely to give, but to encounter — to meet Christ in the face of those we serve.",
      ctaText: "Ready to learn more or attend your first meeting?",
      ctaBtn: "Get in Touch",
    },
    spiritualGrowth: {
      title: "Spiritual Growth",
      subtitle:
        "Reflections and prayers to deepen our Vincentian spirituality and grow in holiness through service.",
      prayersTitle: "Vincentian Prayers",
      prayer1Title: "Prayer Before Each Meeting",
      prayer1:
        "Lord Jesus, grant that I and all of the members of this Vincentian family may imitate your love for the most vulnerable by seeing in them your face and by serving them. May the spirit of Saint Vincent guide us in responding to the Gospel call to love our neighbor. Amen.",
      prayer2Title: "Prayer of Blessed Frédéric Ozanam",
      prayer2:
        "Lord, you gave me a little of everything. I did not deserve it by my work. But you wanted me to be the steward of your gifts for the poor. Do not let me be an unfaithful steward. Let me give, and give generously, because all that I have comes from you. Amen.",
      prayer3Title: "Prayer of St. Francis of Assisi",
      prayer3:
        "Lord, make me an instrument of your peace. Where there is hatred, let me sow love; where there is injury, pardon; where there is doubt, faith; where there is despair, hope; where there is darkness, light; where there is sadness, joy. O Divine Master, grant that I may not so much seek to be consoled as to console; to be understood as to understand; to be loved as to love. For it is in giving that we receive; it is in pardoning that we are pardoned; and it is in dying that we are born to eternal life. Amen.",
      reflectionTitle: "On Seeing Christ in Others",
      reflectionQuote:
        "“You will find out that Charity is a heavy burden to carry, heavier than the kettle of soup and the full basket. But you will keep your gentleness and your smile. It is not enough to give soup and bread. This the rich can do. You are the servant of the poor, always smiling and good-humored. They are your masters, terribly sensitive and exacting masters, you will see. And the uglier and the dirtier they will be, the more unjust and insulting, the more love you must give them. It is only for your love alone that the poor will forgive you the bread you give to them.”",
      reflectionAttrib: "— St. Vincent de Paul",
      memberReflectionsTitle: "Member Reflections",
      memberReflectionsDesc:
        "Member reflections and spiritual reading resources will be posted here.",
      memberReflectionsCheckBack: "Check back soon!",
      ruleTitle: "The Rule of the Society",
      ruleDesc1:
        "The Society of St. Vincent de Paul is guided by its Rule, which serves as our handbook for the spiritual and practical life of the conference. It covers our spirituality, works of charity, governance, and formation.",
      ruleDesc2:
        "New members are encouraged to read and reflect on the Rule as part of their formation. Copies are available through your conference president or through the SVdP USA website.",
    },
    contact: {
      title: "Contact Us",
      subtitle:
        "We’d love to hear from you. Send us a message and we’ll get back to you as soon as we can.",
      getInTouch: "Get in Touch",
      phone: "Phone",
      email: "Email",
      address: "Address",
      urgentNote: "For immediate assistance requests, please visit our",
      requestHelpLink: "Request Help",
      urgentNoteEnd: "page.",
      formName: "Your Name",
      formNamePlaceholder: "Full name",
      formEmail: "Email",
      formEmailPlaceholder: "your@email.com",
      formSubjectLabel: "Subject",
      formSubjectPlaceholder: "How can we help?",
      formMessage: "Message",
      formMessagePlaceholder: "Your message…",
      formSend: "Send Message",
      formSuccessTitle: "Message Ready to Send",
      formSuccessDesc:
        "Your message has been prepared in your email app. Please send the email to complete your submission.",
      formSendAnother: "Send Another Message",
    },
  },

  zh: {
    nav: {
      home: "首頁",
      requestHelp: "申請協助",
      donate: "捐款",
      volunteer: "志願服務",
      about: "關於聖雲先會",
      spiritualGrowth: "靈性成長",
      openMenu: "開啟導覽選單",
      closeMenu: "關閉導覽選單",
    },
    footer: {
      ourParishes: "我們的堂區",
      quickLinks: "快速連結",
      requestAssistance: "申請協助",
      donate: "捐款",
      volunteer: "志願服務",
      about: "關於聖雲先會",
      spiritualGrowth: "靈性成長",
      rights: (year: number) =>
        `© ${year} Society of St. Vincent de Paul, Mother of Hope Conference of Falls Church, Inc. 版權所有。`,
      developedBy: "網站設計：",
    },
    home: {
      heroLocation: "維吉尼亞州瀑布教堂",
      heroTitle: "希望之母分會",
      heroOrg: "聖雲先會",
      heroDesc:
        "以福音價值為本，我們以愛、尊重、公義與喜樂服事窮人中的基督——將瀑布教堂三個堂區的信眾凝聚，共同服務我們的鄰人。",
      requestAssistance: "申請協助",
      volunteer: "志願服務",
      donate: "捐款",
      callUs: "致電我們：",
      missionTitle: "我們的使命",
      missionQuote:
        "「以福音價值為本，以愛、尊重、公義與喜樂服事窮人中的基督，並透過祈禱、反思與行動，在聖善中不斷成長。」",
      missionDesc: (diocese: string) =>
        `希望之母分會是聖雲先會新成立的分會，將${diocese}轄下瀑布教堂三個堂區的社群連結在一起。`,
      parishTitle: "我們的堂區夥伴",
      parishDesc: "瀑布教堂三個堂區攜手合作，服務有需要的鄰人。",
      visitWebsite: "瀏覽網站",
      inPartnershipWith: (diocese: string) => `與${diocese}合作`,
      mapTitle: "我們服務的地區",
      mapDesc: "我們的分會主要服務維吉尼亞州瀑布教堂社區。",
      howWeServeTitle: "我們如何服務",
      howWeServeDesc: "找到適合您的資源與機會。",
      qlRequestHelp: "申請協助",
      qlRequestHelpDesc: "需要協助嗎？我們在此幫助堂區範圍內的人。",
      qlDonate: "捐款",
      qlDonateDesc: "透過財務或物質捐贈支持我們的工作。",
      qlVolunteer: "志願服務",
      qlVolunteerDesc: "加入本會，與其他聖雲先會員並肩服務。",
      qlAbout: "關於聖雲先會",
      qlAboutDesc: "了解本會的歷史與使命。",
      qlSpiritualGrowth: "靈性成長",
      qlSpiritualGrowthDesc: "聖雲先會員的反思與祈禱。",
      newsTitle: "最新消息",
      newsSubtitle: "來自我們分會的更新。",
      newsDate: "2026年4月",
      newsHeadline: "希望之母分會正式成立",
      newsBody:
        "我們很高興宣布，聖雲先會希望之母分會已於2026年4月在維吉尼亞聯邦州正式成立，並依據《國內稅收法》第501(c)(3)條款登記為非營利組織。我們也很高興告知，我們的分會會長和司庫均已選出，標誌著我們正式開始工作的重要里程碑。我們期待服務瀑布教堂地區的鄰人，並在聖雲先會的慈善精神中不斷成長。",
      ctaTitle: "加入我們，服務鄰人",
      ctaDesc:
        "無論您需要協助、想要捐款，或感到被召喚去志願服務，\n希望之母分會歡迎您。",
      becomeVincentian: "成為聖雲先會員",
      contactUs: "聯絡我們",
    },
    about: {
      title: "關於聖雲先會",
      subtitle:
        "一個有近200年服務窮人歷史的天主教平信徒組織，以及我們在維吉尼亞州瀑布教堂的本地分會。",
      historyTitle: "本會歷史",
      history1:
        "真福福雷德里克·奧扎南（1813–1853）是巴黎的一名年輕學生，因被同學挑戰要證明教會仍然關心窮人，於1833年召集一小群大學生開始探訪並服務巴黎的貧困人士。他們以聖雲先的名字命名這個初創的協會，受其謙遜、直接服務精神的啟發。",
      history2:
        "從這些卑微的開始，聖雲先會已成長為世界上最大的天主教平信徒慈善組織之一，在超過150個國家運作，每年透過直接的人對人服務——鄰里之間——服務數百萬人。",
      history3:
        "在美國，本會於1845年在密蘇里州聖路易斯成立。如今，美國聖雲先會涵蓋數千個本地分會和議會，在全國各地設有食物儲藏室、二手商店、無家可歸者庇護所和緊急援助計畫。",
      vincentianMissionTitle: "聖雲先使命",
      vincentianQuote:
        "「以福音價值為本，聖雲先會——一個天主教平信徒組織——引導男女攜手合作，透過向有需要和受苦的人提供人對人的服務，在靈性上不斷成長。」",
      vincentianQuoteAttrib: "——美國聖雲先會使命宣言",
      localConferenceTitle: "我們的本地分會",
      localConference1: (diocese: string) =>
        `希望之母分會是聖雲先會新成立的分會，在${diocese}轄下服務維吉尼亞州瀑布教堂地區。`,
      localConference2:
        "我們的分會獨特之處在於，它將瀑布教堂地區三個堂區的信眾聯合在一起，共同從事慈善工作：",
      localConference3:
        "透過連結這三個堂區，我們能夠整合資源，擴大服務範圍，在整個瀑布教堂地區服務更多有需要的鄰人。",
      learnMoreTitle: "進一步了解",
      svdpUsaTitle: "美國聖雲先會全國總會",
      svdpUsaDesc: "svdpusa.org——全國組織、最新消息與資源",
      svdpCouncilTitle: "阿靈頓聖雲先會議會",
      svdpCouncilDesc: "我們服務阿靈頓教區的地區議會",
    },
    requestHelp: {
      title: "申請協助",
      subtitle: "我們在此提供幫助。請填寫以下表格，我們將與您聯繫。",
      urgentNote: "如有緊急需求或疑問，請直接致電",
    },
    donate: {
      title: "捐款",
      quote:
        "你們給人，也必有給你們的；他們要把好的、壓緊、搖勻、滿溢的，傾倒在你們懷裡。",
      quoteRef: "——路加福音 6:38",
      financialTitle: "財務捐贈",
      onlineTitle: "線上捐款",
      onlineDesc:
        "線上捐款功能即將推出。在此期間，請考慮郵寄支票或透過您的堂區親自捐款。感謝您在我們籌備期間的耐心等待。",
      checkTitle: "支票捐款",
      checkDesc: "請將支票抬頭填寫為「SVDP Mother of Hope Conference」，並郵寄至：",
      checkAttn: "ATTN: Treasurer, SVDP Mother of Hope Conference",
      stockTitle: "股票捐贈",
      stockDesc: "如需捐贈股票，請聯絡您的顧問或證券公司辦理轉讓手續。交割指示如下：",
      stockAddressNote: "如需提供地址，請使用以下地址：",
      dafTitle: "從捐款人建議基金（DAF）捐款",
      dafDesc: "從DAF捐款時，將需要提供以下資訊：",
      dafNote: "由於我們是新成立的組織，我們的資訊可能無法在您的DAF系統中自動顯示。您可能需要手動輸入所有必要資訊。",
      qcdTitle: "IRA合格慈善分配（QCD）",
      qcdDesc: "辦理QCD時，請聯絡您的證券公司或財務顧問辦理轉帳手續。他們通常會要求以下資訊，並提供將支票郵寄給您或直接寄給我們的選項。",
      qcdAttn: "ATTN: Treasurer, SVDP Mother of Hope Conference",
      qcdNote: "合格慈善分配（QCD）允許70歲半或以上人士從傳統IRA捐出最多111,000美元，以代替領取所需最低分配額。",
      furnitureTitle: "家具與衣物捐贈",
      furnitureDesc:
        "我們感激地接受狀況良好的二手家具和衣物，以幫助有需要的家庭。捐贈前請查閱我們的指引：",
      weAccept: "我們接受",
      acceptList: [
        "狀況良好的衣物",
        "小型及中型家具（椅子、桌子、梳妝台）",
        "家居用品及廚具",
        "床上用品及床單",
      ],
      weCannotAccept: "我們無法接受",
      cannotAcceptList: [
        "破損、污漬或嚴重磨損的衣物",
        "床墊或彈簧床",
        "大型家電",
        "損壞或破損的物品",
      ],
      coordNote:
        "在送來大型物品前，請先與我們聯絡，以便安排取件或送貨事宜。",
      whyTitle: "您的捐贈為何重要",
      whyDesc1:
        "您對希望之母分會的每一分捐款，百分之百直接用於服務瀑布教堂地區有需要的家庭。您的慷慨允許我們提供緊急財務援助、將鄰人與重要資源連結，並實踐聖雲先會的慈善使命。",
      whyDesc2:
        "聖雲先會是一個501(c)(3)非營利組織（申請中）。您的捐款可能可以抵稅。",
      questionsAbout: "捐款有疑問？",
      contactBtn: "聯絡我們",
    },
    volunteer: {
      title: "志願服務與加入",
      subtitle:
        "回應服務的召喚。聖雲先會歡迎所有希望透過直接的人對人服務活出福音的人。",
      howToJoinTitle: "如何加入本會",
      step1Title: "出席會議",
      step1Desc:
        "來參加我們的分會會議，認識我們的會員並了解我們的工作。會議對所有有興趣加入的人開放。",
      step2Title: "成為準會員",
      step2Desc:
        "新會員將開始為期六週的培育期，學習聖雲先會的靈恩與服務方式。",
      step3Title: "成為正式會員",
      step3Desc:
        "培育期結束後，您將正式被歡迎成為聖雲先會的正式會員。",
      membershipLabel: "會員要求：",
      membershipNote:
        "本會會員應為盡責的實踐天主教徒。我們要求會員出席定期分會會議、參與家訪或其他慈善工作，並致力於持續的靈性培育。",
      opportunitiesTitle: "目前機會",
      opp1Title: "家訪",
      opp1Desc:
        "我們的主要工作：以慈悲與尊重的態度，前往有需要的家庭探訪，評估其狀況並提供協助。",
      opp2Title: "食物募集",
      opp2Desc:
        "協助在我們的夥伴堂區組織和進行食物募集活動，為本地食物儲藏室補充物資。",
      opp3Title: "籌款活動",
      opp3Desc:
        "協助規劃和執行全年支持我們慈善工作的籌款活動。",
      opp4Title: "分會行政",
      opp4Desc:
        "貢獻您的技能，支援我們成長中分會的行政需求——傳訊、記錄及協調工作。",
      spiritTitle: "聖雲先精神",
      spiritDesc1:
        "聖雲先（1581–1660）將一生奉獻於服務法國的窮人，創立了傳教修道會和愛德女修會。1833年，真福福雷德里克·奧扎南和一小群巴黎學生受其榜樣啟發，創立了以其命名的本會。",
      spiritDesc2:
        "今天，本會在超過150個國家運作。作為聖雲先會員，我們被召喚的不僅是給予，更是相遇——在我們所服務的人臉上看見基督。",
      ctaText: "準備好了解更多或出席您的第一次會議了嗎？",
      ctaBtn: "聯絡我們",
    },
    spiritualGrowth: {
      title: "靈性成長",
      subtitle:
        "深化聖雲先靈修的反思與祈禱，透過服務在聖善中成長。",
      prayersTitle: "聖雲先禱詞",
      prayer1Title: "每次會議前的祈禱",
      prayer1:
        "主耶穌，賜予我和這個聖雲先大家庭的所有成員，都能效法祢對最脆弱者的愛，在他們身上看見祢的面容並服事他們。願聖雲先的精神引導我們回應福音愛鄰人的召喚。阿們。",
      prayer2Title: "真福福雷德里克·奧扎南的祈禱",
      prayer2:
        "主啊，祢賜給了我一切。這不是我工作所得的。但祢希望我成為祢賜給窮人的恩賜的管家。不要讓我成為不忠實的管家。讓我給予，慷慨地給予，因為我所擁有的一切都來自祢。阿們。",
      prayer3Title: "聖方濟各的祈禱",
      prayer3:
        "主，使我成為祢和平的工具。在有仇恨的地方，讓我播下愛；在有傷害的地方，播下寬恕；在有懷疑的地方，播下信德；在有絕望的地方，播下希望；在有黑暗的地方，播下光明；在有悲傷的地方，播下喜樂。神聖的主師，請賜我不求被安慰，而去安慰人；不求被理解，而去理解人；不求被愛，而去愛人。因為在給予中，我們才能獲得；在寬恕中，我們才能被寬恕；在死亡中，我們才能獲得永生。阿們。",
      reflectionTitle: "在他人身上看見基督",
      reflectionQuote:
        "「您將發現愛德是沉重的擔子，比一鍋湯和滿籃子的食物還重。但您要保持您的溫柔和微笑。給湯和麵包是不夠的。富人也能做到這一點。您是窮人的僕人，永遠面帶微笑、心情愉快。他們是您的主人，是極其敏感和苛刻的主人，您將會看到。他們越醜陋和骯髒，越不公正和侮辱人，您就必須給予他們更多的愛。只有因為您的愛，窮人才會原諒您給他們的麵包。」",
      reflectionAttrib: "——聖雲先",
      memberReflectionsTitle: "會員反思",
      memberReflectionsDesc: "會員反思和靈性閱讀資源將在此刊登。",
      memberReflectionsCheckBack: "敬請期待！",
      ruleTitle: "本會會規",
      ruleDesc1:
        "聖雲先會以其會規為指導，作為我們分會靈性和實踐生活的手冊。它涵蓋我們的靈修、慈善工作、治理和培育。",
      ruleDesc2:
        "新會員被鼓勵閱讀和反思會規，作為其培育的一部分。副本可透過您的分會會長或美國聖雲先會網站取得。",
    },
    contact: {
      title: "聯絡我們",
      subtitle:
        "我們很樂意收到您的來信。請發送訊息給我們，我們將盡快回覆您。",
      getInTouch: "與我們聯繫",
      phone: "電話",
      email: "電子郵件",
      address: "地址",
      urgentNote: "如需立即協助，請瀏覽我們的",
      requestHelpLink: "申請協助",
      urgentNoteEnd: "頁面。",
      formName: "您的姓名",
      formNamePlaceholder: "全名",
      formEmail: "電子郵件",
      formEmailPlaceholder: "您的@電子郵件.com",
      formSubjectLabel: "主旨",
      formSubjectPlaceholder: "我們能如何幫助您？",
      formMessage: "訊息",
      formMessagePlaceholder: "您的訊息……",
      formSend: "發送訊息",
      formSuccessTitle: "訊息已準備好發送",
      formSuccessDesc:
        "您的訊息已在您的電子郵件應用程式中準備好。請發送電子郵件以完成您的提交。",
      formSendAnother: "發送另一條訊息",
    },
  },
}

export type Translations = typeof translations.en
