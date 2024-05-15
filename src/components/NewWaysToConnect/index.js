import LanguageContext from '../../context/LanguageContext'

import './index.css'

const newWaysToConnectContent = {
  EN: {
    heading: 'New ways to connect',
    description:
      'Connect instantly to the people you care about right from your desktop with Microsoft Teams. Call or chat for free, no matter what device they’re on.',
  },
  HI: {
    heading: 'कनेक्ट करने के नए तरीके',
    description:
      'माइक्रोसॉफ्ट टीमों के साथ सीधे अपने डेस्कटॉप से ​​उन लोगों से तुरंत कनेक्ट हों जिनकी आप परवाह करते हैं। कॉल करें या निःशुल्क चैट करें—चाहे वे किसी भी डिवाइस पर हों।',
  },
  TE: {
    heading: 'కనెక్ట్ చేయడానికి కొత్త మార్గాలు',
    description:
      'మైక్రోసాఫ్ట్ బృందాలతో మీ డెస్క్‌టాప్ నుండి మీరు శ్రద్ధ వహించే వ్యక్తులతో తక్షణమే కనెక్ట్ అవ్వండి. అవి ఏ పరికరంలో ఉన్నా సరే ఉచితంగా కాల్ చేయండి లేదా చాట్ చేయండి',
  },
  TA: {
    heading: 'இணைக்க புதிய வழிகள்',
    description:
      'மைக்ரோசாஃப்ட் குழுக்களுடன் உங்கள் டெஸ்க்டாப் மூலமாக நீங்கள் கவனிக்கும் நபர்களுடன் உடனடியாக இணைந்திடுங்கள். அவை எந்த சாதனத்தில் இருந்தாலும் இலவசமாக அழைக்கவோ அல்லது உரையாடவோ செய்யுங்கள்.',
  },
}

const NewWaysToConnect = () => {
  const getNewWaysToConnectData = activeLanguage => {
    switch (activeLanguage) {
      case 'EN':
        return newWaysToConnectContent.EN
      case 'HI':
        return newWaysToConnectContent.HI
      case 'TE':
        return newWaysToConnectContent.TE
      case 'TA':
        return newWaysToConnectContent.TA
      default:
        return null
    }
  }
  return (
    <LanguageContext.Consumer>
      {value => {
        const {activeLanguage} = value
        const {heading, description} = getNewWaysToConnectData(activeLanguage)
        return (
          <div className="new-ways-to-connect-container">
            <h1 className="new-ways-to-content-heading">{heading}</h1>
            <p className="new-ways-to-content-description">{description}</p>
          </div>
        )
      }}
    </LanguageContext.Consumer>
  )
}

export default NewWaysToConnect
