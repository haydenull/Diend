export interface Diend {
  readonly $el: HTMLElement
  readonly $data: Record<string, any>
}

export interface DiendConstructor<V extends Diend = Diend> {
  el: string
}

export const Diend: DiendConstructor
