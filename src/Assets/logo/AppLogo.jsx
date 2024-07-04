import { createStyles, useMantineTheme } from "@mantine/core";

const useStyles = createStyles((theme) => ({
   logo: {
      [theme.fn.smallerThan("sm")]: {
         width: 220,
         marginLeft: theme.spacing.md,
         marginRight: theme.spacing.sm * 0.4,
      },
   },
}));

export default function Logo({ variant = "default", width = 330, ...others }) {
   const theme = useMantineTheme();
   const { classes } = useStyles();
   return (
      <>
         <svg
            xmlns="http://www.w3.org/2000/svg"
            className={classes.logo}
            viewBox="0 0 300 300"
            {...others}
            version="1.0"
            width={width}
            preserveAspectRatio="xMidYMid meet"
         >
            <path
               fill="transparent"
               d="M0 0H300V300H0z"
               className="logo-background-square"
            ></path>
            <path
               fill={
                  theme.colorScheme === "dark"
                     ? theme.white
                     : theme.colors[theme.primaryColor][7]
               }
               d="M3.84 15.22c2.42 0 3.34-1.28 3.34-2.59 0-1.58-1.24-2.41-2.73-3.19-1.43-.8-2.22-1.32-2.22-2.4 0-1.05.89-1.37 1.69-1.37 1.05 0 1.75.46 1.85 1.22.04.19.07.42.03.63.15.04.32.04.44.01.49-.04.65-.33.65-.7 0-1.09-1.16-1.71-2.83-1.71-1.64 0-3.04.68-3.04 2.34 0 1.53 1.08 2.21 2.73 3.14 1.42.8 2.17 1.33 2.17 2.41 0 1.1-.81 1.65-1.93 1.65-1.36 0-2.14-.73-2.21-1.72-.03-.24-.02-.44.03-.62-.87-.13-1.14.28-1.14.84 0 1.12.97 2.06 3.17 2.06zm12.13-1.21c-.12.14-.29.17-.39.17-.25-.01-.45-.24-.68-.81l-.68-1.6c-.3-.63-.64-1.16-1.35-1.35 1.31-.34 2.17-1.29 2.17-2.68 0-1.87-1.32-2.62-3.97-2.62-1.17 0-1.8.16-2.15.33.15.46.19 1.26.19 1.56v7.48c0 .43.31.7.75.7.36 0 .63-.18.74-.29-.17-.42-.2-1.18-.2-1.5v-2.66h.93c1.17.01 1.42.67 1.7 1.37l.61 1.55c.37.96.7 1.52 1.52 1.52.34 0 .9-.23.9-.77 0-.13-.02-.26-.09-.4zm-5.57-3.82V5.68c.17-.02.42-.02.76-.02 1.76 0 2.48.75 2.48 2.19 0 1.39-.91 2.33-2.26 2.36-.38 0-.7-.02-.98-.02zm12.43 3.68c-1.05.23-2.64.45-3.96.48l-.01-4.05h3.34c.06-.22.07-.49 0-.74h-3.34l-.02-3.57c1.32.03 2.55.18 3.71.44.37-.16.52-1.12.14-1.12h-4.2c-.54 0-.81.07-1.1.33.15.45.19.95.19 1.51v7.17c0 .45.31.7.75.7h4.43c.44 0 .41-.94.07-1.15zm6.11 1.32c.36 0 .61-.18.74-.29-.17-.45-.2-1.01-.2-1.56V5.85c0-.43-.32-.68-.75-.68-.35 0-.62.16-.73.28.15.46.2 1.02.2 1.56v7.48c0 .43.3.7.74.7zm8.79-1.85V10.6c0-1.91-.71-2.9-2.25-2.9-1.15 0-1.99.62-2.38 1.69v-.16c0-1.01-.42-1.52-1.17-1.52-.56 0-.89.3-.89.72 0 .17.05.31.17.46.08-.17.26-.2.36-.2.27 0 .38.2.39.72v5.02c0 .48.31.76.74.76.35 0 .62-.17.73-.28-.21-.57-.21-1.08-.21-3.25 0-2.34.98-3.25 1.88-3.25 1.03 0 1.36.83 1.37 2.36v3.72c0 .43.32.7.74.7.32 0 .56-.14.73-.29-.17-.45-.2-1.08-.21-1.56zm8.54.62c-.1.18-.27.21-.38.21-.28 0-.45-.23-.45-.73l.02-7.95c0-.45-.32-.7-.74-.7-.37 0-.62.18-.73.29.17.6.21 1.36.21 2.06v1.62c-.28-.67-.94-1.06-1.88-1.06-1.9 0-2.95 1.51-2.95 4.07 0 1.64.49 3.43 2.42 3.43 1.23 0 2.04-.72 2.46-1.9.03 1.15.41 1.83 1.24 1.83.53 0 .93-.28.93-.7 0-.14-.04-.3-.15-.47zm-4.13.49c-1.2 0-1.41-1.29-1.41-2.72 0-2.17.63-3.32 1.83-3.32 1.34 0 1.62 1.19 1.62 2.31 0 1.99-.72 3.73-2.04 3.73zm12-.45c-.1.17-.27.2-.38.2-.27 0-.38-.2-.38-.72l-.01-5.02c0-.48-.32-.76-.73-.76-.36 0-.62.18-.73.28.21.59.21 1.08.21 3.25 0 2.38-.95 3.32-1.83 3.32-1 0-1.32-.7-1.32-2.43V8.4c0-.45-.31-.7-.73-.7-.33 0-.56.15-.72.29.15.45.19 1.08.19 1.56v2.74c0 2.14.7 2.93 2.2 2.93 1.12 0 1.96-.63 2.34-1.74v.18c0 1.01.42 1.5 1.16 1.5.56 0 .88-.28.88-.7 0-.15-.04-.31-.15-.46zm3.62 1.2c2.26 0 2.97-1.07 2.97-2.04 0-1.29-1.27-1.78-2.38-2.31-.92-.45-1.78-.81-1.78-1.69 0-.68.65-.93 1.36-.93.84 0 1.37.32 1.46.9.07.18.07.43.04.63.14.04.27.04.42.01.45-.04.6-.35.6-.68 0-.9-.95-1.4-2.48-1.4-1.37 0-2.56.53-2.56 1.86 0 1.43 1.14 1.92 2.23 2.43.95.47 1.9.75 1.9 1.61 0 .7-.7 1.05-1.65 1.05-1.08 0-1.71-.53-1.76-1.31-.03-.23-.03-.41.02-.62-.77-.12-1.02.34-1.02.81 0 .94.79 1.68 2.63 1.68zm6.47-7.3h-.45c.02-.7.06-1.18.17-1.59a1.1 1.1 0 00-.71-.28c-.44 0-.74.26-.74.69V7.9h-.68c-.19 0-.35.11-.36.33l-.01.35c.18-.03.65-.04.84-.04h.21v5c0 1.02.54 1.64 1.47 1.64.74 0 1.26-.31 1.26-.77a.85.85 0 00-.17-.48c-.09.18-.39.27-.63.27-.45 0-.67-.27-.67-.76l.01-4.4v-.5h1.39c.18 0 .33-.13.35-.35l.01-.34c-.14.02-1.15.05-1.29.05zm6.01-.2c-.9 0-1.54.55-1.86 1.58.01-1.05-.42-1.57-1.15-1.57-.56 0-.9.3-.9.72 0 .17.06.31.17.46.08-.17.27-.2.36-.2.27 0 .4.2.4.72v5c0 .47.33.75.72.75.37-.01.63-.18.75-.29-.21-.58-.21-1.07-.21-3.21 0-2.36.67-3.29 1.4-3.29.49 0 .77.27.77.84 0 .32-.05.56-.27.9.11.12.31.19.57.18.48-.03.89-.46.89-1.11 0-.93-.69-1.48-1.64-1.48zm3.82-1.01c.45 0 .81-.36.81-.81 0-.46-.36-.83-.81-.83-.46 0-.83.37-.83.83 0 .45.37.81.83.81zm.69 6.65l-.02-4.95c0-.44-.29-.69-.71-.69-.37 0-.6.18-.73.28.17.45.2 1.02.2 1.57l.01 4.94c0 .43.31.7.71.7.37 0 .62-.18.73-.29-.17-.45-.19-1.01-.19-1.56zm7.51-.17c-.29.76-1.07 1.19-2.08 1.19-1.22 0-2.16-.64-2.28-2.57.49.05.98.08 1.48.08 1.93 0 3.15-.73 3.15-2.13 0-1.34-1.11-2.04-2.62-2.04-2.2 0-3.39 1.46-3.39 3.78 0 2.42 1.29 3.72 3.34 3.72 1.2 0 2.17-.44 2.52-1.31.19-.46.07-.65-.12-.72zm-2.4-4.94c.64 0 1.31.28 1.31 1.33 0 1.44-1.12 1.77-2.35 1.77-.32-.02-.64-.03-.94-.06.02-1.99.79-3.04 1.98-3.04zm6.41 6.97c2.25 0 2.97-1.07 2.97-2.04 0-1.29-1.28-1.78-2.38-2.31-.93-.45-1.78-.81-1.78-1.69 0-.68.64-.93 1.36-.93.84 0 1.37.32 1.45.9.07.18.07.43.04.63.14.04.27.04.42.01.45-.04.61-.35.61-.68 0-.9-.96-1.4-2.48-1.4-1.37 0-2.56.53-2.56 1.86 0 1.43 1.13 1.92 2.22 2.43.95.47 1.91.75 1.91 1.61 0 .7-.7 1.05-1.66 1.05-1.07 0-1.7-.53-1.76-1.31-.03-.23-.03-.41.03-.62-.77-.12-1.02.34-1.02.81 0 .94.78 1.68 2.63 1.68z"
               transform="matrix(1.09524 0 0 1.09524 162.261 129.042)"
            ></path>
            <path
               fill={
                  theme.colorScheme === "dark"
                     ? theme.white
                     : theme.colors[theme.primaryColor][7]
               }
               stroke="none"
               d="M71.9 59.185a7.743 7.743 0 1115.486 0 7.743 7.743 0 01-15.486 0zm2.844 0a4.898 4.898 0 109.798-.002 4.898 4.898 0 00-9.798.002zm9.668 0a4.769 4.769 0 01-9.496.648c.41 2.174 2.361 3.818 4.707 3.818 2.575 0 4.674-1.981 4.784-4.466h.005zm-.848-1.846a4.334 4.334 0 11-7.877.071 4.23 4.23 0 017.877-.071zm-3.921-2.38a4.225 4.225 0 10.002 8.45 4.225 4.225 0 00-.002-8.45zm-2.266 4.524l.95.152a1.35 1.35 0 001.527.91l.576.763c.044.075.123.109.181.076l.322-.18c.06-.033.072-.117.033-.192l-.344-.896a1.354 1.354 0 00.023-1.78l.373-.881c.045-.073.032-.159-.024-.194l-.315-.188c-.058-.034-.142-.004-.184.068l-.605.744a1.357 1.357 0 00-1.553.871l-.95.117c-.085-.001-.154.051-.154.117l-.007.37c0 .067.066.122.151.123zm4.727-.209a2.478 2.478 0 01-.42 1.295l.821.557c.36-.532.569-1.159.593-1.815l-.994-.037zm-3.066-3.092l.333.71c.045.108.07.156.154.156h.233c.085 0 .109-.048.154-.156l.331-.71a.152.152 0 00-.155-.153h-.895a.153.153 0 00-.155.153zm-2.436 2.647l.622-.075a.374.374 0 01.153-.037l.155-.019c.021-.014.032-.034.042-.064l.072-.221c.027-.081-.012-.119-.099-.195l-.574-.535a.156.156 0 00-.196.1l-.275.852a.151.151 0 00.1.194zm1.764 3.138l.148-.769c.027-.114.036-.167-.034-.218l-.188-.137c-.068-.051-.115-.025-.217.035l-.686.38a.157.157 0 00.034.217l.725.526a.154.154 0 00.218-.034zm3.53-.708l-.687-.38c-.066-.039-.108-.063-.151-.062l.051.132c.104.208-.069.426-.285.529l.097.488a.154.154 0 00.217.035l.724-.526a.157.157 0 00.034-.216zm.416-3.576l-.574.535c-.089.076-.126.114-.1.195l.073.221c.024.082.08.091.195.101l.778.095a.154.154 0 00.1-.195l-.277-.851a.153.153 0 00-.195-.101zm-1.827-.81l.068.027c.083-.021.192.006.349.088.223.107.312.205.32.312.135.112.256.237.363.374l.783-.61a3.45 3.45 0 00-1.545-1.123l-.338.932zm-2.786.8a2.498 2.498 0 011.104-.8l-.338-.934a3.477 3.477 0 00-1.548 1.121l.782.613zm-.099 2.894a2.458 2.458 0 01-.387-.973.262.262 0 01-.142-.236l-.001-.082-.884.031c.023.64.223 1.272.59 1.816l.824-.556zm2.721.991a2.453 2.453 0 01-1.359-.002l-.276.955a3.454 3.454 0 001.91.002l-.275-.955zm-4.353-2.373c0-.358.052-.703.146-1.031l.206.036c.108.021.159.029.167.004l.022-.069c.008-.025-.037-.047-.138-.095l-.188-.091a3.678 3.678 0 013.346-2.426l.032.204c.013.111.021.16.048.16h.072c.026 0 .032-.049.048-.16l.03-.204a3.675 3.675 0 013.342 2.432l-.187.09c-.103.048-.146.071-.139.097l.023.069c.008.026.059.018.167-.004l.203-.035a3.665 3.665 0 01-1.281 3.927l-.144-.147c-.076-.082-.111-.116-.134-.102l-.058.043c-.022.016.001.061.055.159l.097.183a3.67 3.67 0 01-2.063.633 3.658 3.658 0 01-2.069-.636l.098-.184c.054-.099.076-.144.054-.158l-.058-.043c-.021-.017-.058.019-.135.101l-.144.146a3.666 3.666 0 01-1.418-2.899zm3.29-.708a.814.814 0 11.764 1.438.814.814 0 01-.764-1.438zm-66.405.708a7.743 7.743 0 1115.484 0 7.743 7.743 0 01-15.484 0zm2.954 0a4.896 4.896 0 004.898 4.897 4.898 4.898 0 10-4.898-4.897zm9.668 0a4.769 4.769 0 01-9.495.648c.41 2.174 2.362 3.818 4.708 3.818 2.574 0 4.673-1.981 4.782-4.466h.005zm-8.724-1.776a4.23 4.23 0 017.875-.071 4.334 4.334 0 11-7.875.071zm3.954-2.45a4.225 4.225 0 000 8.45c2.333 0 4.223-1.891 4.223-4.224s-1.889-4.226-4.223-4.226zm-3.673 4.226c0-.358.051-.703.146-1.031l.205.036c.11.021.16.029.168.004l.022-.069c.008-.025-.036-.047-.137-.095l-.186-.091a3.675 3.675 0 013.346-2.426l.03.204c.014.111.022.16.047.16h.074c.026 0 .033-.049.048-.16l.03-.204a3.673 3.673 0 013.341 2.432l-.187.09c-.101.048-.146.071-.137.097l.022.069c.008.026.058.018.167-.004l.206-.035a3.667 3.667 0 01-1.282 3.927l-.144-.147c-.076-.082-.111-.116-.133-.102l-.059.043c-.022.016.001.061.055.159l.097.183a3.665 3.665 0 01-2.064.633 3.655 3.655 0 01-2.068-.636l.097-.184c.053-.099.076-.144.054-.158l-.058-.043c-.023-.017-.058.019-.134.101l-.143.146a3.653 3.653 0 01-1.423-2.899zm4.353 2.373a2.46 2.46 0 01-1.361-.002l-.275.955c.618.178 1.28.183 1.911.002l-.275-.955zm-2.721-.991a2.447 2.447 0 01-.42-1.295l-.992.035a3.46 3.46 0 00.587 1.816l.825-.556zm.1-2.894c.102-.13.215-.248.337-.354.015-.106.097-.206.278-.303.184-.106.303-.138.396-.108l.092-.035-.338-.934a3.48 3.48 0 00-1.549 1.121l.784.613zm2.785-.8c.438.161.819.441 1.1.802l.784-.61c-.396-.506-.93-.9-1.545-1.123l-.339.931zm1.826.81l-.573.535c-.089.076-.126.114-.101.195l.073.221c.008.028.02.047.036.061l.135.017a.286.286 0 01.135.037l.667.081a.156.156 0 00.101-.195l-.277-.851a.155.155 0 00-.196-.101zm-.417 3.576l-.686-.38c-.101-.061-.147-.086-.217-.035l-.188.137c-.07.051-.062.105-.035.218l.149.769a.154.154 0 00.217.035l.725-.526a.156.156 0 00.035-.218zm-3.529.708l.098-.499c-.204-.103-.441-.235-.303-.51l.053-.141a.328.328 0 00-.137.062l-.685.38a.155.155 0 00.033.217l.725.526a.153.153 0 00.216-.035zm-1.765-3.138l.778-.095c.117-.01.17-.019.197-.101l.071-.221c.026-.081-.013-.119-.1-.195l-.574-.535a.157.157 0 00-.196.1l-.276.852a.153.153 0 00.1.195zm2.438-2.647l.333.71c.046.108.068.156.155.156h.232c.084 0 .109-.048.154-.156l.332-.71a.153.153 0 00-.155-.153h-.895a.154.154 0 00-.156.153zm3.041 3.372a2.5 2.5 0 01-.396 1.016l.823.557a3.452 3.452 0 00.591-1.815l-.89-.032a.484.484 0 01-.128.274zm-3.244 1.764l.58-.768c.309.054.637 0 .927-.174.294-.176.497-.445.592-.748l.947-.151c.084 0 .151-.057.15-.124l-.006-.369c-.002-.065-.072-.119-.155-.117l-.954-.118a1.355 1.355 0 00-1.559-.857l-.604-.742c-.044-.073-.125-.104-.182-.069l-.316.19c-.059.035-.069.12-.026.193l.374.886a1.353 1.353 0 00.038 1.776l-.342.896c-.041.074-.027.159.032.193l.324.179c.059.033.138-.002.18-.076zm-.007-2.133zm-17.837-.578c-.581-.6-.991-1.21-1.187-1.784l.085.01c.378.038.747.059 1.081.114a4.43 4.43 0 00.612 1.491c.285.023.647.039 1.111.043a.874.874 0 01.031.1s.04.11-.068.11c-.8-.003-1.314-.037-1.665-.084zm93.72-8.853c.533-.024 1.053-.034 1.374-.009.952.072 1.521.074 1.757.366a.594.594 0 00-.23.002c-.385.061-.684.16-1.089.064l-1.812-.423zM55.47 62.807c.509-.009 3.531.093 4.891.187.535.038 1.172.262 1.172.262s.35.14.691-.327c.78-1.074 1.017-1.462 1.426-2.333.305-.647.391-.885.019-.938-.371-.051-.294-.024-.294-.024l-2.1 2.871-5.805.302zm15.271-3.54l-.131 4.315h-8.83l-.767-.247h-2.715s-27.646.247-27.974.247c-.329 0-.442-.165-.442-.165v-3.664c4.883-.056 36.783-.437 40.859-.486zm-7.041-8.95c-.071.192-.166.429-.29.719-.527 1.247-1.794 4.207-4.31 8.214l-22.375.269c-.017-.822-.131-7.421.502-9.089l.009-.021c8.527.464 26.203-.085 26.203-.085l.261-.007zm5.571 8.812l-9.985.119c2.486-3.973 3.742-6.91 4.27-8.15.135-.318.237-.578.315-.792.129-.024.627-.114 2.556-.409a78.007 78.007 0 011.443-.209c.046 2.692.65 6.167 1.401 9.441zM67.882 48.59l-.006.22c-.433.083-.838.164-1.217.241a26 26 0 01-2.552.397l.003-.019c.006-.014.057-.102.13-.239a74.045 74.045 0 003.642-.6zm-29.08.643a2.063 2.063 0 00-1.013.294c-5.023-.298-11.149-.681-14.838-.631-5.483.072-9.975 1.743-12.639 2.91-2.667 1.166-3.596 1.79-2.652 1.536a17.835 17.835 0 002.745-.967c1.164-.517 3.069-1.459 6.426-2.015 8.11-1.341 11.407-.561 19.531-.006.229.017.465.031.71.045-.34.93-.463 3.224-.504 5.274-.036 1.814-.007 3.458.001 3.846l-6.688.078c-.615-4.592-4.04-8.358-9.238-8.386-5.633-.029-8.474 3.274-8.484 7.672-.057 1.475-.171 2.602-.574 3.575-.116.274-.253.227-.253.227-3.343-.26-6.555-1.729-8.549-3.402.288.021.606.032.941.029 1.35-.01.523-1.435-.135-2.243-.66-.809-1.813-.769-2.498-.866-.126-.02-.244-.035-.353-.054v-.051c0-.507 1.847-1.946 6.349-3.534-.13.064-.246.129-.34.191-.678.454-.821.652-.821.652s-1.613.736-2.278 1.06c-.666.326-1.09.852-1.062.95.028.1-.015.142.934-.397.712-.403 4.132-2.261 6.584-3.589 3.344-1.735 7.607-2.922 14.955-2.989 6.438-.057 9.634.323 9.634.323s.399.257 1.471.342c.788.063 1.713.101 2.638.126zm-18.231 1.621c4.922.025 8.252 3.402 9.116 7.659-.864-4.262-4.142-8.13-9.062-8.156-5.385-.028-8.274 3.456-8.519 7.588.243-4.103 3.082-7.121 8.465-7.091zm41.671-3.169l1.608.025-.933-.712c-.188.208-.388.414-.6.617l-.075.07zm17.173 3.034c5.933 0 8.692 2.608 9.091 5.835-.398-3.227-3.095-6.196-9.027-6.196-5.375 0-8.342 3.123-8.646 5.912.302-2.766 3.209-5.551 8.582-5.551zm-13.116-7.527l.154-.53s-6.135-.499-9.017-.464l.389.017c3.535.176 7.513.718 7.513.718l.865.112-.035.12c-.2-.024-.66-.077-1.662-.184-1.225-.153-4.027-.478-6.688-.609-2.954-.148-4.679 0-4.679 0s-2.176 1.501-4.082 3.036c-1.685 1.358-4.695 3.931-4.695 3.931s11.061-.083 11.959-.083c3.567 0 4.466-.401 5.891-1.754 1.765-1.678 2.629-3.68 2.856-4.268l.152.02c.117.014.246.029.386.043l-.086.279-.327-.251c-.071.179-.168.408-.286.663l.48.008-.126.394-.401-.306a10.1 10.1 0 01-.267.527l-.035.064.605.01-.158.468-.502-.382c-.113.203-.242.418-.385.64l.791.013c-.069.195-.14.387-.21.574l-.642-.491c-.142.216-.295.438-.462.661l1.032.017c-.098.248-.192.486-.287.706l-.817-.625c-.162.211-.335.425-.521.636l1.322.021a7.611 7.611 0 01-.35.71c-.235.417-.46.745-.719 1.001l-.189-.144c0-.167-.122-.291-.277-.291a.322.322 0 00-.087.013l-.565-.431c-.896.822-1.634 1.267-3.003 1.477l.052-.001c1.729-.019 2.836-.059 3.584-.16.114-.065.228-.138.34-.22.389-.285.685-.682 1.001-1.244.549-.971 1.2-2.934 1.625-4.321l.375.038c-.348 1.153-1.043 3.442-1.373 4.387l-.508.003a4.92 4.92 0 01-.964 1.212c-.324.301-.686.347-1.007.463a11.9 11.9 0 001.063-.103c.225-.028.47-.061.73-.095-.067.126-.118.217-.137.252-1.673.165-2.725.106-2.725.106s-15.016.418-20.345.128a572.41 572.41 0 01-2.868-.165 2.346 2.346 0 011.195-.291 2.708 2.708 0 00-.094-.01c2.245.052 4.388.017 4.388.017s2.168-1.813 4.48-3.583c2.312-1.77 4.331-3.169 4.331-3.169s.203-.149.168-.233c-.026-.068-.459-.286-1.631-.38 1.186-.306 3.84-.709 8.962-.303 3.065.244 5.147.461 6.543.632.146.114.28.239.381.378a.56.56 0 01.043.071l.136.023c-.067-.145-.229-.309-.399-.451 1.93.241 2.456.39 2.456.39l.129.13c.726.042 2.24.138 2.815.226.188.028.538.116.981.68.693.053 1.445.119 1.808.174.177.028.497.107.902.585.727.056 1.543.126 1.925.184.173.026.482.103.876.553.703.054 1.476.121 1.841.177.181.028.506.107.919.603l.027.007c.664.053 1.366.114 1.711.167.172.026.478.102.867.543.712.054 1.501.122 1.875.179.185.029.525.113.959.652 4.367 1.229 7.16 1.869 10.994 2.765.73.171 1.317-.261 1.426.028.043.107.005.83-.2 1.859.167.005.279.143.254.311l-.245 1.581a.378.378 0 01-.36.311h-.251c-.369 1.055-.893 2.187-1.618 3.227a9.415 9.415 0 01-2.311 2.298h2.773c.171 0 .257.14.189.31l-.229.588a.51.51 0 01-.433.31h-4.71c-.724.243-1.494.4-2.304.458-.793.057-.649-.142-.649-.142l-.395-4.444c-.398-3.227-3.158-5.837-9.091-5.837-5.556 0-8.475 2.979-8.605 5.836l-.064 2.167-1.313.016c-.758-3.286-1.364-6.774-1.405-9.46.642-.083.461-.037.84-.124.555-.129 5.203-.518 10.436-.647 5.232-.128 13.897 1.307 15.258 1.371s-.114-.467-3.071-1.216c-2.954-.749-4.753-.965-10.801-1.279-4.873-.253-9.45.405-12.654 1.009l.005-.222a64.63 64.63 0 002.995-.651c1.553-.379-1.646-.254-2.755-.221l-.213.005c.08-2.282.215-4.788.215-4.788l-.169-.02s-.125 2.522-.202 4.812c-.756.016-1.996.028-3.006.038.356-1.043 1.077-3.47 1.397-4.546zm-3.678 5.284a.17.17 0 01.17-.172.17.17 0 01.171.172c0 .094-.074.17-.171.17a.17.17 0 01-.17-.17zm-1.331.12h1.25c.041.083.12.142.216.154H61.29c-.104 0-.104-.154 0-.154zm.792-1.491l-.129.125c-1.329 1.263-2.12 1.653-5.632 1.653-.73 0-8.172.054-10.937.075.269-.229.591-.502.943-.797 1.352-.136 3.987-.351 8.226-.431 4.874-.092 6.818-.436 7.529-.625zm-4.282-4.36c2.766.136 5.69.483 6.809.626a12.256 12.256 0 01-1.7 2.82c-.938-.058-4.232-.248-7.789-.347-3.742-.105-5.959.486-7.084.885.451-.375.885-.732 1.255-1.031 1.677-1.35 3.565-2.674 3.979-2.963.399-.027 2.012-.116 4.53.01zm-18.069 6.041c1.624.027 3.089.012 3.567.006.28-.234 1-.828 1.932-1.577-2.379.026-4.437.655-5.499 1.571zm-2.606-.083c.247.014.504.025.763.035 2.796-1.362 7.583-3.674 9.852-4.572.843-.333 2.186-.969 3.717-1.73a8.354 8.354 0 00-.556-.07c-.843.337-1.646.657-2.342.933l-3.666 1.58c-2.614 1.223-5.873 2.865-7.768 3.824zm14.65-6.301c-.642.452-2.259 1.603-4.052 2.975a147.264 147.264 0 00-4.391 3.508c-.777.012-4.829.061-7.327-.136a7.166 7.166 0 01-.972-.129l14.849-6.399c.902.014 1.5.093 1.872.176l.021.005z"
               transform="translate(39.174 89.39) scale(1.11885)"
            ></path>
            <path
               fill={
                  theme.colorScheme === "dark"
                     ? theme.white
                     : theme.colors[theme.primaryColor][7]
               }
               d="M5.29 2.21H3.98L.04 11.48H1.2l1.14-2.69h4.59l1.13 2.69h1.17zM2.74 7.83L4.63 3.3l1.89 4.53zm21.05-5.62v5.31c0 2.15-1.43 3.05-2.9 3.05S18 9.67 18 7.52V2.21h-1.05v5.28c0 2.46 1.63 4.1 3.94 4.1 2.32 0 3.95-1.65 3.95-4.1V2.21zm16.78 0h-7.52v1.01h3.24v8.26h1.05V3.22h3.23zm12.06-.11c-2.82 0-4.71 2.11-4.71 4.75 0 2.63 1.89 4.74 4.71 4.74 2.81 0 4.7-2.11 4.7-4.74 0-2.64-1.89-4.75-4.7-4.75zm0 8.47c-2.26 0-3.66-1.64-3.66-3.72 0-2.09 1.4-3.73 3.66-3.73 2.25 0 3.65 1.64 3.65 3.73 0 2.08-1.4 3.72-3.65 3.72zm21.18-8.36l-3.26 4.4-3.32-4.4h-1.22v9.27h1.05V3.81l3.49 4.41 3.43-4.41v7.67h1.05V2.21zm14.6-.11c-2.81 0-4.7 2.11-4.7 4.75 0 2.63 1.89 4.74 4.7 4.74 2.81 0 4.7-2.11 4.7-4.74 0-2.64-1.89-4.75-4.7-4.75zm0 8.47c-2.25 0-3.65-1.64-3.65-3.72 0-2.09 1.4-3.73 3.65-3.73s3.65 1.64 3.65 3.73c0 2.08-1.4 3.72-3.65 3.72zm19.57-8.36h-7.52v1.01h3.24v8.26h1.05V3.22h3.23zm9.38 0h-1.05v9.27h1.05zm15.74 0l-3.21 8.08-3.2-8.08h-1.15l3.75 9.27h1.2l3.76-9.27zm16.14 1.01V2.21h-6.82v9.27h6.82v-1.01h-5.77V7.35h5.15V6.33h-5.15V3.22z"
               transform="matrix(.65017 0 0 .65017 162.969 154.346)"
            ></path>
         </svg>
      </>
   );
}
