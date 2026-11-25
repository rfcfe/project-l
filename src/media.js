// Drop your files in these places and they are picked up automatically:
//   src/assets/snail.gif   -> the suspicious snail
//   src/assets/pipoca/     -> Pipoca media. Files are matched by name:
//        *sad*      -> shown on the final boss when "No" is clicked
//        *sleepy*   -> shown at the start of the Pipoca bonus level
//        *wagging*  -> video shown after petting + on the Yes screen
// Note: Vite requires the glob options to be an inline object literal.

const pipocaFiles = import.meta.glob('./assets/pipoca/*.{jpg,jpeg,png,webp,mp4,webm}', {
  eager: true,
  query: '?url',
  import: 'default',
})

const findPipoca = (word) =>
  Object.entries(pipocaFiles).find(([path]) => path.toLowerCase().includes(word))?.[1] ?? null

export const pipocaMedia = {
  sad: findPipoca('sad'),
  sleepy: findPipoca('sleepy'),
  wagging: findPipoca('wagging'),
}

export const snailSrc =
  Object.values(
    import.meta.glob('./assets/snail.{gif,webp,png}', {
      eager: true,
      query: '?url',
      import: 'default',
    }),
  )[0] ?? null
