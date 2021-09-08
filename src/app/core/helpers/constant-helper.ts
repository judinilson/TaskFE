import {environment} from "../environments/environment";

export class ConstantHelper {

  static readonly urlAuth = `${environment.apiUrl}/auth`
  static readonly urlUserAdmin = `${environment.apiUrl}/userAdmin`
  static readonly urlUser = `${environment.apiUrl}/user`
  static readonly urlNews = `${environment.apiUrl}/news`
  static readonly urlUpload = `${environment.apiUrl}/upload`

  static readonly picture404 = 'assets/images/error-image.png'
  static readonly pictureLogo = 'assets/images/logo.png'
  static readonly pictureLogoW = 'assets/images/logo-w.png'
  static readonly pictureDefaultNews = 'assets/images/news-illust.svg'
  static readonly picturePlay = 'assets/images/play.svg'
  static readonly pictureAccountBg = 'assets/images/bg-acc.jpg'
  static readonly pictureNicheDefault = 'assets/images/house.svg'

  static readonly USER_TOKEN = "TOKEN"
  static readonly MINUTE_OFFSET_REFRESH = 4
  static readonly EMPTY_JSON = "{}"
  static readonly platformName = "EzTarget"
}
