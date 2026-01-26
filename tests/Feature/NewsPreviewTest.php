<?php

namespace Tests\Feature;

use App\Models\News;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class NewsPreviewTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function unauthenticated_users_cannot_view_unpublished_news()
    {
        $news = News::factory()->create(['is_published' => false]);

        $response = $this->get('/news/' . $news->slug);

        $response->assertStatus(404);
    }

    /** @test */
    public function authenticated_users_can_view_unpublished_news()
    {
        $this->actingAs(User::factory()->create());
        $news = News::factory()->create(['is_published' => false]);

        $response = $this->get('/news/' . $news->slug);

        $response->assertStatus(200);
    }

    /** @test */
    public function all_users_can_view_published_news()
    {
        $news = News::factory()->create(['is_published' => true]);

        $response = $this->get('/news/' . $news->slug);

        $response->assertStatus(200);

        $this->actingAs(User::factory()->create());
        $response = $this->get('/news/' . $news->slug);

        $response->assertStatus(200);
    }
}
