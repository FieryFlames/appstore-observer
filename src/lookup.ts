export interface Lookup {
    resultCount: number;
    results:     Result[];
}

interface Result {
    appletvScreenshotUrls:              any[];
    screenshotUrls:                     string[];
    ipadScreenshotUrls:                 string[];
    artworkUrl60:                       string;
    artworkUrl512:                      string;
    artworkUrl100:                      string;
    artistViewUrl:                      string;
    isGameCenterEnabled:                boolean;
    features:                           string[];
    supportedDevices:                   string[];
    advisories:                         string[];
    kind:                               string;
    currency:                           string;
    minimumOsVersion:                   string;
    trackCensoredName:                  string;
    languageCodesISO2A:                 string[];
    fileSizeBytes:                      string;
    sellerUrl:                          string;
    formattedPrice:                     string;
    contentAdvisoryRating:              string;
    averageUserRatingForCurrentVersion: number;
    userRatingCountForCurrentVersion:   number;
    averageUserRating:                  number;
    trackViewUrl:                       string;
    trackContentRating:                 string;
    releaseNotes:                       string;
    artistId:                           number;
    artistName:                         string;
    genres:                             string[];
    price:                              number;
    description:                        string;
    genreIds:                           string[];
    isVppDeviceBasedLicensingEnabled:   boolean;
    sellerName:                         string;
    bundleId:                           string;
    releaseDate:                        string;
    trackId:                            number;
    trackName:                          string;
    currentVersionReleaseDate:          string;
    primaryGenreName:                   string;
    primaryGenreId:                     number;
    version:                            string;
    wrapperType:                        string;
    userRatingCount:                    number;
}
