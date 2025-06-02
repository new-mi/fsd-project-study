# Slices(доменные области)

- User
- Category
- Rating
- Company
- Review
- Correction

## Разделение pages

### Строго по slices

1. /pages/user/ui/Profile
2. /pages/user/ui/ProfileEdit
3. /pages/user/ui/Community
4. /pages/main/ui/Index - кастомный слайс для главной страницы, так как точно нельзя отнести к конкретной области. И будет присутствовать только в текущем слое

### По назначению

1. /pages/profile/ui/Index
2. /pages/profile/ui/Edit
3. /pages/community/ui/Index
