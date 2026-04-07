<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Collection;

class WeeklyNewsDigest extends Mailable
{
    use Queueable, SerializesModels;

    public function __construct(
        public Collection $news,
        public string $unsubscribeToken
    ) {}

    public function envelope(): Envelope
    {
        return new Envelope(
            subject: '📰 Resumen Semanal — Radio ABC Stereo',
        );
    }

    public function content(): Content
    {
        return new Content(
            view: 'emails.weekly-digest',
        );
    }
}
