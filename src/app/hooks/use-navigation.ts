export function useNavigation() {
  function goToTelegram() {
    goToExternalWebsite('https://t.me/zoomercoinofficial');
  }

  function goToX() {
    goToExternalWebsite('http://twitter.com/zoomercoin');
  }

  function goToDiscord() {
    goToExternalWebsite('https://discord.gg/8sbCyXpM');
  }

  function goToBuyNow() {
    goToExternalWebsite('');
  }

  function goToExternalWebsite(url: string) {
    window.open(url, '_blank');
  }

  return { goToTelegram, goToX, goToDiscord, goToBuyNow };
}
