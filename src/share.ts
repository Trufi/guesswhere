export function getShareHtml(text: string) {
    const urlText = decodeURIComponent(text);
    return /* HTML */ `
        <div class="end-restart resp-sharing-button">РЕСТАРТ</div>
        <a
            class="resp-sharing-button__link"
            href="https://twitter.com/intent/tweet/?text=${urlText}&amp;url=https%3A%2F%2Ftrufi.github.io%2Fguesswhere"
            target="_blank"
            rel="noopener"
            aria-label=""
        >
            <div
                class="
                resp-sharing-button
                resp-sharing-button--twitter
                resp-sharing-button--small
            "
            >
                <div
                    aria-hidden="true"
                    class="resp-sharing-button__icon resp-sharing-button__icon--solid"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path
                            d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z"
                        />
                    </svg>
                </div>
            </div>
        </a>
        <a
            class="resp-sharing-button__link"
            href="http://vk.com/share.php?title=${urlText}&amp;url=https%3A%2F%2Ftrufi.github.io%2Fguesswhere"
            target="_blank"
            rel="noopener"
            aria-label=""
        >
            <div
                class="
                resp-sharing-button
                resp-sharing-button--vk
                resp-sharing-button--small
            "
            >
                <div
                    aria-hidden="true"
                    class="resp-sharing-button__icon resp-sharing-button__icon--solid"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path
                            d="M21.547 7h-3.29a.743.743 0 0 0-.655.392s-1.312 2.416-1.734 3.23C14.734 12.813 14 12.126 14 11.11V7.603A1.104 1.104 0 0 0 12.896 6.5h-2.474a1.982 1.982 0 0 0-1.75.813s1.255-.204 1.255 1.49c0 .42.022 1.626.04 2.64a.73.73 0 0 1-1.272.503 21.54 21.54 0 0 1-2.498-4.543.693.693 0 0 0-.63-.403h-2.99a.508.508 0 0 0-.48.685C3.005 10.175 6.918 18 11.38 18h1.878a.742.742 0 0 0 .742-.742v-1.135a.73.73 0 0 1 1.23-.53l2.247 2.112a1.09 1.09 0 0 0 .746.295h2.953c1.424 0 1.424-.988.647-1.753-.546-.538-2.518-2.617-2.518-2.617a1.02 1.02 0 0 1-.078-1.323c.637-.84 1.68-2.212 2.122-2.8.603-.804 1.697-2.507.197-2.507z"
                        />
                    </svg>
                </div>
            </div>
        </a>
        <a
            class="resp-sharing-button__link"
            href="https://telegram.me/share/url?text=${urlText}&amp;url=https%3A%2F%2Ftrufi.github.io%2Fguesswhere"
            target="_blank"
            rel="noopener"
            aria-label=""
        >
            <div
                class="
                resp-sharing-button
                resp-sharing-button--telegram
                resp-sharing-button--small
            "
            >
                <div
                    aria-hidden="true"
                    class="resp-sharing-button__icon resp-sharing-button__icon--solid"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path
                            d="M.707 8.475C.275 8.64 0 9.508 0 9.508s.284.867.718 1.03l5.09 1.897 1.986 6.38a1.102 1.102 0 0 0 1.75.527l2.96-2.41a.405.405 0 0 1 .494-.013l5.34 3.87a1.1 1.1 0 0 0 1.046.135 1.1 1.1 0 0 0 .682-.803l3.91-18.795A1.102 1.102 0 0 0 22.5.075L.706 8.475z"
                        />
                    </svg>
                </div>
            </div>
        </a>
    `;
}
