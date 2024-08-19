import { DiscussionEmbed } from 'disqus-react';

const Comments = (props: any) => {
    return (
        <DiscussionEmbed
            shortname='the-average-cyclist'
            config={{ url: props.url, identifier: props.id, title: props.title, language: "en_US" }}
        />
    );
}

export default Comments;