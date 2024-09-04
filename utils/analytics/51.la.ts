declare const LA: any

export function initAnalytics() {
  if (!(window as any)?.LA || import.meta.dev) {
    return
  }

  LA.init({ id: 'KYbRiI8YogkuFp4i', ck: 'KYbRiI8YogkuFp4i' })
}
