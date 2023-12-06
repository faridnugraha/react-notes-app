const getNotes = () => {
    return [
        {
            id: 1,
            title: "Babel",
            body: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
            archived: false,
            createdAt: '2022-04-14T04:27:34.572Z'
        },
        {
            id: 2,
            title: "Vite",
            body: "Vite is a local development server written by Evan You, the creator of Vue.js, and used by default by Vue and for React project templates. It has support for TypeScript and JSX. It uses Rollup and esbuild internally for bundling.",
            archived: false,
            createdAt: '2023-04-14T04:27:34.572Z'
        },
    ]
}

export { getNotes }