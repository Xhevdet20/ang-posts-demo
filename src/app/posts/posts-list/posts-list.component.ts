import { Component, Input } from "@angular/core";
import { Post } from '../post.model';
@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent {
  @Input() posts: Post[] = [
    // {title: 'First Post', content: 'This is the first post\'s content ' },
    // {title: 'Second Post', content: 'This is the Second post\'s content ' },
    // {title: 'Third Post', content: 'This is the Third post\'s content ' }
  ]
}
