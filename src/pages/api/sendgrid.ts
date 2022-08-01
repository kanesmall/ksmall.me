import sendgrid from '@sendgrid/mail'
import { NextApiRequest, NextApiResponse } from 'next'

const sendGridApiKey = process.env.SENDGRID_API_KEY

if (!sendGridApiKey) {
    throw new Error("Missing required configuration: 'SENDGRID_API_KEY'")
}

sendgrid.setApiKey(sendGridApiKey)

const htmlBody = '<div></div>'

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        await sendgrid.send({
            to: 'kanesmall@outlook.com',
            subject: "Contact message from Kane's site",
            from: 'me@ksmall.me',
            html: `<div><h3>Name:</h3><p>${req.body.firstname} ${req.body.lastname}</p><h3>Email:</h3><p>${req.body.email}</p><h3>Message:</h3><p>${req.body.message}</p></div>`,
        })
    } catch (error: any) {
        return res.status(error.statusCode || 500).json({ error: error.message })
    }

    return res.status(200).json({ error: '' })
}
