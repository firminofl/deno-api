// Deno imports (Standart library or Third party modules)
import { Router } from "https://deno.land/x/oak/mod.ts";

// Import modules of application
import {
    getChapters,
    getChapter,
    addChapter,
    updateChapter,
    deleteChapter
} from "../controllers/youtube-chapters-controller.ts"

// Instance Router
const router = new Router()

// Get all chapters or a specifically chapter
router.get('/api/v1/video-chapters/:id', getChapters);

// Get chapter by id and timeInSeconds
router.get('/api/v1/video-chapters/:id/:seconds', getChapter);

// Add a chapter
router.post('/api/v1/video-chapters/:id', addChapter);

// Update a chapter
router.put('/api/v1/video-chapters/:id/:seconds', updateChapter);

// Delete a chapter
router.delete('/api/v1/video-chapters/:id/:seconds', deleteChapter);

// Export router for the app.js to use
export default router;