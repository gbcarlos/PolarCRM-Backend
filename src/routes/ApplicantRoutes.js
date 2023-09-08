import { listCurrentApplicants, previewCurrentApplicants, newApplicant, applicantDetails } from '../controllers/applicants.controllers.js'
import express from 'express'

const router = express.Router()

router.get('/', listCurrentApplicants)
router.get('/preview', previewCurrentApplicants)
router.post('/new', newApplicant)
router.post('/detail', applicantDetails)

export default router