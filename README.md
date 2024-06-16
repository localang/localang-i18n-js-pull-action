# I18n Pull Action

This action pull i18n keysets from [localang.xyz](https://localang.xyz) service.

## Inputs

### `api-key`

**Required** API Key to update translations on [localang.xyz](https://localang.xyz).

### `project-id`

**Required** ID of project on [localang.xyz](https://localang.xyz).

## Example usage

```yaml
uses: actions/localang-i18n-pull@123qwe123eqw
with:
  api-key: ${{ secrets.LocalangApiKey }}
  project-id: 5
```