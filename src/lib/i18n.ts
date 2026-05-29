export type Locale = "en" | "es"

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
      qlRequestHelpDesc: "Need assistance? We’re here to help those in our parish boundaries.",
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
        "100% of your donation to the Mother of Hope Conference goes directly to serving families in need in the Falls Church area.",
      whyDesc1b:
        "Your generosity allows us to provide emergency financial assistance, connect neighbors with essential resources, and carry out the Vincentian mission of charity.",
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

  es: {
    nav: {
      home: "Inicio",
      requestHelp: "Solicitar Ayuda",
      donate: "Donar",
      volunteer: "Voluntariado",
      about: "Sobre SVdP",
      spiritualGrowth: "Crecimiento Espiritual",
      openMenu: "Abrir menú de navegación",
      closeMenu: "Cerrar menú de navegación",
    },
    footer: {
      ourParishes: "Nuestras Parroquias",
      quickLinks: "Enlaces Rápidos",
      requestAssistance: "Solicitar Asistencia",
      donate: "Donar",
      volunteer: "Voluntariado",
      about: "Sobre SVdP",
      spiritualGrowth: "Crecimiento Espiritual",
      rights: (year: number) =>
        `© ${year} Society of St. Vincent de Paul, Mother of Hope Conference of Falls Church, Inc. Todos los derechos reservados.`,
      developedBy: "Desarrollado por:",
    },
    home: {
      heroLocation: "Falls Church, Virginia",
      heroTitle: "Conferencia Madre de Esperanza",
      heroOrg: "Sociedad de San Vicente de Paúl",
      heroDesc:
        "Inspirados por los valores del Evangelio, servimos a Cristo en los pobres con amor, respeto, justicia y alegría — uniendo a los fieles de tres parroquias de Falls Church en servicio a nuestros vecinos.",
      requestAssistance: "Solicitar Asistencia",
      volunteer: "Voluntariado",
      donate: "Donar",
      callUs: "Llámenos:",
      missionTitle: "Nuestra Misión",
      missionQuote:
        "“Vivir el mensaje del Evangelio sirviendo a Cristo en los pobres con amor, respeto, justicia y alegría, y crecer en la santidad a través de la oración, la reflexión y la acción.”",
      missionDesc: (diocese: string) =>
        `La Conferencia Madre de Esperanza es una conferencia recién establecida de la Sociedad de San Vicente de Paúl, que une a las comunidades de tres parroquias de Falls Church bajo la ${diocese}.`,
      parishTitle: "Nuestra Alianza Parroquial",
      parishDesc:
        "Tres parroquias de Falls Church unidas en servicio a nuestros vecinos necesitados.",
      visitWebsite: "Visitar sitio web",
      inPartnershipWith: (diocese: string) => `En asociación con la ${diocese}`,
      mapTitle: "Dónde Servimos",
      mapDesc: "Nuestra conferencia sirve principalmente a la área de Falls Church, Virginia.",
      howWeServeTitle: "Cómo Servimos",
      howWeServeDesc: "Encuentre los recursos y oportunidades que son adecuados para usted.",
      qlRequestHelp: "Solicitar Ayuda",
      qlRequestHelpDesc:
        "¿Necesita asistencia? Estamos aquí para ayudar a quienes están dentro de los límites de nuestra parroquia.",
      qlDonate: "Donar",
      qlDonateDesc: "Apoye nuestro trabajo a través de donaciones financieras o materiales.",
      qlVolunteer: "Voluntariado",
      qlVolunteerDesc: "Uínase a la Sociedad y sirva junto a otros Vicentinos.",
      qlAbout: "Sobre SVdP",
      qlAboutDesc: "Conozca la historia y misión de nuestra Sociedad.",
      qlSpiritualGrowth: "Crecimiento Espiritual",
      qlSpiritualGrowthDesc: "Reflexiones y oraciones para los miembros Vicentinos.",
      newsTitle: "Últimas Noticias",
      newsSubtitle: "Actualizaciones de nuestra conferencia.",
      newsDate: "Abril 2026",
      newsHeadline: "Conferencia Madre de Esperanza Establecida Oficialmente",
      newsBody:
        "Nos complace anunciar que la Conferencia Madre de Esperanza de la Sociedad de San Vicente de Paúl ha sido establecida oficialmente en el Commonwealth de Virginia y registrada como organización sin fines de lucro bajo la Sección 501(c)(3) del Código de Rentas Internas, efectiva en abril de 2026. También nos complace compartir que nuestro Presidente y Tesorero de la Conferencia han sido elegidos, marcando un hito importante al comenzar nuestro trabajo en serio. Esperamos servir a nuestros vecinos en la área de Falls Church y crecer en el espíritu vicentino de caridad.",
      ctaTitle: "Uínase a Nosotros en el Servicio a Nuestros Vecinos",
      ctaDesc:
        "Ya sea que necesite asistencia, quiera donar, o sienta el llamado a ser voluntario, la Conferencia Madre de Esperanza le da la bienvenida.",
      becomeVincentian: "Convíártase en Vicentino",
      contactUs: "Contáctenos",
    },
    about: {
      title: "Sobre San Vicente de Paúl",
      subtitle:
        "Una organización católica laica con casi 200 años de servicio a los pobres, y nuestra conferencia local en Falls Church, Virginia.",
      historyTitle: "Historia de la Sociedad",
      history1:
        "El Beato Frédéric Ozanam (1813–1853) era un joven estudiante en París que, desafiado por un compañero de clase a demostrar que la Iglesia todavía se preocupaba por los pobres, reunió a un pequeño grupo de estudiantes universitarios en 1833 para comenzar a visitar y servir a los indigentes de París. Nombraron a su naciente Sociedad en honor a San Vicente de Paúl, cuyo espíritu de servicio humilde y directo los inspiró.",
      history2:
        "Desde esos humildes comienzos, la Sociedad de San Vicente de Paúl ha crecido hasta convertirse en una de las organizaciones caritativas católicas laicas más grandes del mundo, operando en más de 150 países y sirviendo a millones de personas cada año a través del servicio directo, persona a persona — siempre vecino a vecino.",
      history3:
        "En los Estados Unidos, la Sociedad fue establecida en 1845 en San Luis, Misuri. Hoy, la Sociedad de San Vicente de Paúl de los EE.UU. abarca miles de conferencias y consejos locales, operando despensas de alimentos, tiendas de segunda mano, refugios para personas sin hogar y programas de asistencia de emergencia en todo el país.",
      vincentianMissionTitle: "La Misión Vicentina",
      vincentianQuote:
        "“Inspirada por los valores del Evangelio, la Sociedad de San Vicente de Paúl, una organización católica laica, guía a hombres y mujeres a unirse para crecer espiritualmente ofreciendo servicio persona a persona a quienes están necesitados y sufriendo.”",
      vincentianQuoteAttrib:
        "— Declaración de Misión de la Sociedad de San Vicente de Paúl de los EE.UU.",
      localConferenceTitle: "Nuestra Conferencia Local",
      localConference1: (diocese: string) =>
        `La Conferencia Madre de Esperanza es una conferencia recién establecida de la Sociedad de San Vicente de Paúl, que sirve al área de Falls Church, Virginia bajo la ${diocese}.`,
      localConference2:
        "Nuestra conferencia es única en que une a los fieles de tres parroquias del área de Falls Church en una obra compartida de caridad:",
      localConference3:
        "Al vincular estas tres parroquias, podemos aunar nuestros recursos y ampliar nuestro alcance para servir a más vecinos necesitados en toda la área de Falls Church.",
      learnMoreTitle: "Más Información",
      svdpUsaTitle: "SVdP EE.UU. Nacional",
      svdpUsaDesc: "svdpusa.org — organización nacional, noticias y recursos",
      svdpCouncilTitle: "Consejo SVdP de Arlington",
      svdpCouncilDesc: "Nuestro consejo regional que sirve a la Diócesis de Arlington",
    },
    requestHelp: {
      title: "Solicitar Asistencia",
      subtitle:
        "Estamos aquí para ayudar. Por favor complete el formulario a continuación y nos comunicaremos con usted.",
      urgentNote: "Para necesidades urgentes o preguntas, llámenos directamente al",
    },
    donate: {
      title: "Donar",
      quote:
        "Den, y se les dará; se les echará en el regazo una medida buena, apretada, remecida y rebosante.",
      quoteRef: "— Lucas 6:38",
      financialTitle: "Donaciones Financieras",
      onlineTitle: "Donar en Línea",
      onlineDesc:
        "Las donaciones en línea estarán disponibles pronto. Mientras tanto, considere enviar un cheque por correo o donar en persona a través de su parroquia. Agradecemos su paciencia mientras nos organizamos.",
      checkTitle: "Donar con Cheque",
      checkDesc: "Por favor haga los cheques a nombre de SVDP Mother of Hope Conference y envíelos por correo a:",
      checkAttn: "ATTN: Treasurer, SVDP Mother of Hope Conference",
      stockTitle: "Donar Acciones",
      stockDesc: "Para donar acciones, comuníquese con su asesor/firma de corretaje para iniciar la transferencia. Las instrucciones de entrega son las siguientes:",
      stockAddressNote: "Si se solicita una dirección, utilice la siguiente:",
      dafTitle: "Donar desde un Fondo Asesorado por el Donante (DAF)",
      dafDesc: "Para donar desde un DAF, se solicitará la siguiente información:",
      dafNote: "Como somos una organización nueva, es posible que nuestra información no aparezca inicialmente en su DAF. Es posible que deba ingresar toda la información necesaria.",
      qcdTitle: "Distribución Caritativa Calificada de IRA (QCD)",
      qcdDesc: "Para realizar una QCD, comuníquese con su firma de corretaje/asesor financiero para iniciar la transferencia. Generalmente solicitarán la siguiente información y le darán la opción de enviar el cheque a usted o directamente a nosotros.",
      qcdAttn: "ATTN: Treasurer, SVDP Mother of Hope Conference",
      qcdNote: "Una distribución caritativa calificada (QCD) permite a personas de 70½ años o más donar hasta $111,000 desde una IRA tradicional en lugar de tomar sus distribuciones mínimas requeridas.",
      furnitureTitle: "Donaciones de Muebles y Ropa",
      furnitureDesc:
        "Aceptamos con gratitud muebles y ropa en buen estado para ayudar a las familias necesitadas. Por favor revise nuestras pautas antes de donar:",
      weAccept: "Aceptamos",
      acceptList: [
        "Ropa en buen estado",
        "Muebles pequeños y medianos (sillas, mesas, cómodas)",
        "Artículos del hogar y utensilios de cocina",
        "Ropa de cama y sábanas",
      ],
      weCannotAccept: "No Podemos Aceptar",
      cannotAcceptList: [
        "Ropa rasgada, manchada o muy desgastada",
        "Colchones o bases de cama",
        "Electrodomésticos grandes",
        "Artículos rotos o dañados",
      ],
      coordNote:
        "Por favor contáctenos antes de traer artículos grandes para coordinar la logística de recogida o entrega.",
      whyTitle: "Por Qué Su Donación Importa",
      whyDesc1:
        "El 100% de su donación a la Conferencia Madre de Esperanza va directamente a servir a las familias necesitadas en la área de Falls Church.",
      whyDesc1b:
        "Su generosidad nos permite brindar asistencia financiera de emergencia, conectar a los vecinos con recursos esenciales y llevar a cabo la misión vicentina de caridad.",
      whyDesc2:
        "La Sociedad de San Vicente de Paúl es una organización sin fines de lucro 501(c)(3) (pendiente). Su donación puede ser deducible de impuestos.",
      questionsAbout: "¿Preguntas sobre cómo donar?",
      contactBtn: "Contáctenos",
    },
    volunteer: {
      title: "Voluntariado y Membresía",
      subtitle:
        "Responda al llamado de servir. La Sociedad de San Vicente de Paúl da la bienvenida a todos los que deseen vivir el Evangelio a través del servicio directo, persona a persona.",
      howToJoinTitle: "Cómo Unirse a la Sociedad",
      step1Title: "Asistir a una Reunión",
      step1Desc:
        "Venga a una de nuestras reuniones de conferencia para conocer a nuestros miembros y aprender sobre nuestro trabajo. Las reuniones están abiertas a cualquier persona interesada en unirse.",
      step2Title: "Convertirse en Miembro Asociado",
      step2Desc:
        "Los nuevos miembros comienzan un período de formación de 6 semanas para aprender el carisma vicentino y el modo de servicio.",
      step3Title: "Tomar su Membresía Activa",
      step3Desc:
        "Después de su período de formación, es formalmente bienvenido como miembro activo de la Sociedad de San Vicente de Paúl.",
      membershipLabel: "Requisitos de membresía:",
      membershipNote:
        "Se espera que los miembros de la Sociedad sean católicos practicantes en buen estado. Pedimos a los miembros que asistan a las reuniones regulares de la conferencia, participen en visitas domiciliarias u otras obras de caridad, y se comprometan con la formación espiritual continua.",
      opportunitiesTitle: "Oportunidades Actuales",
      opp1Title: "Visitas Domiciliarias",
      opp1Desc:
        "Nuestro trabajo principal: visitar a familias necesitadas en sus hogares para evaluar su situación y brindar asistencia con compasión y respeto.",
      opp2Title: "Colectas de Alimentos",
      opp2Desc:
        "Ayude a organizar y realizar colectas de alimentos en nuestras parroquias asociadas para abastecer las despensas locales.",
      opp3Title: "Eventos de Recaudación de Fondos",
      opp3Desc:
        "Ayude con la planificación y ejecución de eventos de recaudación de fondos que apoyen nuestras obras caritativas durante todo el año.",
      opp4Title: "Administración de la Conferencia",
      opp4Desc:
        "Aporte sus habilidades a las necesidades administrativas de nuestra conferencia en crecimiento — comunicaciones, mantenimiento de registros y coordinación.",
      spiritTitle: "El Espíritu Vicentino",
      spiritDesc1:
        "San Vicente de Paúl (1581–1660) dedicó su vida a servir a los pobres de Francia, fundando la Congregación de la Misión y las Hijas de la Caridad. En 1833, el Beato Frédéric Ozanam y un pequeño grupo de estudiantes en París fundaron la Sociedad que lleva su nombre, inspirados por su ejemplo.",
      spiritDesc2:
        "Hoy, la Sociedad opera en más de 150 países. Como Vicentinos, estamos llamados no solo a dar, sino a encontrarnos — a ver el rostro de Cristo en aquellos a quienes servimos.",
      ctaText: "¿Listo para aprender más o asistir a su primera reunión?",
      ctaBtn: "Contáctenos",
    },
    spiritualGrowth: {
      title: "Crecimiento Espiritual",
      subtitle:
        "Reflexiones y oraciones para profundizar nuestra espiritualidad vicentina y crecer en la santidad a través del servicio.",
      prayersTitle: "Oraciones Vicentinas",
      prayer1Title: "Oración Antes de Cada Reunión",
      prayer1:
        "Señor Jesús, concede que yo y todos los miembros de esta familia vicentina imitemos tu amor por los más vulnerables, viéndote en ellos y sirviéndoles. Que el espíritu de San Vicente nos guíe al responder al llamado del Evangelio de amar al prójimo. Amén.",
      prayer2Title: "Oración del Beato Frédéric Ozanam",
      prayer2:
        "Señor, me diste un poco de todo. No lo merecí por mi trabajo. Pero quisiste que fuera el administrador de tus dones para los pobres. No me dejes ser un administrador infiel. Déjame dar, y dar generosamente, porque todo lo que tengo viene de ti. Amén.",
      prayer3Title: "Oración de San Francisco de Asís",
      prayer3:
        "Señor, hazme un instrumento de tu paz. Donde haya odio, que yo siembre amor; donde haya ofensa, perdón; donde haya duda, fe; donde haya desesperación, esperanza; donde haya tinieblas, luz; donde haya tristeza, alegría. Oh Divino Maestro, concédeme que no busque tanto ser consolado como consolar; ser comprendido como comprender; ser amado como amar. Porque dando es como se recibe; perdonando es como se es perdonado; y muriendo es como se resucita a la vida eterna. Amén.",
      reflectionTitle: "Ver a Cristo en los Demás",
      reflectionQuote:
        "“Descubrirás que la Caridad es una carga pesada de llevar, más pesada que el caldero de sopa y la canasta llena. Pero mantendrás tu gentileza y tu sonrisa. No basta con dar sopa y pan. Eso lo pueden hacer los ricos. Tú eres el servidor de los pobres, siempre sonriente y de buen humor. Ellos son tus amos, amos terriblemente sensibles y exigentes, ya lo verás. Y cuanto más feos y sucios sean, más injustos e insultantes, más amor debes darles. Solo por tu amor los pobres te perdonarán el pan que les das.”",
      reflectionAttrib: "— San Vicente de Paúl",
      memberReflectionsTitle: "Reflexiones de los Miembros",
      memberReflectionsDesc:
        "Las reflexiones de los miembros y los recursos de lectura espiritual se publicarán aquí.",
      memberReflectionsCheckBack: "¡Vuelva pronto!",
      ruleTitle: "La Regla de la Sociedad",
      ruleDesc1:
        "La Sociedad de San Vicente de Paúl se guía por su Regla, que sirve como nuestro manual para la vida espiritual y práctica de la conferencia. Cubre nuestra espiritualidad, obras de caridad, gobierno y formación.",
      ruleDesc2:
        "Se anima a los nuevos miembros a leer y reflexionar sobre la Regla como parte de su formación. Las copias están disponibles a través del presidente de su conferencia o a través del sitio web de SVdP EE.UU.",
    },
    contact: {
      title: "Contáctenos",
      subtitle:
        "Nos encantaría saber de usted. Envíenos un mensaje y nos pondremos en contacto con usted lo antes posible.",
      getInTouch: "Póngase en Contacto",
      phone: "Teléfono",
      email: "Correo Electrónico",
      address: "Dirección",
      urgentNote: "Para solicitudes de asistencia inmediata, visite nuestra página de",
      requestHelpLink: "Solicitar Ayuda",
      urgentNoteEnd: ".",
      formName: "Su Nombre",
      formNamePlaceholder: "Nombre completo",
      formEmail: "Correo Electrónico",
      formEmailPlaceholder: "su@correo.com",
      formSubjectLabel: "Asunto",
      formSubjectPlaceholder: "¿Cómo podemos ayudar?",
      formMessage: "Mensaje",
      formMessagePlaceholder: "Su mensaje…",
      formSend: "Enviar Mensaje",
      formSuccessTitle: "Mensaje Listo para Enviar",
      formSuccessDesc:
        "Su mensaje ha sido preparado en su aplicación de correo electrónico. Por favor envíe el correo electrónico para completar su envío.",
      formSendAnother: "Enviar Otro Mensaje",
    },
  },
}

export type Translations = typeof translations.en
