// Utility functions for sharing content

export interface ShareableContent {
    title: string;
    slug: string;
    type: 'video' | 'audio';
}

/**
 * Generate a shareable URL for content
 */
export const generateShareUrl = (content: ShareableContent): string => {
    const baseUrl = window.location.origin;
    const path = content.type === 'video' ? 'video-reportajes' : 'audio-reportajes';
    return `${baseUrl}/${path}/${content.slug}`;
};

/**
 * Copy URL to clipboard
 */
export const copyToClipboard = async (text: string): Promise<boolean> => {
    try {
        await navigator.clipboard.writeText(text);
        return true;
    } catch (err) {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        document.body.appendChild(textArea);
        textArea.select();
        try {
            document.execCommand('copy');
            document.body.removeChild(textArea);
            return true;
        } catch (e) {
            document.body.removeChild(textArea);
            return false;
        }
    }
};

/**
 * Share via Web Share API (mobile)
 */
export const shareViaWebShare = async (content: ShareableContent): Promise<boolean> => {
    if (!navigator.share) {
        return false;
    }

    try {
        const url = generateShareUrl(content);
        await navigator.share({
            title: content.title,
            text: `Mira este ${content.type === 'video' ? 'video reportaje' : 'audio reportaje'}: ${content.title}`,
            url: url,
        });
        return true;
    } catch (err) {
        // User cancelled or error occurred
        return false;
    }
};

/**
 * Share on Facebook
 */
export const shareOnFacebook = (content: ShareableContent): void => {
    const url = generateShareUrl(content);
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    window.open(facebookUrl, '_blank', 'width=600,height=400');
};

/**
 * Share on Twitter/X
 */
export const shareOnTwitter = (content: ShareableContent): void => {
    const url = generateShareUrl(content);
    const text = `${content.title} - ABC Stereo`;
    const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
    window.open(twitterUrl, '_blank', 'width=600,height=400');
};

/**
 * Share on WhatsApp
 */
export const shareOnWhatsApp = (content: ShareableContent): void => {
    const url = generateShareUrl(content);
    const text = `${content.title} - ${url}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
};

/**
 * Share via Email
 */
export const shareViaEmail = (content: ShareableContent): void => {
    const url = generateShareUrl(content);
    const subject = encodeURIComponent(`${content.title} - ABC Stereo`);
    const body = encodeURIComponent(`Te comparto este ${content.type === 'video' ? 'video reportaje' : 'audio reportaje'}:\n\n${content.title}\n\n${url}`);
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
};
