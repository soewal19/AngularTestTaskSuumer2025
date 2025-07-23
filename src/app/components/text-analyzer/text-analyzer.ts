import { Component, ViewChild, ElementRef, computed, signal, effect } from '@angular/core';
import { SynonymService } from '../../services/synonym';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-text-analyzer',
  templateUrl: './text-analyzer.html',
  styleUrls: ['./text-analyzer.scss']
})
export class TextAnalyzerComponent {
  text = signal('');
  synonyms = signal<string[]>([]);
  selectedText = signal('');
  synonymsFetched = signal(false);
  loading = signal(false);
  @ViewChild('textarea') textarea!: ElementRef<HTMLTextAreaElement>;

  charCount = computed(() => this.text().length);
  wordCount = computed(() => (this.text().match(/\b\w+\b/g) || []).length);

  constructor(private synonymService: SynonymService) {}

  onTextChange(event: Event) {
    const value = (event.target as HTMLTextAreaElement).value;
    this.text.set(value);
  }

  onGetSynonyms() {
    const sel = this.getSelection();
    this.selectedText.set(sel);
    this.synonymsFetched.set(false);
    if (sel) {
      this.loading.set(true);
      toSignal(this.synonymService.getSynonyms(sel), { initialValue: [] })().then(res => {
        this.synonyms.set(res.map((item: any) => item.word));
        this.synonymsFetched.set(true);
        this.loading.set(false);
      });
    } else {
      this.synonyms.set([]);
      this.synonymsFetched.set(false);
    }
  }

  onReplaceSynonym(synonym: string) {
    const textarea = this.textarea.nativeElement;
    const value = this.text();
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    if (start !== end) {
      this.text.set(value.substring(0, start) + synonym + value.substring(end));
      setTimeout(() => {
        textarea.setSelectionRange(start, start + synonym.length);
        textarea.focus();
      });
    }
    this.synonyms.set([]);
  }

  getSelection(): string {
    const textarea = this.textarea.nativeElement;
    const value = this.text();
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    return start !== end ? value.substring(start, end) : '';
  }

  copyText() {
    navigator.clipboard.writeText(this.text());
  }
}
