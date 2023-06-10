

const Footer = () => {
  return (
    <footer class="bg-gray-900 py-6">
  <div class="container mx-auto flex flex-wrap items-center justify-between">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <svg class="h-8 w-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path d="M10 0a10 10 0 1 0 10 10A10 10 0 0 0 10 0zM7.5 14.09v3.07H6.18v-.77c-.41.46-.91.77-1.45.97l-.29-1.93c.35-.1.68-.29.97-.58a3.13 3.13 0 0 0 .72-1.97c0-.45-.1-.85-.3-1.21-.2-.36-.5-.67-.91-.92-.4-.25-.92-.42-1.54-.5v-.07c.5-.07 1-.2 1.5-.4s.87-.47 1.24-.81c.37-.34.65-.74.84-1.2.2-.46.3-.96.3-1.51 0-.35-.06-.68-.18-.99-.12-.3-.3-.57-.54-.81a2.36 2.36 0 0 0-.81-.54c-.3-.14-.6-.24-.92-.3V5.99H6.18v1.69h-.04c-.24 0-.47.03-.71.1s-.45.15-.64.27c-.19.11-.35.25-.49.41-.14.16-.25.34-.34.54-.09.2-.14.42-.14.66 0 .43.12.8.36 1.12.24.32.52.57.84.76.32.19.67.32 1.05.39v.02c-.4.07-.77.2-1.1.38-.33.18-.6.4-.81.64s-.41.55-.54.9c-.13.35-.2.72-.2 1.12 0 .46.09.87.28 1.24.19.37.46.68.81.93.35.25.79.44 1.31.57v.01zm5.43-1.67c.22.18.41.41.57.69.16.29.27.62.34 1 .07.37.1.75.1 1.15 0 .66-.15 1.28-.46 1.85-.31.57-.74 1.03-1.28 1.38-.54.34-1.17.52-1.87.52-.67 0-1.27-.14-1.81-.43-.54-.28-1-.67-1.35-1.14a4.17 4.17 0 0 1-.92-2.64c0-1.04.27-1.94.8-2.7.53-.76 1.23-1.35 2.09-1.77.86-.42 1.8-.63 2.82-.63.84 0 1.63.14 2.39.43.76.28 1.4.67 1.92 1.15l-1.1 1.64c-.18-.19-.4-.35-.67-.49-.27-.14-.58-.21-.91-.21-.5 0-.92.19-1.28.56-.36.37-.55.83-.55 1.37 0 .32.05.62.16.89.11.27.28.51.53.72.23.2.51.36.83.48.32.12.66.18 1.03.18.46 0 .88-.08 1.26-.24.38-.16.7-.38.97-.66.27-.28.47-.6.61-.95s.21-.75.21-1.17c0-.44-.07-.86-.22-1.26-.15-.4-.36-.76-.63-1.07-.27-.31-.59-.56-.96-.75-.37-.19-.77-.31-1.2-.38v-.02z"/>
      </svg>
      <span class="font-semibold text-xl tracking-tight ml-2">studysquad</span>
    </div>
    <div>
        <p class="text-gray-500">&copy; {new Date().getFullYear()} Online Course. All rights reserved.</p>
      </div>
  </div>
</footer>
  )
}

export default Footer