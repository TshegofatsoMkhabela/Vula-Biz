import type { Language } from '@/i18n/strings'

interface ModuleStep {
  step: number
  title: { en: string; zu: string }
  content: { en: string; zu: string }
  actionItem: { en: string; zu: string }
}

export interface BilingualModule {
  id: string
  challengeTag: string
  icon: string
  title: { en: string; zu: string }
  description: { en: string; zu: string }
  steps: ModuleStep[]
}

export const modulesData: BilingualModule[] = [
  {
    id: "moola-management",
    challengeTag: "cash-flow",
    icon: "CashIcon",
    title: {
      en: "Managing the Moola",
      zu: "Ukuphatha Imali",
    },
    description: {
      en: "Keep your business cash separate from your personal cash.",
      zu: "Gcina imali yebhizinisi ihlukene nemali yakho yomuntu siqu.",
    },
    steps: [
      {
        step: 1,
        title: {
          en: "The Golden Rule of Spaza Cash",
          zu: "Umthetho Wokuqala Wemali Yespaza",
        },
        content: {
          en: "Never mix the till money with your taxi fare. Open a separate low-cost account (like Tymebank or Capitec) purely for business stock. If you eat the profits today, you have nothing to sell tomorrow.",
          zu: "Ungaze uxube imali yethilisi nomali yokugibela itekisi. Vula i-akhawunti encane ehlukile (njengo-Tymebank noma Capitec) ngokuphelele yezimpahla zebhizinisi. Uma udla inzuzo namuhla, ngeke ube nalutho oluthengiswayo kusasa.",
        },
        actionItem: {
          en: "🏦 OPEN A BUSINESS BANK ACCOUNT — TODAY\n\nHere's exactly what to do:\n\n1. Go to Capitec or TymeBank (no monthly fees for basic accounts).\n2. Tell them: 'I need an account for my small business.'\n3. You'll need: your South African ID / green barcoded ID, proof of address (a utility bill or Telkom letter works).\n\n💡 WHY SARS CARES ABOUT THIS:\nSARS (South African Revenue Service) requires informal traders to keep personal and business money separate. If you ever register for a tax number, mixed accounts make it nearly impossible to prove what your real income was — and SARS will assume the worst.\n\n📋 RSA LAW NOTE:\nEven as an unregistered sole trader, you are legally required to declare income above R91,250/year (2024/25 tax year). Keeping a dedicated business account makes this easy.\n\n👉 Do this before the end of today.",
          zu: "🏦 VULA I-AKHAWUNTI YASEBHANGE YEBHIZINISI — NAMUHLA\n\nNansi into oyenzayo:\n\n1. Iya ku-Capitec noma ku-TymeBank (akukho izikhwama zanyanga zama-akhawunti asejwayelekile).\n2. Batshele: 'Ngidinga i-akhawunti yebhizinisi lami elincane.'\n3. Uzodinga: Ikhadi lakho le-ID yaseNingizimu Afrika, ubufakazi bendawo yokuhlala (isicelo sikagesi noma incwadi ye-Telkom kusebenza).\n\n💡 KUNGANI I-SARS IZIKHATHAZA NGALOKHU:\nI-SARS (iNkonzo Yentela yaseNingizimu Afrika) idinga ukuthi abathengisi abangabhalisile bagcine imali yomuntu siqu nemali yebhizinisi ihlukene. Uma ungazibhalisi ngenombolo yentela, ama-akhawunti axubene awukwazi ukuphendula ukuthi imali yakho yayingakanani — i-SARS izokwenzela emasini.\n\n📋 UMTHETHO WASE-RSA:\nNakuba ungumthengisi obhalisile, umthetho ukudinga ukubika imali ngaphezu kwe-R91,250/unyaka (unyaka wentelo we-2024/25). I-akhawunti yebhizinisi eyodwa kwenza lokhu kulunge kalula.\n\n👉 Yenza lokhu ngaphambi kwezinga losuku lwamuhla.",
        },
      },
      {
        step: 2,
        title: {
          en: "Tracking the Rands",
          zu: "Ukulandela Amarandi",
        },
        content: {
          en: "You don't need fancy software. An exercise book works. Every night, write down: 'Money In' (Sales) and 'Money Out' (Stock, Electricity, Airtime). The difference is your actual profit.",
          zu: "Awudingi isoftware emnandi. Ibhuku lokusebenza lisebenza. Ebusuku bonke, bhala: 'Imali Engena' (Ukuthengisa) ne-'Imali Ephuma' (Izimpahla, Ugesi, Isikhathi Somoya). Umehluko wumzila wakho wenzuzo.",
        },
        actionItem: {
          en: "📒 SET UP YOUR SIMPLE BUSINESS BOOK\n\nEach night, write these 3 things:\n   Date | Money IN (Sales) | Money OUT (Stock + Costs) | Profit (IN minus OUT)\n\n💡 WHY THIS MATTERS FOR SARS:\nIf SARS ever contacts you (especially after registering as a business), your records are your proof. Without them, they use 'estimated assessments' — and they never estimate in your favour.\n\n🏢 IF YOU REGISTER WITH CIPC:\nOnce you register your business with the Companies and Intellectual Property Commission (CIPC) — even as a sole proprietor or Pty Ltd — SARS requires you to file annual tax returns. Clean records = less stress and less tax owed.\n\n📋 FREE TOOLS FOR RSA BUSINESSES:\n• SARS eFiling (sarsefiling.gov.za) — free tax submissions online\n• CIPC Bizportal (bizportal.gov.za) — business registration from R175\n\n👉 Start tonight. Even a 5-minute daily record will change your business.",
          zu: "📒 LUNGISA IBHUKU LAKHO ELILULA LEBHIZINISI\n\nEbusuku ngalinye, bhala lezi zinto ezi-3:\n   Usuku | Imali ENGENA (Ukuthengisa) | Imali EPHUMA (Izimpahla + Izindleko) | Inzuzo (ENGENA isusa EPHUMA)\n\n💡 KUNGANI LOKHU KUBALULEKILE KU-SARS:\nUma i-SARS ikwethembisa (ikakhulukazi ngemuva kokubhalisa ibhizinisi), amarekhodi akho ubufakazi bakho. Ngaphandle kwawo, basebenzisa 'izinkomba ezilinganisiwe' — futhi abakaze balinganise ngokuqondene nawe.\n\n🏢 UMA UBHALISA KU-CIPC:\nOnce ubhalisa ibhizinisi na-Commissioned eZinkampani nokuLungiswa kweMfanelo (CIPC) — noma njengomnikazi oyedwa noma Pty Ltd — i-SARS idinga ukuthi ufake izikhwama zentela zaminyaka yonke. Amarekhodi ahlanzekile = ukucindezeleka okuncane kanye nentela encane okufanele ikhokhwe.\n\n📋 AMATHULUZI EMAHALA E-RSA:\n• I-SARS eFiling (sarsefiling.gov.za) — ukufaka intela mahala ku-inthanethi\n• I-CIPC Bizportal (bizportal.gov.za) — ukubhalisa ibhizinisi kusukela ku-R175\n\n👉 Qala namshana. Ngisho irekhodi lamaminithi ama-5 lansuku zonke lizoshintsha ibhizinisi lakho.",
        },
      },
    ],
  },
  {
    id: "whatsapp-hustle",
    challengeTag: "customers",
    icon: "PhoneIcon",
    title: {
      en: "The WhatsApp Hustle",
      zu: "Ukusebenzisa i-WhatsApp",
    },
    description: {
      en: "Turn your contacts into paying customers.",
      zu: "Phendula oxhumana nabo ube ngabathengi abakhokhayo.",
    },
    steps: [
      {
        step: 1,
        title: {
          en: "WhatsApp Business Setup",
          zu: "Ukusetha i-WhatsApp Business",
        },
        content: {
          en: "Standard WhatsApp is for chatting; WhatsApp Business is for selling. Convert your app. Set up an auto-reply for when you are closed and create a catalog for your combo deals (e.g., Kota + Cold Drink).",
          zu: "I-WhatsApp ejwayelekile ingenxa yokukhuluma; i-WhatsApp Business ingenxa yokuthengisa. Guqula i-app yakho. Setha impendulo yokuzenzela lapho uvaliwe futhi dala iklama lezivumelwano zakho (isb. Kota + Isiphuzo Esipholile).",
        },
        actionItem: {
          en: "📱 SET UP WHATSAPP BUSINESS — RIGHT NOW\n\nStep 1: Download 'WhatsApp Business' from the Play Store (free).\nStep 2: Set your Business Name (use your trading name — the one you want customers to know).\nStep 3: Add your business category, address, and a short description.\nStep 4: Create an auto-reply: 'Hi! We're closed now but open 7am–7pm. Call 0XX XXX XXXX for emergencies.'\n\n💡 TRADING NAME vs. CIPC REGISTERED NAME:\nYou can trade under any name informally, but if you register with CIPC (Companies and Intellectual Property Commission), your registered name has legal protection. No one else in SA can use it.\n\n📋 COST TO REGISTER YOUR BUSINESS NAME AT CIPC:\n• Name reservation: R50\n• Sole Proprietor registration: Free (just your SA ID)\n• Pty Ltd registration: R175 via bizportal.gov.za\n\n💡 BONUS TIP:\nOnce you have a CIPC number, you can apply for industry-specific trading permits from your local municipality — like a Hawker's Permit or Food Business Licence — using that registration as proof you're a legitimate business.\n\n👉 Download WhatsApp Business now.",
          zu: "📱 SETHA I-WHATSAPP BUSINESS — MANJE ANJE\n\nIsigaba 1: Landa i-'WhatsApp Business' ku-Play Store (mahala).\nIsigaba 2: Setha Igama Lebhizinisi Lakho (sebenzisa igama lakho lokuhweba — lelo ofuna abathengi balikwazi).\nIsigaba 3: Engeza uhlobo lwakho lwebhizinisi, ikheli, nencazelo emfushane.\nIsigaba 4: Dala impendulo yokuzenzela: 'Sawubona! Sivaliwe manje kodwa sivula ku-7am–7pm. Shayela 0XX XXX XXXX ezimweni zesiphuthuma.'\n\n💡 IGAMA LOKUHWEBA vs. IGAMA ELIBHALISWE KU-CIPC:\nUngahweba ngegama liphilina, kodwa uma ubhalisa ku-CIPC (iKhomishini yeZinkampani nokuLungiswa kweMfanelo), igama lakho elibhaliswe linesivikelo somthetho. Akekho omunye e-SA ongalusebenzisa.\n\n📋 IZINDLEKO ZOKUBHALISA IGAMA LEBHIZINISI LAKHO KU-CIPC:\n• Ukubamba igama: R50\n• Ukubhalisa komnikazi oyedwa: Mahala (ikhadi lakho le-SA ID kuphela)\n• Ukubhalisa kwe-Pty Ltd: R175 nge-bizportal.gov.za\n\n💡 ISELULEKO ESIMANGAZAYO:\nOnce unekhodi le-CIPC, ungafaka isicelo samalayisensi okuhweba akhethekile kwezimboni kumasipala wakho wasekhaya — njengeLayisensi yoMthengisi noma iLayisensi Yokudla Ebhizinisini — usebenzisa lokho kubhalisa njengobufakazi bokuthi ungumthengisi osemthethweni.\n\n👉 Landa i-WhatsApp Business manje.",
        },
      },
      {
        step: 2,
        title: {
          en: "Status Updates That Sell",
          zu: "Izibuyekezo Zesimo Ezithengisayo",
        },
        content: {
          en: "Post your fresh stock or daily specials on your Status around 11:30 AM (just before lunchtime) and 4:30 PM (before people commute home). Clear, bright pictures work best. Always include the price.",
          zu: "Faka izimpahla zakho ezintsha noma izikhethelo zansuku zonke ku-Status yakho ngehora le-11:30 ekuseni (ngaphambi kwesikhathi sokuphuzisa) ne-4:30 ntambama (ngaphambi kokubuya kwabantu ekhaya). Izithombe ezisobala, ezikhanyayo zisebenza kakhulu. Hlala ufaka intengo.",
        },
        actionItem: {
          en: "📸 POST YOUR FIRST STATUS SPECIAL\n\nDo this RIGHT NOW:\n1. Take a clear photo of your best product.\n2. Write the price clearly in the caption (e.g., 'Kota R20 — freshly made!')\n3. Post it to your WhatsApp Status.\n\n🕑 BEST TIMES TO POST IN RSA:\n• 11:30 AM — workers on lunch break are browsing\n• 4:30 PM — commuters on taxis are scrolling\n• 7:00 PM — people planning tonight's meal\n\n💼 GROWING INTO E-COMMERCE:\nOnce you have regular WhatsApp customers, you're eligible for the SEDA (Small Enterprise Development Agency) digital trading programme — free business coaching and access to Spaza-to-market platforms.\n\n📋 INCOME TAX NOTE:\nAll income you earn — including from WhatsApp sales — is taxable once you exceed R91,250/year. Keep records of your sales messages and EFT proofs as your 'income log' for SARS.\n\n👉 Post your special now. Don't overthink it.",
          zu: "📸 FAKA IZIKHETHELO ZAKHO ZOKUQALA KU-STATUS\n\nYenza lokhu MANJE ANJE:\n1. Thatha isithombe esisobala sokhiqizo lwakho oluhle kakhulu.\n2. Bhala intengo ngokucacile kuncwadi (isb. 'Kota R20 — yenziwe manje!')\n3. Yifake ku-WhatsApp Status yakho.\n\n🕑 IZIKHATHI EZINHLE ZOKUFAKA KU-RSA:\n• 11:30 AM — abasebenzi baphephula ngezikhathi zokuphumula\n• 4:30 PM — abagibeli ematekisi bayageleza\n• 7:00 PM — abantu balungiselela isidlo sangobusuku\n\n💼 UKUKHULA KU-E-COMMERCE:\nOnce unaabathengi be-WhatsApp abasemthethweni, unelungelo lokufikelela uhlelo lwedijithali lwe-SEDA (iSikhungo Sokukhula Kwamabhizinisi Amancane) — uqeqesho lwebhizinisi olumahlala kanye nokufikelela kuzikhungo ze-Spaza-to-market.\n\n📋 ISELULEKO SENTELA YEMALI:\nYonke imali oyizuzayo — kuhlanganisa nezokuthengisa kwe-WhatsApp — iyathelelwa uma udlula i-R91,250/unyaka. Gcina amarekhodi okukhuluma kwakho kokuthengisa kanye nobufakazi be-EFT njenge-'irekhodi lemali yakho' ye-SARS.\n\n👉 Faka izikhethelo zakho manje. Ungacabanga kakhulu.",
        },
      },
    ],
  },
  {
    id: "load-shedding-survival",
    challengeTag: "load-shedding",
    icon: "ZapOffIcon",
    title: {
      en: "Beating Load Shedding",
      zu: "Ukuqoba Ukugunyazwa Kukagesi",
    },
    description: {
      en: "Keep the doors open when Eskom turns the lights off.",
      zu: "Gcina amasango evulekile lapho i-Eskom icisha izibani.",
    },
    steps: [
      {
        step: 1,
        title: {
          en: "Cold Chain Management",
          zu: "Ukuphatha Isilulu Esipholile",
        },
        content: {
          en: "If you sell meat or dairy, keep the fridge closed during cuts. Freeze 2-liter bottles of water overnight; leave them in the fridge during the day to act as ice packs when the power drops.",
          zu: "Uma uthengisa inyama noma imikhiqizo yobisi, gcina ifiriji livaliwe ngesikhathi sokugunyazwa. Qandisa amabhodlela amanzi amali-2 ubusuku bonke; awashiye efiriji emini ukuze asebenze njengamapaki ayiqhwa lapho ugesi ususwa.",
        },
        actionItem: {
          en: "❄️ PROTECT YOUR COLD STOCK — FOOD SAFETY & THE LAW\n\nDo this today:\n1. Freeze 4 x 2-litre bottles of water overnight.\n2. During load shedding, place frozen bottles INSIDE the fridge — keep the door closed.\n3. A full, closed fridge can stay cold for 4+ hours safely.\n\n🏛️ RSA FOOD SAFETY REGULATIONS YOU MUST KNOW:\nUnder the Foodstuffs Act (Act 54 of 1972) and the Consumer Protection Act, you are legally responsible for food safety. If meat or dairy is spoiled and causes harm, you can be held liable.\n\n📋 TRADING PERMITS & INSPECTIONS:\n• Your local municipality's Environmental Health Officer (EHO) can inspect your premises at any time.\n• A valid Certificate of Acceptability (CoA) is REQUIRED by law if you sell, prepare, or store food commercially — even as a spaza.\n• Apply for your CoA at your nearest local municipality office. Cost: varies by municipality (often free for micro-enterprises).\n\n💡 TAX TIP:\nSpoiled stock is a deductible business loss for SARS income tax purposes — but ONLY if you have records. Photograph spoiled stock with a date stamp before you dispose of it.\n\n👉 Freeze your bottles tonight.",
          zu: "❄️ VIKELA IZIMPAHLA ZAKHO EZIPHOLILE — UKUPHEPHA KOKUDLA NOMTHETHO\n\nYenza lokhu namuhla:\n1. Qandisa amabhodlela amanyi ayi-4 x 2-litre ubusuku.\n2. Ngesikhathi sokugunyazwa, beka amabhodlela aqandisiwe NGAPHAKATHI efiriji — gcina umnyango uvaliwe.\n3. Ifiriji eligcwele, elivaliwe lingaba pholile amahora ayi-4+ ngokuphepha.\n\n🏛️ IMIGOMO YOKUPHEPHA KOKUDLA E-RSA OKUFANELE UYAZI:\nNgaphansi koMthetho Wezinto Zakudla (uMthetho 54 ka-1972) noMthetho Wokukhusela uMthengi, umthetho ukudinga ukuthi uphephe ukudla. Uma inyama noma imikhiqizo yobisi ibiluke futhi idalule ukulimala, ungabanjwa ube neecala.\n\n📋 AMALAYISENSI OKUHWEBA NEZIHLOLOKHUSELO:\n• Isosha Lezempilo Lendawo (EHO) lemasipala lakho lingahlola izindawo zakho nganoma yisiphi isikhathi.\n• Isitifiketi Esanelisekayo (CoA) SIDINGEKA ngumthetho uma uthengisa, ulungiselela, noma ugcina ukudla ngokwezohwebo — noma njengespaza.\n• Faka isicelo se-CoA yakho ehhovisi lemasipala lakho eliduze kakhulu. Izindleko: ziyahluka ngomasipala (kaningi zimahala kwamabhizinisi amancane).\n\n💡 ISELULEKO SENTELA:\nIzimpahla ezibolile ziyinkokhelo yezindleko zebhizinisi yokuhwesha ngezinhloso zentela yemali ye-SARS — kodwa KUPHELA uma uneamarekhodi. Thatha isithombe sezimpahla ezibolile esinamadatha ngaphambi kokuzala.\n\n👉 Qandisa amabhodlela akho namshana.",
        },
      },
      {
        step: 2,
        title: {
          en: "Alternative Power on a Budget",
          zu: "Ugesi Omunye Ngemali Encane",
        },
        content: {
          en: "Forget expensive generators for now. Invest in a 12V battery and LED strip lights so customers feel safe coming in at night. Keep a portable card machine fully charged at all times.",
          zu: "Khohlwa ngemijini ebizayo okwamanje. Tshalela ibhethri le-12V nezibani ze-LED ukuze abathengi bazizwe bephephile. Gcina umshini wamakhadi othwalekayo ugcwele isikhathi sonke.",
        },
        actionItem: {
          en: "🔋 BUILD YOUR BACKUP POWER SETUP\n\nBudget-friendly load shedding kit:\n• 12V deep cycle battery: ~R800–R1,200 (Makro/Builders Warehouse)\n• LED strip lights (12V): ~R150\n• Portable card machine (Yoco / iKhokha): ~R399 one-time, then 2.75% per swipe\n\n💳 WHY A CARD MACHINE IS A TAX TOOL TOO:\nEvery card transaction is automatically recorded. This creates a clean income record SARS can verify — and gives you proof of turnover if you apply for a small business grant or SEFA (Small Enterprise Finance Agency) loan.\n\n🏛️ CIPC & BUSINESS GRANTS:\nTo access DTI (Department of Trade and Industry) funding or SEFA micro-loans as a back-up power purchase, you often need:\n1. CIPC business registration\n2. SARS tax compliance status (TCS — Tax Clearance Status, now called a PIN)\n3. Business bank account (in the business name)\n\n📋 GET A FREE TAX CLEARANCE PIN:\nLog onto SARS eFiling → 'Tax Compliance Status' → Request a PIN. This is free and proves to banks and government that you owe SARS nothing.\n\n👉 Check your card machine is fully charged — right now.",
          zu: "🔋 AKHA UHLELO LWAKHO LWAMANDLA OKUGCINA\n\nIkhithi yokegunyazwa enethambo elimnandi:\n• Ibhethri elithuthuka kancane le-12V: ~R800–R1,200 (Makro/Builders Warehouse)\n• Izibani ze-LED (12V): ~R150\n• Umshini wamakhadi othwalekayo (Yoco / iKhokha): ~R399 kanye, bese u-2.75% ngokuxhwibitsha\n\n💳 KUNGANI UMSHINI WAMAKHADI NAWO EKETHULUZI LENTELA:\nYonke intengiselwano yamakhadi irekhodi ngokuzenzela. Lokhu kudala irekhodi lemali eliblanzekile i-SARS engaliveza — futhi likunike ubufakazi bokufika kwemali uma ufaka isicelo selehlelo lezezimali zamabhizinisi amancane noma semaliphemu ye-SEFA (iSikhungo Sezezimali Zamabhizinisi Amancane).\n\n🏛️ I-CIPC NEZIBONELELO ZEBHIZINISI:\nUkufikelela uxhaso lwe-DTI (uMnyango Wezehlwebo Nendzabu nezeSinyelela) noma amaliphemu amancane e-SEFA njengothenga amandla akuhlosile, kaningi udinga:\n1. Ukubhaliswa kweBhizinisi ku-CIPC\n2. Isimo sentela ye-SARS (TCS — Isimo Sokuhlanzwa Kwentela, manje kubizwa i-PIN)\n3. I-akhawunti yasebhange yebhizinisi (egameni lebhizinisi)\n\n📋 THOLA I-PIN YOKUHLANZWA KWENTELA EMAHALA:\nNgenela i-SARS eFiling → 'Isimo Sentela' → Cela i-PIN. Lokhu kumahala futhi kubonisa amabhange kahulumeni ukuthi awukweleti i-SARS lutho.\n\n👉 Hlola ukuthi umshini wakho wamakhadi ugcwele — manje anje.",
        },
      },
    ],
  },
  {
    id: "stock-fam",
    challengeTag: "pricing",
    icon: "HandshakeIcon",
    title: {
      en: "Supplier Relationships",
      zu: "Izimfuyo Nabahlinzeki",
    },
    description: {
      en: "How to negotiate and buy stock smartly.",
      zu: "Ukuxoxisana nothenga izimpahla ngokuhlakanipha.",
    },
    steps: [
      {
        step: 1,
        title: {
          en: "Buy in Bulk, Sell in Units",
          zu: "Thenga Ngesikhulukhu, Thengisa Ngezingxenye",
        },
        content: {
          en: "Group up with two other local Spazas. Go to the wholesaler together to buy pallets of maize meal or sugar. Split the bulk load to get the cheapest unit price, maximizing your profit margin.",
          zu: "Hlangana nezinye iz-Spaza zomakhelwane ezimbili. Yani kumshumayeleli ndawonye ukuthenga amaphalede ofulawa wombila noma ushukela. Hlukahlukanisa umthwalo omkhulu ukuze uthole intengo encane kakhulu yayonke into, ukhulise umkhawulo wakho wenzuzo.",
        },
        actionItem: {
          en: "🤝 START A BUYING COLLECTIVE — HERE'S HOW\n\nThis week's action plan:\n1. Identify 2 or 3 nearby spaza owners you trust.\n2. Agree on one bulk order item (start small: cooking oil, maize meal, or sugar).\n3. Pool your cash and send ONE person to the wholesaler.\n4. Split the stock proportionally when they return.\n\n🏢 FORMALISING YOUR BUYING GROUP WITH CIPC:\nIf your group wants to open a joint bank account or apply for supplier credit, you'll need to register as:\n• A Cooperative (Co-op) — registered via CIPC for R125. Cooperatives get preferential access to government tenders and SEDA support.\n• OR a Pty Ltd — R175 via bizportal.gov.za — if you want a formal business entity.\n\n💡 SARS & CO-OP INCOME TAX:\nRegistered cooperatives in RSA enjoy a lower tax rate (starts at 27%) and access to Small Business Corporation tax relief — which can drop your effective rate to zero if annual turnover is under R335,000.\n\n📋 INDUSTRY PERMITS TO CHECK:\n• Wholesale & Retail: No formal licence needed at spaza level, BUT operating within a township designated by your municipality may require a Hawker's Permit or Informal Trading Permit.\n• Food handling: Certificate of Acceptability (CoA) from the local Environmental Health Officer.\n• Liquor: A Liquor Licence from your provincial Liquor Board is required BEFORE selling any alcohol — operating without one is a criminal offence in all RSA provinces.\n\n🌍 APPLY ONLINE:\n• bizportal.gov.za (CIPC registration)\n• sarsefiling.gov.za (tax number + compliance PIN)\n• seda.org.za (SEDA — free small business coaching)\n\n👉 Message your nearest spaza neighbour today.",
          zu: "🤝 QALA INHLANGANO YOKUTHENGA — NANSI INDLELA\n\nUhlelo lwensuku zaleli viki:\n1. Khomba abanikazi bespaza ababili noma abathathu abakhelene nawe obathembayo.\n2. Vumelani ku-ayi-tem elilodwa lokuyalela esikhulukhu (qala kancane: amafutha okupheka, ufulawa wombila, noma ushukela).\n3. Hlanganisa imali yakho uthumele umuntu OYEDWA kumshumayeleli.\n4. Hlukahlukanisa izimpahla ngokweqhelezela uma nibuyile.\n\n🏢 UKUSHINTSHA INHLANGANO YAKHO YOKUTHENGA KU-CIPC:\nUma iqembu lakho lifuna ukuvula i-akhawunti yasebhange ehlangene noma ufaka isicelo sekhredithi bahlinzeki, uzodinga ukubhalisa njengo:\n• Isinxibeleleo (Co-op) — kubhaliswa nge-CIPC nge-R125. Izinxibeleleo zithola ukufikelela okukhethekile kumathenda kahulumeni nokusekela kwe-SEDA.\n• NOMA i-Pty Ltd — nge-R175 nge-bizportal.gov.za — uma ufuna umzimba wezamabhizinisi osemthethweni.\n\n💡 I-SARS NENTELA YEMALI YE-CO-OP:\nIzinxibeleleo ezibhaliswe e-RSA zijabula ngesahlelo sentela esiphansi (siqala ku-27%) nokufika ku-inkomo yentela ye-Small Business Corporation — engase yehlise isahlelo sakho esisebenzayo siye ku-zero uma ukufika kwemali wonyaka ungaphansi kwe-R335,000.\n\n📋 AMALAYISENSI EZEMBONI UKUHLOLA:\n• Ukuthengisa eDublin & Okungaphansi: Alidingi iLayisensi esemthethweni ezingeni lespaza, KODWA ukusebenza phakathi kwe-intownship ekhombiwe yimasipala wakho kungadinga iLayisensi yoMthengisi noma iLayisensi Yokuhweba Ngokungasemthethweni.\n• Ukuphepha kukodla: Isitifiketi Esanelisekayo (CoA) sosokhaya wempilo wendawo.\n• Utshwala: ILayisensi Yotshwala iDingeka NGAPHAMBI kokuthengisa noma yimuphi utshwala — ukusebenza ngaphandle kwayo kuyicala lomthetho ezo zonke izifundazwe ze-RSA.\n\n🌍 FAKA ISICELO KU-INTHANETHI:\n• bizportal.gov.za (ukubhalisa ku-CIPC)\n• sarsefiling.gov.za (inombolo yentela + i-PIN yokufaneleka)\n• seda.org.za (i-SEDA — uqeqesho lwamahala lwezamabhizinisi)\n\n👉 Thumela umlayezo kumakhelwane wakho wespaza omkhulu namuhla.",
        },
      },
    ],
  },
]

/** Return translated module fields for the current language */
export function localizeModule(mod: BilingualModule, lang: Language) {
  return {
    ...mod,
    title: mod.title[lang],
    description: mod.description[lang],
    steps: mod.steps.map(s => ({
      ...s,
      title: s.title[lang],
      content: s.content[lang],
      actionItem: s.actionItem[lang],
    })),
  }
}
