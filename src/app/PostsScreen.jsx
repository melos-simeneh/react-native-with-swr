import { ActivityIndicator, FlatList, Text } from "react-native";
import PostListItem from "../components/PostListItem";
import { usePosts } from "../hooks/post";

export default function PostsScreen() {
  const { posts, error, isLoading } = usePosts();
  if (isLoading) return <ActivityIndicator />;

  if (error) return <Text>Failed to fetch Data. {error.message}</Text>;

  return (
    <FlatList
      data={posts}
      renderItem={({ item }) => <PostListItem post={item} />}
      contentContainerStyle={{ gap: 10, padding: 10 }}
    />
  );
}
