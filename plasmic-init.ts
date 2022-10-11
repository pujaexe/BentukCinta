import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "6366ps4JUXGcyRNfgAokBX",  // ID of a project you are using
      token: "2RdonhOtZnZVVuFLoyT0TNm3xeSfYK21lohLasigvI0nu0ekC4dbGM1FoAC5MmTCl4tgKePaPONETfpUpscQ"  // API token for that project
    }
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
})